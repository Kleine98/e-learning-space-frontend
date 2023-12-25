import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import profile from "../img//store/profile.jpg";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isIndexPage, setIsIndexPage] = useState(false);

  useEffect(() => {
    setIsIndexPage(location.pathname === "/");
  }, [location.pathname]);

  const handleReturn = () => {
    navigate(-1); // Use navigate with a negative number to go back
  };

  return (
    <header className="bg-slate-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          {!isIndexPage && (
            <button onClick={handleReturn} className="text-white mr-2">
              &lt; Return
            </button>
          )}
          <Link to="/">
            <img src={profile} alt="Logo" className="w-8 h-8 mr-2" />
          </Link>
          <Link to="/">
            <h1 className="text-3xl font-bold">E-Learning Space</h1>
          </Link>
        </div>
        <div className="flex items-center justify-end">
          <nav>
            <ul className="flex space-x-4">
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/about">
                <li>About</li>
              </Link>
              <Link to="/contact">
                <li>Contact</li>
              </Link>
            </ul>
          </nav>
          <Link to="/login">
            <img
              src={profile}
              alt="Profile"
              className="w-10 h-10 rounded-full ml-6 cursor-pointer transition duration-300 transform hover:scale-110"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
