import React, { useState } from "react";

const FlightResults = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [offers, setOffers] = useState([]);

  const handleSelectClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <ul>
        {offers.map((offer, index) => (
          <li key={index} className="offer-item">
            <p className="operator-name">{offer.owner.name}</p>
            <div>
              <p className="departing-at">{offer.slices[0].segments[0].departing_at}</p>
              <p className="origin-name">{offer.slices[0].origin.city_name}</p>
            </div>
            <p className="duration">{offer.slices[0].duration}</p>
            <div>
              <p className="arriving-at">{offer.slices[0].segments[0].arriving_at}</p>
              <p className="destination-name">{offer.slices[0].destination.city_name}</p>
            </div>
            <div>
              <p className="total-amount">{offer.total_amount}</p>
              <button className="select-button" onClick={handleSelectClick}>
                Select
              </button>
            </div>
          </li>
        ))}
      </ul>
      {isModalOpen && (
        <div className="select-modal">
          <p className="total-emissions">Emissions</p>
          <p className="destination-type">Tax Amount</p>
          <p className="corporate-code">Code</p>
          <button onClick={handleCloseModal}>Close</button>
        </div>
      )}
    </div>
  );
};

export default FlightResults;