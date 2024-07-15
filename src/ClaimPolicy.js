import React from 'react';

const ClaimPolicy = ({ formData }) => {
  return (
    <div>
      <h3>Claim Policy</h3>
      <p>Name: {formData.name}</p>
    </div>
  );
};

export default ClaimPolicy;
