import React from "react";
import { motion } from "framer-motion";
import mountain from "../assets/mountain.jpg";
const Animatedcards = () => {
  return (
    <>
      <motion.section
        whileHover={{
          background: "crimson",
          color: "white",
          opacity: 0.7,
          borderRadius: "6px",
          y: -20.4,
          //   rotate:5
        }}
        whileTap={{
          backgroundColor: "purple",
          color: "white",
          opacity: 0.7,
          borderRadius: "6px",
          y: 3.4,
        }}
        transition={{
          ease: [0.42, 0, 0.58, 1],
          delay: 0.2,
        }}
      >
        <section
          style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          className="flex px-2 py-2 cursor-pointer rounded-md items-center w-[20rem] justify-center flex-col"
        >
          <div className="w-full">
            <img
              className="w-full rounded-md"
              src={mountain}
              alt="_mountain"
              loading="lazy"
            />
          </div>
          <div className="text-[1rem] w-[]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque ut
            ullam ab tempore distinctio maxime illo odit, cumque incidunt
            cupiditate libero eligendi nobis enim aut recusandae laudantium
            dicta! Error recusandae tempore ea, minus atque magnam voluptatum
            rem odit fugiat odio.
          </div>
        </section>
      </motion.section>

    </>
  );
};

export default Animatedcards;

export const CardGrid = () => {
  return (
    <>
     
    </>
  );
};
