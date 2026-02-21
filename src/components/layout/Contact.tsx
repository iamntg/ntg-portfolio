import React, { useState } from 'react';
import { Section } from './Section';
import { Button } from '../ui/Button';
import { Send, Instagram } from 'lucide-react';

export const Contact: React.FC = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMsg('');

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setIsSuccess(true);
                // Reset form success state after 5 seconds
                setTimeout(() => setIsSuccess(false), 5000);
            } else {
                const result = await response.json();
                setErrorMsg(result.error || 'Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Contact form submission error:', error);
            setErrorMsg('An error occurred. Please try reaching out via Instagram.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Section id="contact">
            <div className="max-w-5xl mx-auto bg-card rounded-3xl border border-border overflow-hidden shadow-2xl flex flex-col md:flex-row">

                {/* Left Info Column */}
                <div className="w-full md:w-5/12 bg-secondary p-10 md:p-14 flex flex-col justify-between">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Let's create something together.</h2>
                        <p className="text-muted-foreground mb-12">
                            Fill out the form to get a quote, or reach out directly through social media. I typically respond within 24 hours.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <a href="https://instagram.com/nitheeshtg" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-background hover:bg-accent transition-colors group">
                            <Instagram className="w-6 h-6 text-muted-foreground group-hover:text-foreground" />
                            <div>
                                <p className="font-medium text-sm">DM on Instagram</p>
                                <p className="text-xs text-muted-foreground">@nitheeshtg</p>
                            </div>
                        </a>
                    </div>
                </div>

                {/* Right Form Column */}
                <div className="w-full md:w-7/12 p-10 md:p-14 bg-background">
                    {isSuccess ? (
                        <div className="h-full flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in duration-500">
                            <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mb-4">
                                <Send className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold font-heading">Message Sent!</h3>
                            <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you as soon as possible to discuss your project.</p>
                            <Button onClick={() => setIsSuccess(false)} variant="outline" className="mt-8">
                                Send another message
                            </Button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">

                            {/* Honeypot Field */}
                            <input type="text" name="hp" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                                    <input required name="name" id="name" type="text" className="w-full px-4 py-3 rounded-lg border border-input bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                                    <input required name="email" id="email" type="email" className="w-full px-4 py-3 rounded-lg border border-input bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="john@example.com" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="ig" className="text-sm font-medium">Instagram Handle</label>
                                    <input name="ig" id="ig" type="text" className="w-full px-4 py-3 rounded-lg border border-input bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="@johndoe" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="date" className="text-sm font-medium">Estimated Shoot Date</label>
                                    <input name="date" id="date" type="date" className="w-full px-4 py-3 rounded-lg border border-input bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-foreground" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="type" className="text-sm font-medium">Project Type</label>
                                    <select name="type" id="type" className="w-full px-4 py-3 rounded-lg border border-input bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-foreground appearance-none" defaultValue="">
                                        <option value="" disabled>Select a type...</option>
                                        <option value="reels">IG Reels / TikTok Ads</option>
                                        <option value="event">Event Coverage</option>
                                        <option value="photo">Photography Session</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="budget" className="text-sm font-medium">Minimum project budget</label>
                                    <select name="budget" id="budget" className="w-full px-4 py-3 rounded-lg border border-input bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-foreground appearance-none" defaultValue="">
                                        <option value="" disabled>Select a range...</option>
                                        <option value="<300">Under $300</option>
                                        <option value="300-600">$300 - $600</option>
                                        <option value="600-1200">$600 - $1,200</option>
                                        <option value="1200+">$1,200+</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">Message details (goals, deliverables)</label>
                                <textarea required name="message" id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-input bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none" placeholder="Tell me about your brand, what you're looking to achieve, and any specific ideas..." />
                            </div>

                            {errorMsg && (
                                <p className="text-sm text-destructive">{errorMsg}</p>
                            )}

                            <Button type="submit" size="lg" className="w-full h-14 text-lg" isLoading={isSubmitting}>
                                Send Inquiry
                            </Button>
                            <p className="text-xs text-center text-muted-foreground mt-4">
                                By submitting this form, you agree to being contacted regarding your inquiry.
                            </p>
                        </form>
                    )}
                </div>
            </div>
        </Section>
    );
};
