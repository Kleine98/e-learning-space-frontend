import { Link } from "react-router-dom";
import Projects from "../../models/Project"; // Assuming you have a Projects model

const Project = () => {
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-4xl font-bold mb-8">All Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Projects.map((project) => (
          <Link key={project.id} to={`/project/${project.id}`}>
            <div className="bg-white p-4 rounded-lg shadow-lg transition duration-300 transform hover:scale-110">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover mb-4 rounded-md"
              />
              <h3 className="text-xl text-blue-500 font-semibold mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Project;
