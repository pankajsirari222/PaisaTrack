import { Link } from "react-router-dom";
import bg from '../assets/bg.jpg';

const HomeContent = () => {
  return (
    <>
      <div
        className="w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <section className="text-gray-600 body-font ">
          <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
            <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 bg-white  rounded-3xl p-5 shadow-xl shadow-blue-500 ">
              <h1 className="title-font font-medium text-3xl text-blue-800">
                Take hold of your personal finance
              </h1>
              <p className="leading-relaxed mt-4 text-blue-800 font-bold">
                Use Paisa Track to track all your finances and budgeting.
              </p>
            </div>
            <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
              <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
                Sign Up
              </h2>
              <div className="relative mb-4">
                <label
                  htmlFor="full-name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="full-name"
                  name="full-name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <Link to="/dashboard">
                <button className="w-full text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Submit
                </button>
              </Link>
              <p className="text-xs text-gray-500 mt-3">
                Already a user? Login{" "}
                <Link to="/login" className="text-blue-500">
                  here
                </Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomeContent;
