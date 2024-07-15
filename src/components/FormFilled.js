import React from 'react';
import { useLocation } from 'react-router-dom';

const FormFilled = () => {
  const location = useLocation();
  const { person } = location.state || {};

  return (
    <div>
      {person ? (
        <div>
          <h2>Details</h2>
          <p>Name: {person.name}</p>
          <p>Age: {person.age}</p>
          <p>Gender: {person.gender}</p>
        </div>
      ) : (
        <p>No details available. Please select a card from the Details page.</p>
      )}
    </div>
  );
};
export default FormFilled;
