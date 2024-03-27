import { motion } from "framer-motion";
import photo from "../../public/image1.jpg";
import Image from "next/image";
import Mission from "../../public/face.jpg";

const Goals = () => {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.2, duration: 0.7, ease: "easeInOut" },
    },
  };

  const itemTwo = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.5, duration: 0.7, ease: "easeInOut" },
    },
  };

  const itemThree = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.8, duration: 0.7, ease: "easeInOut" },
    },
  };

  return (
    <>
      <div className="w-full px-4 md:px-40 gap-8 md:py-40 flex md:flex-row flex-col items-center justify-center">
        <motion.div
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="md:w-1/2 w-full"
        >
          <Image src={photo} alt="About" className="rounded shadow-sm" />
        </motion.div>
        <motion.div
          variants={itemTwo}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="md:w-1/2 flex flex-col md:ml-8 gap-2"
        >
          <h1 className="md:text-4xl text-2xl tracking-tight text-gray-800 font-bold">
            Our Goals
          </h1>

          <p className="text-slate-500 text-sm md:text-xl font-light">
            To be the leading empowerment force and sustainability champion in
            Ethiopia&apos;s epoxy industry, reducing youth unemployment
            equipping with essential skills, and transforming spaces with
            eco-friendly, high-quality epoxy applications.
          </p>
          <button className="w-max mt-1 md:text-lg text-sm font-semibold bg-white rounded-lg py-2 px-3 md:px-4 text-gray-800 buttonshadow transition-all hover:opacity-70">
            Learn More
          </button>
        </motion.div>
      </div>
      <div className="flex-col gap-2 px-4 md:px-40 py-40 md:py-10 flex w-full md:items-center justify-center">
        <motion.h1
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="md:text-4xl text-2xl tracking-tight text-gray-800 font-bold"
        >
          Our Vision
        </motion.h1>
        <motion.p
          variants={itemTwo}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-slate-500 md:text-center md:w-2/3 text-sm md:text-xl font-light"
        >
          We envision Bahld Epoxy as the leading innovator and educator in
          Africa&apos;s epoxy industry, transforming lives and spaces through
          exceptional training, craftsmanship, and sustainable solutions.
        </motion.p>
        <motion.div
          variants={itemThree}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full flex items-center justify-center"
        >
          <Image
            src={Mission}
            alt="header"
            className="rounded-lg mt-3 md:mt-8 md:w-[70%] shadow-sm"
          />
        </motion.div>
      </div>
    </>
  );
};

export default Goals;
