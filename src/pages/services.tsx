import NavBar from "@/components/NavBar";
import { motion } from "framer-motion";
import Image from "next/image";
import photo from "../../public/image4.jpg";
import room from "../../public/room.jpg";
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
      {" "}
      <Head>
        <meta
          name="description"
          content="Bahld Epoxy is a pioneering Epoxy company and training center located in Addis Ababa, Ethiopia,"
        />
        <title>Services | Bahld Epoxy</title>
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
                Our Services
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.8, duration: 0.7, ease: "easeInOut" }}
                className="text-slate-500 md:px-0 px-10 md:w-2/3 text-center text-sm md:text-xl font-light"
              >
                At{" "}
                <span className="font-semibold text-gray-600">Bahld Epoxy</span>
                , we&apos;re passionate about two things:
                <span className="font-semibold text-gray-600">
                  {" "}
                  empowering young Ethiopians
                </span>{" "}
                and{" "}
                <span className="font-semibold text-gray-600">
                  transforming spaces through the art of epoxy
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
            {" "}
            <video
              className="border rounded shadow-sm"
              id="autoplay-video"
              autoPlay
              loop
              muted
            >
              <source src="/aboutus.mp4" type="video/mp4" />
            </video>
          </motion.div>
        </div>
        <>
          <div className="w-full px-4 md:px-40 gap-8 md:py-40 py-20 flex md:flex-row flex-col items-center justify-center">
            <motion.div
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="md:w-1/2 w-full flex flex-col gap-2"
            >
              <h1 className="md:text-4xl text-2xl tracking-tight text-gray-800 font-bold">
                Empowering the Youth
              </h1>

              <ul className="text-slate-500 md:text-base md:mr-4 mr-0 py-2 text-sm list-disc px-3">
                <li>
                  We provide comprehensive epoxy training programs across
                  various regions in Ethiopia, equipping young people with the
                  skills and knowledge to thrive in the epoxy industry.
                </li>
                <li>
                  Our programs equip trainees to start their own businesses,
                  land jobs in the construction and renovation sector, or
                  contribute to community projects.
                </li>{" "}
                <li>
                  By investing in the future generation of epoxy artists and
                  professionals, we aim to drive innovation and entrepreneurship
                  across Ethiopia.
                </li>
              </ul>
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
          <div className="w-full px-4 md:px-40 gap-8 flex md:flex-row flex-col-reverse items-center justify-center">
            <motion.div
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="md:w-1/2 w-full"
            >
              <Image src={room} alt="About" className="rounded shadow-sm" />
            </motion.div>
            <motion.div
              variants={itemTwo}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="md:w-1/2 flex flex-col md:ml-8 gap-2"
            >
              <h1 className="md:text-4xl text-2xl tracking-tight text-gray-800 font-bold">
                Transforming Spaces
              </h1>

              <ul className="text-slate-500 md:text-base py-2 text-sm list-disc px-3">
                <li>
                  We offer high-quality epoxy services for furniture and
                  flooring, catering to both residential and commercial clients.
                </li>
                <li>
                  We specialize in creating unique and functional epoxy
                  applications for homes, businesses, and even hospitals, sports
                  arenas, and playgrounds.
                </li>
                <li>
                  Our team of experienced applicators uses sustainable and
                  environmentally friendly materials, ensuring both aesthetic
                  appeal and responsible practices.
                </li>
                <li>
                  By combining skills development with professional services,
                  Bahld Epoxy is a one-stop solution for all your epoxy needs.
                  We empower the youth, transform spaces, and contribute to a
                  brighter future for Ethiopia.
                </li>
              </ul>
            </motion.div>
          </div>
        </>
        <div className="flex-col gap-2 px-4 md:px-40 pt-40 flex w-full md:items-center justify-center">
          <motion.h1
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="md:text-4xl text-2xl text-center tracking-tight text-gray-800 font-bold"
          >
            Our Projects
          </motion.h1>
          <motion.p
            variants={itemTwo}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-slate-500 text-center md:w-2/3 text-sm md:text-xl font-light"
          >
            At Bahld Epoxy, we&apos;re committed to empowering individuals and
            transforming spaces through the versatile art of epoxy. Our passion
            translates into various projects and initiatives
          </motion.p>
        </div>
        <div className="w-full px-4 md:px-40 gap-2 md:gap-8 py-10 md:py-20 flex md:flex-row flex-col-reverse items-center justify-center">
          <motion.div
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="md:w-1/2 w-full flex flex-col"
          >
            <h1 className="text-2xl tracking-tight text-gray-800 font-bold">
              Borcelle Company
            </h1>{" "}
            <p className="text-slate-500 md:text-base text-sm font-light md:mr-8">
              Through our collaboration with Borcelle Company, we provided
              specialized epoxy flooring solutions. Leveraging our expertise in
              epoxy formulations and precise application techniques, we ensured
              the delivery of durable, resilient, and aesthetically pleasing
              flooring. This partnership underscores our commitment to
              delivering exceptional, tailored solutions that set new standards
              in the industry
            </p>
          </motion.div>
          <motion.div
            variants={itemTwo}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <div className="slider rounded md:h-[20rem] h-[13rem] shadow-sm">
              <div className="slide"></div>
              <div className="slide"></div>
              <div className="slide"></div>
            </div>
          </motion.div>
        </div>

        <div className="w-full px-4 md:px-40 gap-2 md:gap-8 py-10 md:py-20 flex md:flex-row flex-col items-center justify-center">
          <motion.div
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <div className="slider2 rounded md:h-[20rem] h-[13rem] shadow-sm">
              <div className="slide2"></div>
              <div className="slide2"></div>
              <div className="slide2"></div>
            </div>
          </motion.div>
          <motion.div
            variants={itemTwo}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="md:w-1/2 w-full md:ml-6 flex flex-col"
          >
            <h1 className="text-2xl tracking-tight text-gray-800 font-bold">
              Empowering the Next Generation
            </h1>
            <p className="text-slate-500 md:text-base text-sm font-light">
              <span className="font-semibold text-gray-600">
                Comprehensive Training Programs:
              </span>
              We conduct multiple rounds of training programs across different
              regions in Ethiopia, equipping young people with the skills and
              knowledge to excel in the epoxy industry. Through these programs,
              we empower them to start their own businesses, land rewarding
              jobs, or contribute to community development projects.
            </p>
          </motion.div>
        </div>

        <div className="w-full pb-40 px-4 md:px-40 gap-2 md:gap-8 py-10 md:py-20 flex md:flex-row flex-col-reverse items-center justify-center">
          <motion.div
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="md:w-1/2 w-full flex flex-col"
          >
            <h1 className="text-2xl tracking-tight text-gray-800 font-bold">
              Transforming Residential & Commercial Spaces
            </h1>{" "}
            <p className="text-slate-500 md:text-base text-sm font-light md:mr-8">
              <span className="font-semibold text-gray-600">
                Expert Flooring Services:
              </span>{" "}
              Our experienced team specializes in applying high-quality epoxy
              coatings to floors in factories, houses, and various other spaces.
              We ensure durability, functionality, and a stunning aesthetic in
              every project.
              <br />{" "}
              <span className="font-semibold text-gray-600">
                Furniture Makeovers:
              </span>{" "}
              We breathe new life into worn-out furniture with innovative and
              personalized epoxy applications. From tables and chairs to
              countertops and vanities, we transform ordinary pieces into unique
              and eye- catching artworks.
            </p>
          </motion.div>
          <motion.div
            variants={itemTwo}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <div className="slider3 rounded md:h-[20rem] h-[13rem] shadow-sm">
              <div className="slide3"></div>
              <div className="slide3"></div>
              <div className="slide3"></div>
            </div>
          </motion.div>
        </div>

        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default services;
