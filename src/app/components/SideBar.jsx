import { useState } from "react";
import { FaBell } from "react-icons/fa6";
import { RiDiscussFill } from "react-icons/ri";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside
        className={`bg-blue-800 text-white w-80 fixed left-0 top-0 h-full overflow-y-auto transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          id="menu-toggle"
          className="bg-blue-800 text-white px-1 py-1 rounded-md absolute top-0 right-0 m-1 border hover:bg-blue-500"
          onClick={toggleSidebar}
        >
          {/* Show cross icon when sidebar is open, otherwise burger icon */}
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {/* Avatar and Greeting */}
        <div className="flex items-center mt-12 border-b-white border-b pb-4 pl-4">
          <img
            src="https://imgs.search.brave.com/p3AvRgqD2Ya2sFXS5kKR4SQt3TIVLOw7y_jTJtv-jpI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/a2luZHBuZy5jb20v/cGljYy9tLzI1Mi0y/NTI0Njk1X2R1bW15/LXByb2ZpbGUtaW1h/Z2UtanBnLWhkLXBu/Zy1kb3dubG9hZC5w/bmc"
            alt="Avatar"
            className="h-10 w-10 rounded-full"
          />
          <div className="ml-2 font-medium text-lg">Hello, User</div>
          <div className="ml-10">
            <FaBell className="text-xl ml-20" />
          </div>
        </div>

        {/* Menu Items */}
        <ul className="mt-7">
          <li>
            <div
              className="hover:bg-blue-700 flex px-4 py-2"
              onClick={toggleDropdown}
            >
              <RiDiscussFill className="mr-2 text-2xl" />
              <span className="text-lg cursor-pointer">Discussion Forum</span>
              {dropdownOpen && (
                <ul className="ml-10 absolute bg-blue-800 text-white p-2">
                  <li>
                    <a href="#" className="hover:bg-blue-700 block py-1">
                      Option 1
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:bg-blue-700 block py-1">
                      Option 2
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </li>
          <li>
            <div
              className="hover:bg-blue-700 flex px-4 py-2"
              onClick={toggleDropdown}
            >
              <RiMoneyDollarCircleFill className="mr-2 text-2xl" />
              <span className="text-lg cursor-pointer">Marketing Stories</span>
              {dropdownOpen && (
                <ul className="ml-10 absolute bg-blue-800 text-white p-2">
                  <li>
                    <a href="#" className="hover:bg-blue-700 block py-1">
                      Option 1
                    </a>
                  </li>

                  <li>
                    <a href="#" className="hover:bg-blue-700 block py-1">
                      Option 2
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className="flex-grow p-8">
        {/* Button to open sidebar */}
        {!isOpen && (
          <button
            id="menu-toggle"
            className="bg-blue-800 text-white px-4 py-2 rounded-md fixed left-0 top-0 m-4"
            onClick={toggleSidebar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
