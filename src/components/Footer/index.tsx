import { Mail, Linkedin, Github } from "lucide-react";

function Footer() {
  return (
    <div className="py-12 mt-12 bg-[#1e1e1d]">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p className="text-lg text-gray-300 mb-10 leading-relaxed">
          Passionate Full Stack Software Engineer with over 8 years of
          experience building robust, scalable, and user-centric web solutions.
          Skilled in crafting seamless digital experiences by bridging front-end
          innovation with powerful back-end architecture. Always eager to
          collaborate and bring impactful ideas to life.
        </p>

        <div className="flex items-center flex-wrap gap-4 justify-center text-gray-300">
          <a
            href="mailto:abmcodehub@gmail.com"
            className="flex items-center hover:text-white transition-colors"
          >
            <Mail className="w-6 h-6 mr-2" /> abmcodehub@gmail.com
          </a>

          <a
            href="#"
            target="_blank"
            className="flex items-center hover:text-white transition-colors"
          >
            <Linkedin className="w-6 h-6 mr-2" /> LinkedIn
          </a>

          <a
            href="https://github.com/hnamhocit"
            target="_blank"
            className="flex items-center hover:text-white transition-colors"
          >
            <Github className="w-6 h-6 mr-2" /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
