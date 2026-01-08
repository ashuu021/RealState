import { ButtonHTMLAttributes, forwardRef } from "react";
import { MoveRight } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    icon?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", icon, children, ...props }, ref) => {
        const variants = {
            primary: "bg-primary text-white hover:bg-primary/90 shadow-md hover:shadow-lg",
            secondary: "bg-secondary text-foreground hover:bg-secondary/80",
            outline: "border border-gray-200 bg-transparent hover:bg-gray-50 text-foreground",
            ghost: "bg-transparent hover:bg-gray-100 text-foreground",
        };

        const sizes = {
            sm: "h-9 px-4 text-sm rounded-full",
            md: "h-11 px-6 text-base rounded-full",
            lg: "h-14 px-8 text-lg rounded-full",
        };

        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            >
                {children}
                {icon && <MoveRight className="ml-2 w-4 h-4" />}
            </button>
        );
    }
);

Button.displayName = "Button";

export { Button, cn };
