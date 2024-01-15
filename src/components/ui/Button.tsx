import { cn } from "@/utils/utils";
import { cva, type VariantProps } from "class-variance-authority";
import type { Variants } from "framer-motion";
import { motion, MotionProps } from "framer-motion";
import React, { ForwardedRef, useState } from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> &
	MotionProps &
	VariantProps<typeof buttonVariants> & {
		onStart?: () => void;
		className?: string;
	};

const pushButton: Variants = {
	unpressed: {
		scale: [null, 0.85, 1],
		opacity: 1,
	},
	pressed: {
		scale: 0.85,
		opacity: 0.7,
		transition: {
			type: "spring",
			duration: 0.3,
			bounce: 0.5,
		},
	},
};
const buttonVariants = cva(
	"inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
	{
		variants: {
			variant: {
				outline:
					"border rounded-md border-muted-foreground/20 p-2 text-sm font-medium hover:bg-muted-foreground/20",
				glass:
					"rounded-md bg-muted hover:bg-muted-foreground/20 p-2 backdrop-blur-lg",
				danger:
					"rounded-md dark:bg-red-900 bg-red-500  hover:bg-red-700/40 p-2 backdrop-blur-lg",
			},
		},
	}
);

export const Button = React.forwardRef(
	(
		{ className, variant, onStart, ...props }: Props,
		ref: ForwardedRef<HTMLButtonElement>
	) => {
		const [pressing, setPressing] = useState(false);

		return (
			<motion.button
				type="button"
				ref={ref}
				variants={pushButton}
				initial={false}
				animate={pressing ? "pressed" : "unpressed"}
				transition={{ type: "spring", duration: 0.3, bounce: 0.5 }}
				onTapStart={() => {
					setPressing(true);
					onStart;
				}}
				onTap={() => {
					setPressing(false);
				}}
				onTapCancel={() => {
					setPressing(false);
				}}
				className={cn(buttonVariants({ variant, className }))}
				{...props}
			/>
		);
	}
);
