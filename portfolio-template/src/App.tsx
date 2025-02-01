import { motion, useScroll } from "motion/react";
import { Reveal } from "./components/reveal";

export default function App() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        style={{
          scaleX: scrollYProgress,
        }}
        className="h-2 w-full sticky top-0 z-10 origin-left bg-rose-400"
      />
      <div className="max-w-2xl mx-auto">
        <div className="h-dvh grid place-content-center">
          <Reveal>
            <img
              className="object-cover mx-auto w-96 h-96 rounded-full"
              src="https://images.unsplash.com/photo-1738363436637-ee6f4a910715?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Profile pic"
            />
          </Reveal>
          <Reveal>
            <h2 className="my-5 text-3xl font-bold">
              I'm{" "}
              <span className="relative">
                Dipanshu Torawane{" "}
                {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
                <svg
                  viewBox="0 0 162 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-8 bottom-0 left-0 right-0"
                >
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                      duration: 1.5,
                      delay: 0.75,
                    }}
                    d="M1 10.2091C9.5 4.70916 14.3 2.20915 21.5 2.20915C28.7 2.20915 33.3333 7.04251 36.5 8.70917C54 17.9197 65.3354 2.95636 71.5 2.20915C88 0.209173 88.3333 6.04248 96.5 10.2091C105 12.2092 110.393 10.8216 124.5 4.20916C140.5 -3.2908 153.667 3.87582 161 10.2091"
                    stroke={"oklch(0.712 0.194 13.428)"}
                    strokeWidth={3}
                  />
                </svg>
              </span>
            </h2>
          </Reveal>
          <Reveal>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem nobis, dolore dolorem, laborum aliquam ut quae
              necessitatibus facere eaque quia aliquid consequuntur excepturi
              quasi asperiores tempore? Incidunt quasi doloribus quisquam.
            </p>
          </Reveal>
        </div>

        <div className="grid place-content-center my-20">
          <Reveal>
            <h2 className="my-5 text-3xl font-bold">Projects</h2>
          </Reveal>
          <div className="grid p-5 md:px-0 md:py-5 gap-5">
            {Array(10)
              .fill("")
              .map((_, idx) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                <Reveal key={idx}>
                  <div className="bg-rose-50 grid grid-cols-1 md:grid-cols-2 gap-5 rounded-md">
                    <img
                      src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      className="object-cover rounded-t md:rounded-tr-none md:rounded-l"
                    />
                    <div className="pb-5 px-5 md:px-0 md:pb-0 md:pt-5">
                      <h1 className="text-xl font-semibold">Project Title</h1>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Voluptatem nobis, dolore dolorem, laborum aliquam
                        ut quae
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
