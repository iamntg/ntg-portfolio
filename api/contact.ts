import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';
import { google } from 'googleapis';

const resend = new Resend(process.env.RESEND_API_KEY);

// Extremely basic in-memory rate limiting map (per instance)
const rateLimitMap = new Map<string, number>();

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { name, email, ig, date, type, budget, message, hp } = req.body;

        // 1. Spam Protection: Honeypot field (hp)
        if (hp) {
            // If honeypot is filled, silently return success to the bot
            return res.status(200).json({ success: true, message: 'Message sent' });
        }

        // 2. Basic Validation
        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // 3. Spam Protection: Rate Limiting
        const ip = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown';
        const now = Date.now();
        const lastRequest = rateLimitMap.get(ip as string);

        // Limit to 1 request per minute per IP
        if (lastRequest && now - lastRequest < 60000) {
            return res.status(429).json({ error: 'Too many requests. Please try again later.' });
        }
        rateLimitMap.set(ip as string, now);

        // 4. Send Email Notification with Resend
        if (process.env.RESEND_API_KEY) {
            try {
                await resend.emails.send({
                    from: 'Contact Form <onboarding@resend.dev>', // Should be updated with verified domain
                    to: ['hello@ntg.com'], // Replace with actual email
                    subject: `New Inquiry from ${name}`,
                    html: `
            <h3>New Contact Form Submission</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Instagram:</strong> ${ig || 'N/A'}</p>
            <p><strong>Shoot Date:</strong> ${date || 'N/A'}</p>
            <p><strong>Project Type:</strong> ${type || 'N/A'}</p>
            <p><strong>Budget Range:</strong> ${budget || 'N/A'}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          `,
                });
            } catch (e) {
                console.error("Resend error:", e);
            }
        } else {
            console.warn("Missing RESEND_API_KEY");
        }

        // 5. Add to Google Sheets
        if (process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL && process.env.GOOGLE_PRIVATE_KEY && process.env.GOOGLE_SHEET_ID) {
            try {
                const auth = new google.auth.GoogleAuth({
                    credentials: {
                        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
                        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
                    },
                    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
                });

                const sheets = google.sheets({ version: 'v4', auth });

                await sheets.spreadsheets.values.append({
                    spreadsheetId: process.env.GOOGLE_SHEET_ID,
                    range: 'A:H', // Generic range syntax append creates new rows below
                    valueInputOption: 'USER_ENTERED',
                    requestBody: {
                        values: [
                            [
                                new Date().toISOString(),
                                name,
                                email,
                                ig || '',
                                date || '',
                                type || '',
                                budget || '',
                                message
                            ]
                        ]
                    }
                });
            } catch (e) {
                console.error("Google Sheets error:", e);
            }
        } else {
            console.warn("Missing Google credentials");
        }

        return res.status(200).json({ success: true, message: 'Message sent successfully' });
    } catch (error) {
        console.error('Error handling contact form:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
