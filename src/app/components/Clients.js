const Clients = () => {
    const logos = ['/logo1.png', '/logo2.png', '/logo3.png', '/logo4.png'];
    return (
      <section className="bg-white py-10">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {logos.map((logo, index) => (
            <img key={index} src={logo} alt="Client Logo" className="w-auto mx-auto" />
          ))}
        </div>
      </section>
    );
  };
  
  export default Clients;
  