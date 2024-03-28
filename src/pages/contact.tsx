import NavBar from "@/components/NavBar";
import React from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Map from "@/components/Map";
import Head from "next/head";
import Contacts from "@/components/Contact";

const Contact = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Bahld Epoxy is a pioneering Epoxy company and training center located in Addis Ababa, Ethiopia,"
        />
        <title>Contact | Bahld Epoxy</title>
      </Head>
      <NavBar />
      <div className="my-20 md:my-0" />
      <Contacts />
      <Map />
      <Footer />
    </>
  );
};

export default Contact;
