const Features = () => {
    const features = [
      { icon: '/icon1.png', title: 'Membership Organizations', description: 'Lorem ipsum dolor sit amet.' },
      { icon: '/icon2.png', title: 'National Associations', description: 'Consectetur adipiscing elit.' },
      { icon: '/icon3.png', title: 'Clubs and Groups', description: 'Ut enim ad minim veniam.' },
    ];
  
    return (
      <section id="features" className="bg-gray-100 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-dark">Our Clients</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-6">
                <img src={feature.icon} alt={feature.title} className="h-12 mx-auto" />
                <h3 className="mt-4 text-xl font-semibold text-dark">{feature.title}</h3>
                <p className="mt-2 text-secondary">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Features;
  