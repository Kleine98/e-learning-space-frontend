import { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import axios from "../../app/api/axiosConfig";

const RefreshToken = () => {
  const [message, setMessage] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [secondsRemaining, setSecondsRemaining] = useState(60);

  useEffect(() => {
    const refreshAccessToken = async () => {
      try {
        // Make a request to refresh the access token
        const response = await axios.get("/auth/refresh", {
          withCredentials: true,
        });

        // If refresh is successful, display a message and set the access token
        const newAccessToken = response.data.accessToken;
        setMessage(`Refreshed access token: ${newAccessToken}`);
        setAccessToken(newAccessToken);
      } catch (error) {
        // Handle errors, e.g., if refresh fails
        setMessage(
          error.response
            ? `Error: ${error.response.data.message}`
            : `Error: ${error.message}`
        );
      }
    };

    // Call the refresh function when the component mounts
    refreshAccessToken();

    // Set up the countdown timer
    const intervalId = setInterval(() => {
      setSecondsRemaining((prevSeconds) => {
        if (prevSeconds === 1) {
          clearInterval(intervalId);
        }
        return prevSeconds - 1;
      });
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means the effect runs once when the component mounts

  return (
    <div className="container mx-auto mt-8 max-w-md">
      <h2 className="text-4xl font-bold mb-4">Refresh Token</h2>
      <p className="text-gray-600 mb-4" style={{ wordWrap: "break-word" }}>
        {message}
      </p>

      {/* Copy Access Token button */}
      {accessToken && (
        <CopyToClipboard text={accessToken}>
          <button className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300">
            Copy Access Token
          </button>
        </CopyToClipboard>
      )}

      {/* Countdown timer */}
      {secondsRemaining > 0 && (
        <p className="text-gray-600 mt-4">
          Access Token will expire in {secondsRemaining} seconds.
        </p>
      )}
    </div>
  );
};

export default RefreshToken;
