import React, { useState, useEffect } from 'react';
import { Menu, X, Camera } from 'lucide-react';
import { navLinks } from '@/data';
import { Button } from '@/components/ui/Button';
import { scrollToSection } from '@/utils/scroll';

export const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMobileMenuOpen]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'glass py-4 shadow-sm' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2 text-xl font-heading font-bold tracking-tighter z-[60]">
                    <Camera className="w-6 h-6" />
                    <span>NTG</span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <ul className="flex items-center gap-6">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    onClick={(e) => scrollToSection(e, link.href, () => setIsMobileMenuOpen(false))}
                                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <Button variant="primary" size="sm" onClick={(e) => scrollToSection(e, '#contact')}>Get a Quote</Button>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden z-[60] p-2 -mr-2 text-foreground"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Nav - Full screen overlay */}
            <div
                className={`fixed inset-0 z-50 h-screen bg-white/90 backdrop-blur-2xl md:hidden transition-transform duration-300 ease-in-out flex flex-col items-center justify-center gap-8 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <ul className="flex flex-col items-center gap-8 pt-12">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="text-3xl font-heading font-bold tracking-tight hover:text-primary transition-colors"
                                onClick={(e) => scrollToSection(e, link.href, () => setIsMobileMenuOpen(false))}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="mt-4 flex flex-col items-center gap-6">
                    <Button variant="primary" size="lg" className="w-56 h-14 text-lg" onClick={(e) => scrollToSection(e, '#contact', () => setIsMobileMenuOpen(false))}>
                        Book a Shoot
                    </Button>
                </div>
            </div>
        </header>
    );
};
