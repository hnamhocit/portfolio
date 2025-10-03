import { useState } from "react";
import type { IExperience } from "../../interfaces";
import { motion } from "motion/react";

export default function ExperienceSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [experiences, setExperiences] = useState<IExperience[]>([
    {
      company: "Google",
      position: "Lead Software Engineer",
      period: "Nov 2019 – Present",
      description:
        "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google’s core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
    },
    {
      company: "Apple",
      position: "Junior Software Engineer",
      period: "Jan 2016 – Dec 2017",
      description:
        "During my tenure at Apple, I held the role of Software Architect, where I played a key role in shaping the architecture of mission-critical software projects. Responsible for designing scalable and efficient systems, I provided technical leadership to a cross-functional team.",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg",
    },
    {
      company: "Meta",
      position: "Software Engineer",
      period: "Jan 2017 – Oct 2018",
      description:
        "At Meta, I served as a Software Engineer, focusing on the design and implementation of backend systems for the social media giant’s dynamic platform. Working on projects that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Meta_Platforms_Inc._logo_%28cropped%29.svg/2560px-Meta_Platforms_Inc._logo_%28cropped%29.svg.png",
    },
  ]);

  return (
    <div className="space-y-7">
      <div className="text-2xl text-center font-bold uppercase bg-gradient-to-br from-blue-500 via-blue-400 to-purple-500 bg-clip-text text-transparent">
        experience
      </div>

      <div className="flex flex-col gap-8">
        {experiences.map((exp, i) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            key={exp.company}
            className="relative"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center flex-wrap gap-3">
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="w-8 h-8 object-contain"
                />

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {exp.position} at {exp.company}
                  </h3>
                </div>
              </div>

              <span className="text-sm text-gray-400 whitespace-nowrap">
                {exp.period}
              </span>
            </div>

            <p className="mt-3 text-gray-300 leading-relaxed">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
