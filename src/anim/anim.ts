export const mainTransitionProps = {
	initial: { y: -20, opacity: 0 },
	animate: { y: 0, opacity: 1 },
	exit: { y: 60, opacity: 0 },
	transition: {
		ease: [0.6, 0.01, 0.5, 0.9],
		// type: "spring",
		// stiffness: 150,
		// damping: 10,
	},
} as const;

export const transition = { duration: 0.5, ease: [0.6, 0.01, 0.5, 0.9] };

export const container = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

export const item = {
	hidden: { y: 100, opacity: 0 },
	show: { y: 0, opacity: 1, transition: { ...transition } },
};
