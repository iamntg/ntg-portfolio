import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { createPortal } from 'react-dom';
import type { Category } from '@/data/work';

interface MobileFilterSheetProps {
    isOpen: boolean;
    onClose: () => void;
    categories: Category[];
    activeCategory: Category;
    onSelectCategory: (category: Category) => void;
}

export const MobileFilterSheet: React.FC<MobileFilterSheetProps> = ({
    isOpen,
    onClose,
    categories,
    activeCategory,
    onSelectCategory,
}) => {
    // Trap focus and handle ESC key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex flex-col justify-end">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Sheet */}
                    <motion.div
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '100%' }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        drag="y"
                        dragConstraints={{ top: 0 }}
                        dragElastic={0.2}
                        onDragEnd={(_, info) => {
                            if (info.offset.y > 100) onClose();
                        }}
                        className="relative w-full max-h-[85vh] bg-card rounded-t-[32px] border-t border-border shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Drag Handle */}
                        <div className="flex justify-center p-4">
                            <div className="w-12 h-1.5 rounded-full bg-muted-foreground/20" />
                        </div>

                        {/* Title */}
                        <div className="px-8 pb-4 flex items-center justify-between">
                            <h2 className="text-2xl font-heading font-black">Filter Work</h2>
                            <button
                                onClick={onClose}
                                className="p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Options List */}
                        <div className="flex flex-col px-4 pb-12 overflow-y-auto no-scrollbar">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => {
                                        onSelectCategory(category);
                                        onClose();
                                    }}
                                    className="flex items-center justify-between w-full px-4 py-6 rounded-2xl hover:bg-muted/50 transition-colors group"
                                >
                                    <span className={`text-lg font-bold transition-colors ${activeCategory === category ? 'text-primary' : 'text-foreground'
                                        }`}>
                                        {category}
                                    </span>
                                    {activeCategory === category && (
                                        <Check className="w-6 h-6 text-primary" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    );
};
