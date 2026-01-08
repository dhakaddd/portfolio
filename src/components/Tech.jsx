import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: -40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      type: "spring",
    },
  }),
};

// ✅ Updated Clients data (Saqlain, Cutting Edge School & Sarthak Goswami removed)
const clients = [
  {
    name: "Ozair JK",
    subscribers: "55.4K+ subscribers",
    followers: "318k+ followers",
    image: "ozair.jpg",
  },
  {
    name: "Shivanshu Agrawal",
    subscribers: "1.3M+ subscribers",
    followers: "1.4M+ followers",
    image: "shivanshu.jpg",
  },
  {
    name: "Enrico Tartarotti",
    subscribers: "184K+ subscribers",
    followers: "",
    image: "enrico.png",
  },
  {
    name: "Sarthak Virmani",
    subscribers: "196K+ subscribers",
    followers: "",
    image: "virmani.png",
  },
];

const Tech = () => {
  return (
    <section className="mt-10">
      <h2 className="text-white text-3xl font-bold text-center mb-8">
        TRUSTED BY
      </h2>

      <div className="flex flex-wrap justify-center gap-10">
        {clients.map((client, index) => {
          const imagePath = new URL(
            `../assets/tech/${client.image}`,
            import.meta.url
          ).href;

          return (
            <motion.div
              key={client.name}
              className="flex flex-col items-center text-center"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
            >
              <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-white shadow-lg">
                <img
                  src={imagePath}
                  alt={client.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-white text-[16px] font-semibold mt-3">
                {client.name}
              </h3>
              <p className="text-sm text-gray-400">{client.subscribers}</p>
              {client.followers && (
                <p className="text-sm text-gray-400">{client.followers}</p>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Tech;
