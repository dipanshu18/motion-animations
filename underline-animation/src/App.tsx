import { motion } from "motion/react";

export default function App() {
  return (
    <>
      <div className="h-dvh grid place-content-center place-items-center">
        <h1 className="text-5xl mb-8 font-bold tracking-wide">
          Art of{" "}
          <span className="tracking-tighter relative">
            motion
            {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
            <svg
              viewBox="0 0 162 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute bottom-0 left-0 right-0"
            >
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 1,
                }}
                d="M1 10.2091C9.5 4.70916 14.3 2.20915 21.5 2.20915C28.7 2.20915 33.3333 7.04251 36.5 8.70917C54 17.9197 65.3354 2.95636 71.5 2.20915C88 0.209173 88.3333 6.04248 96.5 10.2091C105 12.2092 110.393 10.8216 124.5 4.20916C140.5 -3.2908 153.667 3.87582 161 10.2091"
                stroke="red"
                strokeWidth={3}
              />
            </svg>
          </span>
        </h1>
        <p className="max-w-xl mx-auto text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          quasi, voluptatem quaerat vitae totam numquam aut provident enim
          excepturi eligendi accusamus iure quod, ad laboriosam?
        </p>
      </div>
    </>
  );
}
