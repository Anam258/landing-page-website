const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-xl font-bold text-primary">Nexcent</div>
        <div className="space-x-4">
          <a href="#features" className="text-secondary hover:text-primary">Features</a>
          <a href="#blog" className="text-secondary hover:text-primary">Blog</a>
          <a href="#contact" className="text-secondary hover:text-primary">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
