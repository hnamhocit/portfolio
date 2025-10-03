import { motion } from "motion/react";

function Hero() {
  const animate = {
    initial: { opacity: 0, y: -50 },
    whileInView: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col gap-7 text-center items-center justify-center">
      <motion.div
        initial={animate.initial}
        whileInView={animate.whileInView}
        className="w-48 h-48 rounded-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/img.png)" }}
      ></motion.div>

      <motion.div
        initial={animate.initial}
        whileInView={animate.whileInView}
        transition={{ delay: 0.1 }}
        className="text-4xl font-bold text-white"
      >
        I do code and
        <div>
          make content{" "}
          <span className="bg-gradient-to-br from-[#ff855f] via-[#ff855f] to-purple-500 bg-clip-text text-transparent glow-outline">
            about it!
          </span>
        </div>
      </motion.div>

      <motion.div
        initial={animate.initial}
        whileInView={animate.whileInView}
        transition={{
          delay: 0.2,
        }}
      >
        I am a seasoned full-stack software engineer with over 8 years of
        professional experience, specializing in backend development. My
        expertise lies in crafting robust and scalable SaaS-based architectures
        on the Amazon AWS platform.
      </motion.div>

      <div className="flex items-center gap-7">
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 0.3,
          }}
          className="block py-2 px-4 text-lg font-semibold rounded-full bg-white text-black"
        >
          Get in touch
        </motion.button>

        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{ delay: 0.4 }}
          className="block py-2 px-4 rounded-full text-lg font-semibold border-2 border-white"
        >
          Download CV
        </motion.button>
      </div>
    </div>
  );
}

export default Hero;
