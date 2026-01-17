import type { Variant, Variants } from "framer-motion";

// Reduced motion variants that respect user preferences
const reduceMotion = (variants: Variants): Variants => {
    const reduced: Variants = {};
    Object.keys(variants).forEach((key) => {
        const variant = variants[key];
        if (typeof variant === "function") {
            reduced[key] = variant;
        } else if (typeof variant === "object" && variant !== null) {
            // Remove transition property to eliminate animation timing
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { transition, ...rest } = variant as Record<string, unknown>;
            reduced[key] = rest as Variant;
        }
    });
    return reduced;
};

export const sectionFadeIn: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

export const featuredCardVariants: Variants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 25,
            mass: 1,
        },
    },
};

export const cardStaggerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 25,
            delay: i * 0.08,
        },
    }),
};

// Reduced-motion variants
export const sectionFadeInReduced = reduceMotion(sectionFadeIn);
export const featuredCardVariantsReduced = reduceMotion(featuredCardVariants);
export const cardStaggerVariantsReduced = reduceMotion(cardStaggerVariants);
