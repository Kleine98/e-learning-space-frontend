const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white-50">
      <div className="max-w-xl w-full space-y-8 p-8 bg-white shadow-md rounded-md">
        <div>
          <h2 className="text-3xl font-extrabold text-center text-gray-900">
            Login
          </h2>
        </div>
        <form className="mt-8 space-y-6">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-indigo-500 text-white p-2 w-full rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:border-indigo-300"
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
