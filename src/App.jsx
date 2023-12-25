import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./features/Auth/Login";
import Public from "./components/Public";
import Layout from "./components/Layout";
import Course from "./features/course/Course";
import CourseDetail from "./features/course/CourseDetail";
import Project from "./features/project/Project";
import Skill from "./features/skill/skill";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />
        <Route path="course">
          <Route index element={<Course />} />
          <Route path=":id" element={<CourseDetail />} />
        </Route>
        <Route path="project" element={<Project />} />
        <Route path="skill" element={<Skill />} />

        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
