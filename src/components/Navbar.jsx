const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="bg-white shadow-md px-4 py-3 flex justify-between items-center">
      <div className="flex items-center">
        <button
          onClick={toggleSidebar}
          className="md:hidden mr-4 p-2 rounded-md hover:bg-gray-100"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <h1 className="text-xl font-bold text-gray-800">HRMS</h1>
      </div>
      <div className="text-sm text-gray-600">Welcome, Admin</div>
    </nav>
  );
};

export default Navbar;
