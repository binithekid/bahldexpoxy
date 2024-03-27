import { motion } from "framer-motion";

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
    transition: { delay: 0.5, duration: 0.7, ease: "easeInOut" },
  },
};

const itemFour = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.8, duration: 0.7, ease: "easeInOut" },
  },
};

const itemFive = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { delay: 1.1, duration: 0.7, ease: "easeInOut" },
  },
};

const Timeline = () => {
  return (
    <div className="w-full px-4 md:px-40 flex flex-col gap-2 py-40">
      <div className="w-full flex flex-col gap-2 md:items-center">
        <motion.h1
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="md:text-4xl text-2xl tracking-tight text-gray-800 font-bold"
        >
          Milestones
        </motion.h1>

        <motion.p
          variants={itemTwo}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-slate-500 md:w-3/4 text-sm md:text-xl md:text-center font-light"
        >
          We believe in the transformative power of epoxy. At Bahld Epoxy,
          we&apos;re fueled by a passion to unleash the creativity and potential
          of young Ethiopians, fostering a vibrant community of epoxy artists
          and professionals across the continent. With ambitious goals and a
          commitment to sustainability, we&apos;re on a mission to redefine the
          epoxy landscape in Africa.
        </motion.p>
      </div>

      <div className="space-y-8 mt-16 md:mt-20 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="10"
            >
              <path
                fill-rule="nonzero"
                d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
              />
            </svg>
          </div>

          <motion.div
            variants={itemThree}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow"
          >
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-xl text-gray-800">2024</div>
            </div>
            <ul className="text-slate-500 md:text-base text-sm list-disc px-3">
              <li>Train 2,000 young people in epoxy skills</li>
              <li>Launch 2 new training programs with city governments</li>
              <li>
                Place 70% of trained graduates in relevant roles within 6 months
              </li>
              <li>Achieve 1 industry certification for sustainability</li>
            </ul>
          </motion.div>
        </div>

        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="10"
            >
              <path
                fill-rule="nonzero"
                d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
              />
            </svg>
          </div>

          <motion.div
            variants={itemFour}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow"
          >
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-xl text-gray-800">2025</div>
            </div>
            <ul className="text-slate-500 md:text-base text-sm list-disc px-3">
              <li>Train 3,500 young people in epoxy skills</li>
              <li>Launch 3 new training programs with city governments</li>
              <li>
                Place 75% of trained graduates in relevant roles within 6
                months.
              </li>
              <li>Adopt 2 new environmentally friendly practices</li>
            </ul>
          </motion.div>
        </div>

        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="10"
            >
              <path
                fill-rule="nonzero"
                d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
              />
            </svg>
          </div>
          <motion.div
            variants={itemFive}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow"
          >
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-xl text-gray-800">2026</div>
            </div>
            <ul className="text-slate-500 md:text-base text-sm list-disc px-3">
              <li>Train 5,000 young people in epoxy skills</li>
              <li>Launch 4 new training programs with city governments</li>
              <li>
                Place 80% of trained graduates in relevant roles within 6 months
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
