import { FC, ReactNode } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  children?: ReactNode;
}

const ProjectCard: FC<ProjectCardProps> = ({ title, description, children }) => {
  return (
    <div className="p-6 border rounded-lg shadow hover:shadow-lg transition bg-gray-800">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
};

export default ProjectCard;
