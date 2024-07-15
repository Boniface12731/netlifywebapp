import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ClaimForm from './ClaimForm';
import ClaimPolicy from './ClaimPolicy';

const ClaimParent = () => {
  const [formData, setFormData] = useState({ name: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/claim-form">Claim Form</Link>
          </li>
          <li>
            <Link to="/claim-policy">Claim Policy</Link>
          </li>
        </ul>
      </nav>
      <ClaimForm formData={formData} handleInputChange={handleInputChange} />
      <ClaimPolicy formData={formData} />
    </div>
  );
};

export default ClaimParent;
