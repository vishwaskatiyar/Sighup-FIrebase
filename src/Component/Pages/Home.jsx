import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-blue-600">
          <Link to="/login" className="hover:underline">
            Login
          </Link>
        </h1>
        <br />
        <h1 className="text-3xl font-bold text-blue-600">
          <Link to="/signup" className="hover:underline">
            Signup
          </Link>
        </h1>
      </div>
      <br />
      <br />
      <h2 className="text-xl text-gray-700">
        {props.name ? `Welcome-${props.name}` : "Login please"}
      </h2>
    </div>
  );
};

export default Home;
