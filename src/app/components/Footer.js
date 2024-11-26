const Footer = () => {
  
    return (
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold">Nexcent</h3>
            <p className="mt-4 text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-white hover:text-primary">Facebook</a>
              <a href="#" className="text-white hover:text-primary">Twitter</a>
              <a href="#" className="text-white hover:text-primary">LinkedIn</a>
            </div>
          </div>
          {/* Links */}
          <div>
            <h4 className="text-lg font-bold">Company</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-secondary hover:text-primary">About Us</a></li>
              <li><a href="#" className="text-secondary hover:text-primary">Careers</a></li>
              <li><a href="#" className="text-secondary hover:text-primary">Contact</a></li>
            </ul>
          </div>
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold">Stay Up to Date</h4>
            <form className="mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 text-dark rounded-md"
              />
              <button className="mt-2 w-full px-4 py-2 bg-primary text-white rounded-md hover:bg-green-700">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  