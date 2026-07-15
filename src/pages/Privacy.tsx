import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const Privacy: React.FC = () => {
    return (
        <main className="min-h-screen bg-background text-foreground font-sans">
            <div className="container mx-auto px-4 md:px-6 max-w-3xl py-16 md:py-24">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to home
                </Link>

                <h1 className="text-3xl md:text-5xl font-heading font-bold mb-6">Privacy Policy</h1>
                <p className="text-sm text-muted-foreground mb-10">Last updated: {new Date().getFullYear()}</p>

                <div className="space-y-6 text-muted-foreground leading-relaxed">
                    <p>
                        This is a placeholder privacy policy for Nebulatic Studio. It will be
                        replaced with a full policy before launch.
                    </p>
                    <p>
                        When you reach out through the contact form or by email, the details you
                        share (such as your name, email address, and project notes) are used only
                        to respond to your inquiry and discuss potential work. They are not sold or
                        shared with third parties.
                    </p>
                    <p>
                        If you have any questions about how your information is handled, please get
                        in touch and I'll be glad to help.
                    </p>
                </div>
            </div>
        </main>
    );
};
