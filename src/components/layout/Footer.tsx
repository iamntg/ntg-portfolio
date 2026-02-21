import React from 'react';
import { navLinks } from '../../data';
import { Camera, Instagram, Twitter, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-secondary text-secondary-foreground py-12 md:py-16 mt-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <a href="#" className="flex items-center gap-2 text-2xl font-heading font-bold tracking-tighter mb-4">
                            <Camera className="w-8 h-8" />
                            <span>NTG</span>
                        </a>
                        <p className="text-muted-foreground text-sm max-w-sm mb-6">
                            Cinematic video production and photography for forward-thinking brands and creators in Calgary, AB.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="#" className="p-2 bg-background rounded-full hover:bg-accent hover:text-accent-foreground transition-colors" aria-label="Instagram">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-background rounded-full hover:bg-accent hover:text-accent-foreground transition-colors" aria-label="Twitter">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-background rounded-full hover:bg-accent hover:text-accent-foreground transition-colors" aria-label="Email">
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
                        <ul className="space-y-3">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div>
                        <h3 className="font-semibold mb-4 text-lg">Contact</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li>Calgary, Alberta (YYC)</li>
                            <li>Available for travel</li>
                            <li>
                                <a href="mailto:hello@ntg.com" className="hover:text-foreground transition-colors">hello@ntg.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-border/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Nitheesh (NTG). All rights reserved.</p>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
