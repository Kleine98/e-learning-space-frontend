import Image from "../img/Image";

const Courses = [
  {
    id: 1,
    title: "MIIC1325(LAB): Cloud Setup and Data Center Design",
    description:
      "Master the basics of cloud infrastructure and data center design with this comprehensive course",
    image: Image.cloud_lab,
    rating: 4.5,
    student: 77,
    content: [
      {
        module_id: 1,
        module_name: "Basic Linux Commands",
        module_content:
          "Learn essential Linux commands for system administration.",
      },
      {
        module_id: 2,
        module_name: "HTTP Service (Web Server)",
        module_content: "Setup web servers and HTTP services",
      },
      {
        module_id: 3,
        module_name: "PHP on Web Server",
        module_content: "Setup PHP on web servers.",
      },
      {
        module_id: 4,
        module_name: "MYSQL Server",
        module_content: "Setup MySQL Server with PHPMyAdmin.",
      },
      {
        module_id: 5,
        module_name: "Firebase Hosting",
        module_content:
          "Learn to deploy web applications using Firebase Hosting.",
      },
    ],
  },
  {
    id: 2,
    title: "MIIC1325(LEC): Cloud Setup and Data Center Design",
    description:
      "Master the basics of cloud infrastructure and data center design with this comprehensive course",
    image: Image.cloud_lec,
    rating: 4.7,
    student: 77,
    content: [
      {
        module_id: 1,
        module_name: "Cloud Computing",
        module_content:
          "Learn essential concepts of cloud computing and its benefits for businesses.",
      },
      {
        module_id: 2,
        module_name: "Virtualization",
        module_content:
          "Understand the principles and benefits of virtualization.",
      },
      {
        module_id: 3,
        module_name: "VPN",
        module_content:
          "Explore the use of Virtual Private Networks (VPNs) in cloud setups.",
      },
      {
        module_id: 4,
        module_name: "Docker and Container",
        module_content:
          "Learn about Docker and containerization for scalable applications.",
      },
      {
        module_id: 5,
        module_name: "Active Directory",
        module_content:
          "Understand the role of Active Directory in cloud-based data center setups.",
      },
    ],
  },
  {
    id: 3,
    title: "Introduction to React",
    description:
      "Build a solid foundation in React.js with this introductory course",
    image: Image.reactjs,
    rating: 4.0,
    student: 45,
    content: [
      {
        module_id: 1,
        module_name: "Understanding JSX",
        module_content: "Grasp the basics of JSX syntax in React development.",
      },
      {
        module_id: 2,
        module_name: "Components and Props",
        module_content: "Learn the concepts of React components and props.",
      },
      {
        module_id: 3,
        module_name: "State and Lifecycle",
        module_content:
          "Understand React component state and lifecycle methods.",
      },
      {
        module_id: 4,
        module_name: "Handling Events",
        module_content:
          "Learn how to handle user events in React applications.",
      },
    ],
  },
  {
    id: 4,
    title: "Node.js Fundamentals",
    description:
      "Dive into the world of server-side JavaScript with this comprehensive Node.js course",
    image: Image.nodejs,
    rating: 4.2,
    student: 60,
    content: [
      {
        module_id: 1,
        module_name: "Introduction to Node.js",
        module_content: "Get started with Node.js and its runtime environment.",
      },
      {
        module_id: 2,
        module_name: "Node.js Modules",
        module_content:
          "Explore the modular nature of Node.js and its modules system.",
      },
      {
        module_id: 3,
        module_name: "Express.js Framework",
        module_content:
          "Learn to build web applications using the Express.js framework.",
      },
      {
        module_id: 4,
        module_name: "RESTful APIs with Node.js",
        module_content: "Master the creation of RESTful APIs using Node.js.",
      },
    ],
  },
];

export default Courses;
