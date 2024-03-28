import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { motion, AnimatePresence } from "framer-motion";

const Map = () => {
  const mapRef = useRef<HTMLDivElement>(null);

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
      transition: { delay: 0.7, duration: 0.7, ease: "easeInOut" },
    },
  };

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY!,
        version: "weekly",
      });

      const { Map } = await loader.importLibrary("maps");

      const { Marker } = await loader.importLibrary("marker");

      const position = {
        lat: 9.01358,
        lng: 38.76287,
      };

      const mapOptions = {
        center: position,
        zoom: 12,
        mapId: "ContactMap",
      };

      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

      const marker = new Marker({
        map: map,
        position: position,
      });
    };

    initMap();
  }, []);

  return (
    <main className="w-full pb-20 flex md:flex-row flex-col px-4 md:px-40 gap-8">
      <motion.div
        variants={item}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="md:w-1/2"
      >
        <div ref={mapRef} className="shadow text-sm h-[30rem] my-8 rounded" />
      </motion.div>

      <motion.div
        variants={itemTwo}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="md:w-1/2 flex justify-center flex-col"
      >
        <p className="font-light text-gray-700">Where to find us</p>
        <h1 className="text-left text-gray-800 font-bold text-3xl lg:text-4xl">
          Connecting Near and Far
        </h1>

        <div className="flex mt-3 flex-col gap-1 text-sm font-light text-slate-500">
          <p className="font-normal text-gray-700 text-[1rem]">Headquarters</p>
          <p>Bahld Epoxy</p>
          <p>Bole Bulbula Maryam Mazorya</p>
          <p>Addis Ababa</p>
          <p>XQ2P WGM</p>
          <p>Ethiopia</p>
        </div>
      </motion.div>
    </main>
  );
};

export default Map;
