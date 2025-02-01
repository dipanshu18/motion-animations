/* eslint-disable react-hooks/exhaustive-deps */
import { motion, useInView, useAnimation } from "motion/react";
import { useEffect, useRef, type ReactNode } from "react";

export function Reveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const animationControl = useAnimation();

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (isInView) {
      animationControl.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} className="relative w-full overflow-hidden">
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: 75,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        transition={{
          duration: 0.75,
          delay: 0.3,
        }}
        initial="hidden"
        animate={animationControl}
      >
        {children}
      </motion.div>
    </div>
  );
}
