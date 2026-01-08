import { styles } from "../styles";
import gauravDesktop from "../assets/gaurav.png";
import gauravMobile from "../assets/gauravv.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full bg-hero-pattern bg-cover bg-no-repeat bg-center pt-28 pb-8 overflow-hidden"
    >
      <div
        className={`max-w-7xl mx-auto ${styles.paddingX} w-full flex flex-col md:flex-row items-center justify-between gap-10`}
      >
        {/* 🔹 Text Area */}
        <div className="flex-1 text-center md:text-left order-2 md:order-1">
          <h2 className="text-white text-[16px] tracking-wider uppercase mb-2 glow-text">
            Hello there...
          </h2>

          <h1 className={`${styles.heroHeadText} text-white leading-tight`}>
            I'm <span className="text-[#915EFF]">Gaurav</span>
          </h1>

          <p className={`${styles.heroSubText} mt-3 text-white-100`}>
            video Editor & Designer
          </p>

          {/* 🔘 Call to Action */}
          <a href="#contact">
            <button className="mt-6 px-7 py-3 bg-[#915EFF] text-white font-semibold rounded-full text-sm hover:bg-white hover:text-[#915EFF] transition-all duration-300 shadow-xl">
              Book a Call
            </button>
          </a>
        </div>

        {/* 🔸 Image Area */}
        <div className="flex justify-center items-center order-1 md:order-2">
          <div className="relative w-[260px] h-[260px] md:w-[300px] md:h-[300px] rounded-full shadow-[0_0_60px_#915EFF80] border-[5px] border-[#915EFF] overflow-hidden">
            {/* Mobile Image */}
            <img
              src={gauravMobile}
              alt="Gaurav Mobile"
              className="block md:hidden w-full h-full object-cover rounded-full"
            />
            {/* Desktop Image */}
            <img
              src={gauravDesktop}
              alt="Gaurav Desktop"
              className="hidden md:block w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>

      {/* 🔻 Scroll down indicator */}
      <div className="mt-6 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[60px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <div className="w-3 h-3 rounded-full bg-secondary mb-1 animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
