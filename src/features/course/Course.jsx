import { Link } from "react-router-dom";
import Courses from "../../models/Course";

const Course = () => {
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-4xl font-bold mb-8">All Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Courses.map((course) => (
          <Link key={course.id} to={`/course/${course.id}`}>
            <div className="bg-white p-4 rounded-lg shadow-lg transition duration-300 transform hover:scale-110">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-40 object-cover mb-4 rounded-md"
              />
              <h3 className="text-xl text-orange-500 font-semibold mb-2">
                {course.title}
              </h3>
              <p className="text-gray-600">{course.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Course;
