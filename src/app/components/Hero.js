const Hero = () => {
    return (
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl font-bold text-dark leading-tight">
              Lessons and insights <span className="text-primary">from 8 years</span>
            </h1>
            <p className="mt-4 text-secondary">Helping businesses grow through powerful strategies.</p>
            <button className="mt-6 px-6 py-3 bg-primary text-white rounded-md hover:bg-green-700">
              Request
            </button>
          </div>
          <div className="md:w-1/2">
            <img src="/hero-image.png" alt="Hero" className="w-full h-auto" />
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;
  