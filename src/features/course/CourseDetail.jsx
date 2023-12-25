import { useParams } from "react-router-dom";
import Courses from "../../models/Course";

const CourseDetail = () => {
  const { id } = useParams();
  const course = Courses.find((c) => c.id === parseInt(id, 10));

  if (!course) {
    return <div className="text-center mt-8">Course not found</div>;
  }

  return (
    <div className="container mx-auto mt-8 flex">
      {/* Left side: Course details and additional sections */}
      <div className="flex-1 ml-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 rounded-lg shadow-lg">
          <div>
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-60 object-cover mb-4 rounded-md"
            />
          </div>
          <div>
            <h2 className="text-3xl text-orange-500 font-semibold mb-2">
              {course.title}
            </h2>
            <p className="text-gray-600 mb-4">{course.description}</p>
          </div>
          {/* Additional sections on the left side */}
          <div className="md:col-span-1">
            <div className="bg-orange-500 p-8 rounded-lg shadow-lg">
              {/* Content for the first additional section */}
              <h3 className="text-xl text-white font-semibold mb-2">
                Rating : {course.rating}
              </h3>
              {/* Add your content here */}
            </div>
          </div>

          <div className="md:col-span-1">
            <div className="bg-orange-500 p-8 rounded-lg shadow-lg">
              {/* Content for the second additional section */}
              <h3 className="text-xl text-white font-semibold mb-2">
                Students : {course.student}
              </h3>
              {/* Add your content here */}
            </div>
          </div>
        </div>
      </div>

      {/* Right side: Modules container */}
      <div className="flex-1 bg-gray-900 p-8 rounded-lg shadow-lg">
        {/* Modules content on the right side */}
        <h3 className="text-xl text-white font-semibold mb-2">Modules</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {course.content.map((module) => (
            <div
              key={module.module_id}
              className="bg-white p-8 rounded-lg shadow-lg mb-4"
            >
              <h3 className="text-xl text-orange-500 font-semibold mb-2">
                {module.module_id}. {module.module_name}
              </h3>
              <h5 className="text-gray-600">{module.module_content}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
