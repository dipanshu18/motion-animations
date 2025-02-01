import { motion, MotionConfig, useInView } from "motion/react";
import { useRef } from "react";

export function ViewBasedAnimations() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="h-[250vh] min-h-full">
      <h1 className="h-[100vh]">View based animations</h1>

      <MotionConfig transition={{ duration: 0.5 }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="h-[50vh] bg-black"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="h-[50vh] bg-neutral-800"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="h-[50vh] bg-gray-800"
        />
      </MotionConfig>
      <div
        ref={ref}
        className="h-[100vh]"
        style={{
          backgroundColor: isInView ? "red" : "blue",
          transition: "1s background",
        }}
      />
    </div>
  );
}
