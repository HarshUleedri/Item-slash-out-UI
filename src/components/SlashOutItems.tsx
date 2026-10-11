import { useEffect, useState } from "react";
import { AnimatePresence, motion, stagger, useAnimate } from "motion/react";

export default function SlashOutItems({
  items,
}: {
  items: { name: string; isChecked: boolean }[];
}) {
  const [itemsList, setIstemsList] =
    useState<{ name: string; isChecked: boolean }[]>(items);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "[data-item",
      { opacity: [0, 1], x: [-50, 0] },
      {
        delay: stagger(0.1),
        duration: 0.5,
      },
    );
  }, [animate]);

  return (
    <div ref={scope} className="flex items-start flex-col gap-4">
      {[...itemsList]
        .sort((a, b) => Number(a.isChecked) - Number(b.isChecked))
        .map((item) => (
          <motion.div
            key={item.name}
            data-item
            layout
            transition={{
              layout: {
                type: "spring",
                stiffness: 250,
                damping: 20,
                delay: 0.5,
              },
            }}
            onClick={() =>
              setIstemsList((prev) =>
                prev.map((value) =>
                  value.name === item.name
                    ? { ...value, isChecked: !value.isChecked }
                    : value,
                ),
              )
            }
            className="flex items-center gap-2 px-4 py-2 rounded-lg shadow border min-w-72 border-neutral-100"
          >
            <div>
              <AnimatePresence mode="wait" initial={false}>
                {item.isChecked ? (
                  <motion.svg
                    key="checked"
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.7 }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                      damping: 10
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-orange-600 size-4"
                  >
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM17.4571 9.45711L11 15.9142L6.79289 11.7071L8.20711 10.2929L11 13.0858L16.0429 8.04289L17.4571 9.45711Z"></path>
                  </motion.svg>
                ) : (
                  <motion.svg
                    key="unchecked"
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.7 }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-neutral-200 size-4"
                  >
                    <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"></path>
                  </motion.svg>
                )}
              </AnimatePresence>
            </div>
            <motion.span
              layout
              className={`text-sm leading-0 text-neutral-400 font-semibold relative `}
            >
              {item.name}
              <motion.span
                className="absolute left-0 top-1/2 h-[1.5px] bg-neutral-400"
                initial={false}
                animate={{
                  width: item.isChecked ? "100%" : "0%",
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
              />
            </motion.span>
          </motion.div>
        ))}
    </div>
  );
}
