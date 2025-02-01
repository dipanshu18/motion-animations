import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export function BasicsOfMotion() {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <h1>BASICS</h1>

      <motion.button
        type="button"
        onClick={() => setVisible((prev) => !prev)}
        className="px-5 py-2 bg-black text-white my-10"
        layout
      >
        Show/Hide
      </motion.button>
      <AnimatePresence mode="popLayout">
        {visible && (
          <motion.div
            initial={{ rotate: 0, scale: 0, y: 0 }}
            animate={{ rotate: 180, scale: 1, y: [0, 150, -150, -150, 0] }}
            exit={{ rotate: 0, scale: 0, y: 0 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              times: [0, 0.25, 0.5, 0.85, 1],
            }}
            className="w-96 h-96 bg-black"
          />
        )}
      </AnimatePresence>
    </div>
  );
}
