import { motion } from "framer-motion";
import { useEffect } from "react";
import Logo from "../../public/images/iconlogo.png";
import Image from "next/image";

const images = [
  "/image1.jpg",
  "/image2.jpg",
  "/image3.jpg",
  "image4.jpg",
  "image5.jpg",
];

const fadeDuration = 5000; // Adjust the duration of each fade (in milliseconds)

const Hero = () => {
  useEffect(() => {
    const video: any = document.getElementById("autoplay-video");
    video.play();
  }, []);

  return (
    <div className="w-full flex flex-col mt-10 md:mt-[6rem] items-center  justify-center">
      <div className="w-full flex gap-2 flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeInOut" }}
        >
          <Image src={Logo} alt="Logo" width={120} />
        </motion.div>
        <div className="flex flex-col w-full items-center justify-center gap-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.5, duration: 0.7, ease: "easeInOut" }}
            className="md:text-5xl text-3xl text-center md:px-0 px-10 tracking-tight text-gray-800 font-bold"
          >
            Empowering Africa&apos;s Future through the Art of Epoxy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.8, duration: 0.7, ease: "easeInOut" }}
            className="text-slate-500 md:px-0 px-10 md:w-2/3 text-center text-sm md:text-xl font-light"
          >
            Bahld Epoxy, established September 2011 in London, is a pioneering
            Epoxy company and training center located in Addis Ababa, Ethiopia,
            around Bole Bulbula.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ delay: 1.1, duration: 0.7, ease: "easeInOut" }}
          >
            <button className="md:text-lg mt-1 text-sm font-semibold bg-white rounded-lg px-3 py-2 md:py-2 md:px-4 text-gray-800 buttonshadow transition-all hover:opacity-70">
              Learn About Us
            </button>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ delay: 1.4, duration: 0.7, ease: "easeInOut" }}
        className="w-full py-10 md:w-2/3 px-4 md:px-0 flex"
      >
        {" "}
        <video
          className="border rounded shadow-sm"
          id="autoplay-video"
          autoPlay
          loop
          muted
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
      </motion.div>
    </div>
  );
};

export default Hero;
