import { useState } from "react";
import InputControl from "../InputControl/inputControl";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../Firebase";

const Signup = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmission = async (e) => {
    e.preventDefault();

    if (!value.name || !value.email || !value.password) {
      alert("Please fill in all the fields");
      return;
    }

    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        value.email,
        value.password
      );
      const user = res.user;
      await updateProfile(user, { displayName: value.name });
      console.log("User created successfully:", user);

      setValue({
        name: "",
        email: "",
        password: "",
      });
      navigate("/");
    } catch (err) {
      console.error("Error creating user:", err.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-900">
          Sign Up
        </h1>
        <form onSubmit={handleSubmission}>
          <InputControl
            label="Name"
            placeholder="Enter your name"
            value={value.name}
            onChange={(e) => setValue({ ...value, name: e.target.value })}
          />
          <InputControl
            label="Email"
            placeholder="Enter email address"
            value={value.email}
            onChange={(e) => setValue({ ...value, email: e.target.value })}
          />
          <InputControl
            label="Password"
            placeholder="Enter Password"
            value={value.password}
            onChange={(e) => setValue({ ...value, password: e.target.value })}
          />
          <div className="flex flex-col items-center space-y-4">
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Sign Up
            </button>
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <span className="text-blue-600 hover:underline">
                <Link to="/login">Login</Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
