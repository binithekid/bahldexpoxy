import { motion } from "framer-motion";

const Contact = () => {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.4, duration: 0.7, ease: "easeInOut" },
    },
  };

  const itemTwo = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.7, duration: 0.7, ease: "easeInOut" },
    },
  };

  return (
    <div className="flex md:py-40 py-0 pb-20 md:px-40 px-4">
      <div className="w-full gap-8 flex h-auto items-center justify-center flex-col md:flex-row">
        <motion.div
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="md:w-1/2 w-full flex flex-col gap-3 md:h-[25rem] justify-center flex-grow"
        >
          <div>
            <h1 className="md:text-4xl text-2xl tracking-tight text-gray-800 font-bold">
              Connect With Us 👋
            </h1>
            <div className="md:w-3/4">
              <p className="font-light mt-1 md:text-base text-sm text-slate-500">
                Feel free to reach out to us with any inquiries, questions, or
                feedback you may have. We value your input and are here to
                assist you in any way we can.
              </p>
              <div className="flex flex-col gap-3 mt-2">
                <a
                  href="mailto:info@onecloudmedia.uk"
                  className="font-light text-slate-500 transition-all hover:opacity-70"
                >
                  <span className="mr-2">✉️ </span>
                  bahldepoxy@gmail.com
                </a>

                <p className="font-light cursor-pointer transition-all hover:opacity-70 text-slate-500">
                  <span className="mr-2">📞 </span>+251902513791
                </p>
                <p className="font-light cursor-pointer transition-all hover:opacity-70 text-slate-500">
                  <span className="mr-2">📞 </span>+251942521798
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={itemTwo}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex w-full md:w-1/2 flex-col gap-3"
        >
          <form className="flex gap-6 flex-col">
            <select
              className="w-full appearance-none bg-transparent font-light border bg-white border-gray-300 text-sm md:text-base p-2 rounded custom-select text-slate-500"
              //   placeholder="Front or House Assistant"
              //   value={workplaceCategory}
              //   onChange={(event) => setWorkplaceCategory(event.target.value)}
            >
              <option value="">Select a topic</option>
              <option value="Support">Support</option>
              <option value="Enquiry">Enquiry</option>
              <option value="Feedback">Feedback</option>
              <option value="Other">Other</option>
            </select>
            <input
              className="w-full bg-transparent font-light border border-gray-300 bg-white text-sm md:text-base p-2 rounded"
              placeholder="Name"
            />
            <input
              className="w-full bg-transparent font-light bg-white border border-gray-300 text-sm md:text-base p-2 rounded"
              placeholder="Email"
            />
            <textarea
              rows={6}
              className="w-full bg-transparent font-light border bg-white border-gray-300 text-sm md:text-base p-2 rounded"
              placeholder="How can we help?"
            />
            <button className="w-max md:text-lg text-sm font-semibold bg-white rounded-lg py-2 px-3 md:px-4 text-gray-800 buttonshadow transition-all hover:opacity-70">
              Submit{" "}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
