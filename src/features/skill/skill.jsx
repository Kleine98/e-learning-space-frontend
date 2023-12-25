import { Link } from "react-router-dom";
import Skills from "../../models/Skill";

const Skill = () => {
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-4xl font-bold mb-8">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Skills.map((skill) => (
          <Link key={skill.id} to={`/skills/${skill.id}`}>
            <div className="bg-white p-4 rounded-lg shadow-lg transition duration-300 transform hover:scale-110">
              <h3 className="text-xl text-green-500 font-semibold mb-2">
                {skill.category}
              </h3>
              <ul className="list-disc pl-4">
                {skill.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Skill;
