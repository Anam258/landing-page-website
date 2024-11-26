const Blog = () => {
    const blogs = [
      {
        image: '/blog1.png',
        title: 'Creating Stronger Safeguarding Processes',
        link: '#',
      },
      {
        image: '/blog2.png',
        title: 'What Are Your Responsibilities as a Leader?',
        link: '#',
      },
      {
        image: '/blog3.png',
        title: 'Strengthening the Membership Model',
        link: '#',
      },
    ];
  
    return (
      <section id="blog" className="bg-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-dark">Caring is the New Marketing</h2>
          <p className="mt-4 text-secondary">
            Discover insights and tips to elevate your business through effective marketing strategies.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogs.map((blog, index) => (
              <div key={index} className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
                <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-dark">{blog.title}</h3>
                  <a
                    href={blog.link}
                    className="mt-4 inline-block text-primary font-medium hover:underline"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Blog;
  