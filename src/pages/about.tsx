import NavBar from "@/components/NavBar";
import { motion } from "framer-motion";
import Image from "next/image";
import photo from "../../public/image2.jpg";
import photo1 from "../../public/image1.jpg";
import room from "../../public/image6.jpg";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Head from "next/head";

const services = () => {
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
      <Head>
        <meta
          name="description"
          content="Stay up to date with the latest news and opinions from Bahld Epoxy"
        />
        <title>About | Bahld Epoxy</title>
      </Head>
      <div>
        <NavBar />
        <div className="w-full flex flex-col px-4 md:px-40 mt-10 md:mt-[6rem] items-center  justify-center">
          <div className="w-full flex gap-2 flex-col items-center justify-center">
            <div className="flex flex-col w-full items-center justify-center gap-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.5, duration: 0.7, ease: "easeInOut" }}
                className="md:text-5xl text-3xl text-center md:px-0 px-10 tracking-tight text-gray-800 font-bold"
              >
                About Us
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.8, duration: 0.7, ease: "easeInOut" }}
                className="text-slate-500 md:px-0 px-10 md:w-2/3 text-center text-sm md:text-xl font-light"
              >
                <span className="font-semibold text-gray-600">
                  Bahld Epoxy,
                </span>{" "}
                established September 2011 in London, is a{" "}
                <span className="font-semibold text-gray-600">
                  pioneering Epoxy company and training center located in Addis
                  Ababa, Ethiopia,
                </span>{" "}
                around Bole Bulbula. Our diverse projects are not just about
                epoxy; they're about{" "}
                <span className="font-semibold text-gray-600">
                  {" "}
                  empowering individuals, enhancing spaces, and making a
                  positive impact.{" "}
                </span>{" "}
                By choosing Bahld Epoxy, you're not just investing in a service,
                you're contributing to a{" "}
                <span className="font-semibold text-gray-600">
                  brighter future for Ethiopia and its youth.
                </span>
              </motion.p>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ delay: 1.4, duration: 0.7, ease: "easeInOut" }}
            className="w-full py-10 md:w-2/3 px-4 md:px-0 flex"
          >
            <Image src={photo} alt="About" className="rounded shadow-sm" />
          </motion.div>
        </div>
        <div className="w-full px-4 md:px-40 gap-8 py-10 md:py-40 flex md:flex-row flex-col items-center justify-center">
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
              Epoxy company and training center located in Addis Ababa,
              Ethiopia, around Bole Bulbula. Our diverse projects are not just
              about epoxy; they&apos;re about
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
          </motion.div>
          <motion.div
            variants={itemTwo}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="md:w-1/2 w-full"
          >
            <Image src={photo1} alt="About" className="rounded shadow-sm" />
          </motion.div>
        </div>
        <div className="flex-col gap-2 px-4 md:px-40 md:py-0 pb-20 py-10 flex w-full md:items-center justify-center">
          <motion.h1
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="md:text-4xl text-2xl tracking-tight text-gray-800 font-bold"
          >
            Our Team
          </motion.h1>
          <motion.p
            variants={itemTwo}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-slate-500 md:text-center md:w-2/3 text-sm md:text-xl font-light"
          >
            At Bahld Epoxy, our team isn't just a collection of individuals;
            it's a family fueled by shared values. Innovation, empowerment, and
            sustainability are at the heart of everything we do. Mamush, our
            visionary CEO, leads the way with his passion
          </motion.p>
          <motion.div
            variants={itemThree}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="w-full items-center flex justify-center"
          >
            <Image
              src={room}
              alt="header"
              className="rounded w-full md:w-4/5 mt-2 md:mt-8 shadow-sm"
            />
          </motion.div>
        </div>

        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default services;
