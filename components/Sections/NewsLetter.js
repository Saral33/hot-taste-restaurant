const NewsLetter = () => {
  return (
    <section className="newslater-section">
      <h1 className="section-header">Get Update from us</h1>
      <div className="section__contents">
        <p className="section__para" style={{ padding: '0 20rem' }}>
          We write monthly newsletter every last monday. We also do give away
          time to time to our beloved customers. Subscribe to our newsletter and
          get update from us every month and get chance to win something big.
        </p>
        <form className="inline-form" style={{ padding: '0 20rem' }}>
          <input required type="email" placeholder="Enter your email" />
          <button type="submit" className="btn-primary">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsLetter;
