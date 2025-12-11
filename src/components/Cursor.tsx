import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Cursor = () => {
    // State for discrete properties (width, height, radius) to allow conditional transitions
    const [styles, setStyles] = useState({ width: 12, height: 12, radius: "50%", opacity: 1 });
    const prevStyles = useRef({ width: 12, height: 12, radius: "50%", opacity: 1 });

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Position tracking (instant)
    const targetX = useMotionValue(0);
    const targetY = useMotionValue(0);
    
    // Smooth out position to match the smooth resizing
    const springConfig = { stiffness: 450, damping: 35, mass: 0.8 };
    const cursorX = useSpring(targetX, springConfig);
    const cursorY = useSpring(targetY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);

            const target = e.target as HTMLElement;
            // Broader selector to catch standard semantic elements too
            const interactiveElement = target.closest("[data-element-type]") as HTMLElement;

            // Calculate new styles
            let newWidth = 12;
            let newHeight = 12;
            let newRadius = "50%";
            let newOpacity = 1;
            
            // Default position tracking
            let newX = e.clientX;
            let newY = e.clientY;

            if (interactiveElement) {
                const rect = interactiveElement.getBoundingClientRect();
                
                // Check for explicit type OR fallback to semantic tag
                const elementType = interactiveElement.getAttribute("data-element-type");
                const isLink = elementType === "link";
                const isButton = elementType === "button";
                const isPill = elementType === 'pill';

                // iPad Style Magnetic Center
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                
                const distanceX = e.clientX - centerX;
                const distanceY = e.clientY - centerY;
                
                newX = centerX + distanceX * 0.1;

                if (isLink) {
                    // Underline style
                    newY = rect.bottom + 4; 
                    newWidth = rect.width;
                    newHeight = 4;
                    newRadius = "10px"; // Rounded line ends
                } else if (isButton) {
                    // Blob style
                    newY = centerY + distanceY * 0.1;
                    newWidth = rect.width + 12;
                    newHeight = rect.height + 12;
                    newRadius = "6px"; // Slightly rounded rect
                    newOpacity = 0.5;
                
                } else if (isPill) {
                    newY = centerY + distanceY * 0.1;
                    newWidth = rect.width + 7;
                    newHeight = rect.height + 7;
                    newRadius = '100px'; // Slightly rounded rect
                    newOpacity = 0.5;
                } else {
                     // Fallback for other interactive elements (act like buttons)
                    newY = centerY + distanceY * 0.1;
                    newWidth = rect.width + 12;
                    newHeight = rect.height + 12;
                    newRadius = "6px";
                    newOpacity = 0.5;
                }
            }
            
            // Continuous position update (always fast)
            targetX.set(newX);
            targetY.set(newY);

            // Discrete style update (only trigger render if changed)
            if (
                newWidth !== prevStyles.current.width || 
                newHeight !== prevStyles.current.height || 
                newRadius !== prevStyles.current.radius ||
                newOpacity !== prevStyles.current.opacity 
            ) {
                const updated = { width: newWidth, height: newHeight, radius: newRadius, opacity: newOpacity };
                setStyles(updated);
                prevStyles.current = updated;
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY, targetX, targetY]);

    return (
        <motion.div
            className="custom-cursor"
            style={{
                left: cursorX,
                top: cursorY,
                position: "fixed",
                pointerEvents: "none",
                zIndex: 9999,
                x: "-50%",
                y: "-50%",
                backgroundColor: 'white', 
                borderRadius: styles.radius,
                // opacity: styles.opacity,
                mixBlendMode: 'difference'
            }}
            animate={{
                width: styles.width,
                height: styles.height,
            }}
            transition={{
                // Smoother transition physics
                type: "spring",
                // Soften return animation (450/35 instead of 800/40) for less harshness
                stiffness: styles.width === 12 ? 450 : 300,
                damping: styles.width === 12 ? 35 : 25,
                mass: 0.8 // Slightly lighter feel
            }}
        />
    );
};

export default Cursor;
