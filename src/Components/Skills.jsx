import React from "react";
import Skill from "../SmallComponents.jsx/Skill";
import { FaCss3Alt, FaHtml5, FaNode, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiJavascript, SiMongodb } from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills" className="p-10 my-10 space-y-5">
      <h2 className="text-6xl">Skills</h2>
      <h2 className="text-3xl">Frontend</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        <Skill icon={<FaHtml5 />} name="HTML"></Skill>
        <Skill icon={<FaCss3Alt />} name="CSS"></Skill>
        <Skill icon={<RiTailwindCssFill />} name="Tailwind"></Skill>
        <Skill icon={<SiJavascript />} name="JavaScript"></Skill>
        <Skill icon={<FaReact />} name="React"></Skill>
      </div>
      <h2 className="text-3xl">Frontend</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        <Skill icon={<FaNode />} name="Node"></Skill>
        <Skill icon={<SiExpress />} name="Express"></Skill>
        <Skill icon={<SiMongodb />} name="MongoDB"></Skill>
      </div>
    </section>
  );
};

export default Skills;
