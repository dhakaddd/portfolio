import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useGsap = (ref, animation, delay = 0) => {
  useEffect(() => {
    if (ref.current) {
      gsap.fromTo(
        ref.current,
        animation.from,
        {
          ...animation.to,
          delay,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, [ref, animation, delay]);
};

const ExperienceCard = ({ experience, index }) => {
  const cardRef = useRef(null);
  useGsap(
    cardRef,
    {
      from: { opacity: 0, y: 100 },
      to: { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
    },
    index * 0.2
  );

  return (
    <div ref={cardRef} className="bg-tertiary p-6 rounded-2xl w-full max-w-4xl mx-auto shadow-md">
      <div className="flex items-center gap-4 mb-4">
        {/* ✅ Logo in Circular Frame with Crop Fix */}
        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center overflow-hidden border-2 border-[#915EFF]">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h3 className="text-white text-xl font-bold">{experience.title}</h3>
          <p className="text-secondary text-sm">{experience.company_name}</p>
          <p className="text-secondary text-xs mt-1">{experience.date}</p>
        </div>
      </div>

      <ul className="list-disc ml-5 space-y-2 text-white text-sm">
        {experience.points.map((point, i) => (
          <li key={`exp-point-${i}`} className="pl-1">{point}</li>
        ))}
      </ul>
    </div>
  );
};

const Experience = () => {
  const headingRef = useRef(null);
  useGsap(headingRef, {
    from: { opacity: 0, x: -50 },
    to: { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
  });

  return (
    <>
      <div ref={headingRef}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </div>

      <div className="mt-16 flex flex-col gap-10">
        {experiences.map((experience, index) => (
          <ExperienceCard key={`exp-${index}`} experience={experience} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
