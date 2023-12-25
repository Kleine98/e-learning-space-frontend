import { Link } from "react-router-dom";
import backgroundImage from "../img/store/homepage.jpg";

const FeaturesSection = () => {
  return (
    <div className="relative">
      <section className="py-16 bg-slate-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-orange-600">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/course">
              <div className="bg-black p-6 rounded shadow transition duration-300 transform hover:scale-110">
                <h3 className="text-xl font-semibold mb-2">Courses</h3>
                <p>All the available courses.</p>
              </div>
            </Link>
            <Link to="/project">
              <div className="bg-black p-6 rounded shadow transition duration-300 transform hover:scale-110">
                <h3 className="text-xl font-semibold mb-2">Projects</h3>
                <p>All the projects.</p>
              </div>
            </Link>
            <Link to="/skill">
              <div className="bg-black p-6 rounded shadow transition duration-300 transform hover:scale-110">
                <h3 className="text-xl font-semibold mb-2">Skills</h3>
                <p>All the skills.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <div className="absolute top-2/4 right-0 left-0 flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-orange-600 text-center pt-20 ">
          <h1 className="text-4xl font-bold mb-4">START FROM ZERO</h1>
          <p className="text-lg font-bold">
            Improve with only 1%, shall surpass all the 99%
          </p>
        </div>
      </div>
      <img
        src={backgroundImage}
        alt="background"
        className="w-full object-cover mb-4 rounded-md"
      />
    </div>
  );
};

export default FeaturesSection;
