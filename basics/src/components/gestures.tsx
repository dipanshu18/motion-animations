import { motion, MotionConfig } from "motion/react";

export function Gestures() {
  return (
    <div>
      <h1>Gestures</h1>

      <MotionConfig
        transition={{
          duration: 0.15,
        }}
      >
        <motion.button
          whileTap={{
            scale: 0.95,
          }}
          type="button"
          className="block my-5 px-10 py-2 bg-neutral-300 text-black"
        >
          Click me
        </motion.button>
        <motion.button
          type="button"
          whileHover={{
            scale: 1.05,
            rotate: 1,
          }}
          className="block my-5 px-10 py-2 bg-black text-neutral-300"
        >
          Click me
        </motion.button>
      </MotionConfig>
    </div>
  );
}
