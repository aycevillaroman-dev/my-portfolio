import { 
  SiJavascript, 
  SiPython, 
  SiReact, 
  SiNodedotjs, 
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiCplusplus,
  SiSharp,
  SiPhp,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiExpress,
  SiFigma,
  SiTypescript,
  SiTailwindcss,
  SiGit,
  SiDocker,
  SiAmazon,
  SiAdobephotoshop,
  SiCanva,
  SiLinux,
  SiUbuntu,
  SiCisco,
  SiVmware,
  SiPostman,
  SiWireshark
} from "react-icons/si";

import { FaMicrosoft, FaWindows } from "react-icons/fa";

export interface TechItem {
  name: string;
  icon: any;
  color: string;
}

export const techStack: TechItem[] = [
  // Web & Dev
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6" },
  { name: "C++", icon: SiCplusplus, color: "#00599C" },
  { name: "C#", icon: SiSharp, color: "#239120" },
  { name: "PHP", icon: SiPhp, color: "#777BB4" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "Express", icon: SiExpress, color: "#FFFFFF" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "AWS", icon: SiAmazon, color: "#FF9900" },

  // Design & Productivity
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "Photoshop", icon: SiAdobephotoshop, color: "#31A8FF" },
  { name: "Canva", icon: SiCanva, color: "#00C4CC" },
  { name: "Microsoft Office", icon: FaMicrosoft, color: "#D83B01" },

  // OS & Platforms
  { name: "Linux", icon: SiLinux, color: "#FCC624" },
  { name: "Ubuntu", icon: SiUbuntu, color: "#E95420" },
  { name: "Windows", icon: FaWindows, color: "#0078D6" },

  // DevOps & Cloud
  { name: "VMware", icon: SiVmware, color: "#607078" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },

  // Networking
  { name: "Cisco", icon: SiCisco, color: "#1BA0E2" },
  { name: "Wireshark", icon: SiWireshark, color: "#0178B8" },
];