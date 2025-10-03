import type { FC } from "react";
import type { IProject } from "../../../interfaces";
import { motion } from "motion/react";

interface ProjectProps extends IProject {
  delay: number;
}

const Project: FC<ProjectProps> = ({ thumbnailURL, title, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="rounded-2xl overflow-hidden"
    >
      <div
        className="h-40 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${thumbnailURL})`,
        }}
      ></div>

      <div className="py-2 px-4 flex items-center justify-between bg-[#1e1e1d]">
        <div>
          <div className="uppercase text-sm font-medium">
            click here to visit
          </div>

          <div className="text-xl text-white font-bold">{title}</div>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-box-arrow-up-right"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"
          ></path>
          <path
            fill-rule="evenodd"
            d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"
          ></path>
        </svg>
      </div>
    </motion.div>
  );
};

export default Project;
