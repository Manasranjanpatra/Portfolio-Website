import React from 'react';

const Services = () => {
  const ServiceContainer = () => {
    const noService = <p className="not-present">Currently, services are not available!</p>;
    return (
      <div className="service-container">
        {noService}
      </div>
    );
  };

  return (
    <section id="services" className="flex services section">
      <header className="section-heading">
        <span>my</span> - services
      </header>
      <ServiceContainer />
    </section>
  );
};

export default Services;
