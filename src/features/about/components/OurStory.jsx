const OurStory = () => {
  return (
    <section className="flex flex-col md:flex-row items-center gap-8 my-12">
      {/* النصوص */}
      <div className="md:w-1/2 text-left">
        <h2 className="text-3xl font-bold mb-4 text-left">Our Story</h2>
        <p className="text-gray-700 mb-4 leading-relaxed text-left">
          Launched in 2015, Exclusive is South Asia’s premier online shopping
          marketplace with an active presence in Bangladesh. Supported by a wide
          range of tailored marketing, data, and service solutions, Exclusive
          has 10,500 sellers and 300 brands and serves 3 million customers
          across the region.
        </p>
        <p className="text-gray-700 leading-relaxed text-left">
          Exclusive has more than 1 million products to offer, growing very
          fast. Exclusive offers a diverse assortment in categories ranging from
          consumer goods to lifestyle products.
        </p>
      </div>

      {/* الصورة */}
      <div className="md:w-1/2">
        <img
          src="src/assets/imges/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1 (1).png"
          alt="Our Story"
          className="w-full rounded-lg object-cover"
        />
      </div>
    </section>
  );
};

export default OurStory;
