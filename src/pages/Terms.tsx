import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const Terms: React.FC = () => {
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

                <h1 className="text-3xl md:text-5xl font-heading font-bold mb-6">Terms of Service</h1>
                <p className="text-sm text-muted-foreground mb-10">Last updated: {new Date().getFullYear()}</p>

                <div className="space-y-6 text-muted-foreground leading-relaxed">
                    <p>
                        This is a placeholder terms of service for Nebulatic Studio. It will be
                        replaced with full terms before launch.
                    </p>
                    <p>
                        This website showcases photography and video work by Nitheesh (NTG). All
                        images, videos, and written content are owned by their respective creators
                        and may not be reused without permission.
                    </p>
                    <p>
                        The specific scope, pricing, deliverables, and timelines for any project are
                        agreed separately in writing before work begins.
                    </p>
                </div>
            </div>
        </main>
    );
};
