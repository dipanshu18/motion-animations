import { motion, useAnimationControls } from "motion/react";

export function AnimationsControl() {
  const controls = useAnimationControls();

  return (
    <div>
      <h1>Animations control</h1>

      <button
        onClick={() => {
          controls.start("show");
        }}
        type="button"
        className="my-5 bg-black text-white px-10 py-2"
      >
        Show it
      </button>
      <button
        onClick={() => {
          controls.start("initial");
        }}
        type="button"
        className="ml-5 my-5 bg-black text-white px-10 py-2"
      >
        Hide it
      </button>
      <motion.div
        variants={{
          initial: {
            opacity: 0,
            scale: 0,
          },
          show: {
            opacity: 1,
            scale: 1,
          },
        }}
        initial="initial"
        animate={controls}
        className="bg-black w-96 h-96 my-5"
      />
    </div>
  );
}
