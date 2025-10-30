const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-4 py-3 flex justify-between items-center">
      <div className="flex items-center">
        <h1 className="text-xl font-bold text-gray-800">HRMS</h1>
      </div>
      <div className="text-sm text-gray-600">Welcome, Admin</div>
    </nav>
  );
};

export default Navbar;
