const Statistics = () => {
    const stats = [
      { value: '2,245,341', label: 'Happy Users' },
      { value: '46,328', label: 'Downloads' },
      { value: '828,867', label: 'Active Subscriptions' },
      { value: '1,928,436', label: 'App Integrations' },
    ];
  
    return (
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((stat, index) => (
              <div key={index} className="text-dark">
                <h3 className="text-4xl font-bold">{stat.value}</h3>
                <p className="mt-2 text-secondary">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Statistics;
  