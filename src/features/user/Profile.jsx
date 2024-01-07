import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "../../app/api/axiosConfig";
import RefreshToken from "../auth/RefreshToken";

const Profile = () => {
  const username = Cookies.get("username");
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "/auth/logout",
        {},
        { withCredentials: true }
      );
      console.log("Logout successfully:", response.data);

      // Clear the "username" cookie
      Cookies.remove("username");

      // Redirect to login after successful logout
      navigate("/login");
    } catch (error) {
      console.error(
        "Logout error:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const handleDeleteAccount = async () => {
    try {
      // Prompt the user for an access token
      const accessToken = window.prompt("Enter your access token:");

      if (!accessToken) {
        console.log("Access token not provided");
        return;
      }

      const response = await axios.delete("/users", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        data: { username }, // Send username as part of the request body
        withCredentials: true,
      });
      console.log("Delete account successfully:", response.data);

      // Clear the "username" cookie
      Cookies.remove("username");

      // Redirect to login after successful account deletion
      navigate("/login");
    } catch (error) {
      console.error(
        "Delete account error:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div>
      {username ? (
        <div className="container mx-auto mt-8">
          <h2 className="text-4xl font-bold mb-8">Welcome, {username}!</h2>
          <p className="text-gray-600">
            The backend of this Website currently covers just the signin/login
            features for testing the JWT access and refresh token concept. Stay
            tuned for further updates on this website! Please feel free to reach
            out to us using the contact information below.
          </p>
          <div className="mt-4">
            <p>Email: umar.aminsen@gmail.com</p>
          </div>
          <RefreshToken />
          {/* Buttons container */}
          <div className="flex flex-col gap-4 mt-4">
            {/* Logout button */}
            <button
              onClick={handleLogout}
              className="bg-indigo-500 text-white p-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:border-indigo-300"
            >
              Logout
            </button>

            {/* Delete Account button */}
            <button
              onClick={handleDeleteAccount}
              className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300"
            >
              Delete Account
            </button>
          </div>
        </div>
      ) : (
        <div>
          This user is not found, there might be a problem with the browser
          cookies.
          <br />
          Please try to log in again using your credentials. If you do not have
          an account yet, <Link to="/signup">please register first</Link>.
          <br />
        </div>
      )}
    </div>
  );
};

export default Profile;
