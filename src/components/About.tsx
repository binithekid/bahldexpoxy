import { motion } from "framer-motion";
import photo from "../../public/image2.jpg";
import Image from "next/image";
import Mission from "../../public/mission.png";

const About = () => {
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
      <div className="w-full px-4 md:px-40 gap-8 py-40 flex md:flex-row flex-col items-center justify-center">
        <motion.div
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="md:w-1/2 w-full flex flex-col gap-2"
        >
          <h1 className="md:text-4xl text-2xl tracking-tight text-gray-800 font-bold">
            About Bahld Epoxy
          </h1>

          <p className="text-slate-500 text-sm md:text-xl font-light">
            Bahld Epoxy, established September 2011 in London, is a pioneering
            Epoxy company and training center located in Addis Ababa, Ethiopia,
            around Bole Bulbula. Our diverse projects are not just about epoxy;
            they&apos;re about
            <span className="font-semibold text-gray-600">
              {" "}
              empowering individuals, enhancing spaces, and making a positive
              impact.
            </span>{" "}
            By choosing Bahld Epoxy, you&apos;re not just investing in a
            service, you&apos;re
            <span className="font-semibold text-gray-600">
              {" "}
              contributing to a brighter future for Ethiopia and its youth.
            </span>
          </p>
          <button className="md:text-lg w-max mt-1 text-sm font-semibold bg-white rounded-lg px-3 py-2 md:py-2 md:px-4 text-gray-800 buttonshadow transition-all hover:opacity-70">
            Learn More
          </button>
        </motion.div>
        <motion.div
          variants={itemTwo}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="md:w-1/2 w-full"
        >
          <Image src={photo} alt="About" className="rounded shadow-sm" />
        </motion.div>
      </div>
      <div className="flex-col gap-2 px-4 md:px-40 py-10 flex w-full md:items-center justify-center">
        <motion.h1
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="md:text-4xl text-2xl tracking-tight text-gray-800 font-bold"
        >
          Our Mission
        </motion.h1>
        <motion.p
          variants={itemTwo}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-slate-500 md:text-center md:w-2/3 text-sm md:text-xl font-light"
        >
          To unlock the transformative power of epoxy in Ethiopia by empowering
          young talent, pioneering artistic innovation, and championing
          sustainable practices.
        </motion.p>
        <motion.div
          variants={itemThree}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Image
            src={Mission}
            alt="header"
            className="rounded-lg mt-2 md:mt-8 shadow-sm"
          />
        </motion.div>
      </div>
    </>
  );
};

export default About;
