import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from 'antd';

const personalDetails = [
  { id: 1, name: 'John Doe', age: 30, gender: 'Male' },
  { id: 2, name: 'Jane Smith', age: 25, gender: 'Female' },
  { id: 3, name: 'Alice Johnson', age: 28, gender: 'Female' },
];

const Details = () => {
  const navigate = useNavigate();

  const handleCardClick = (person) => {
    navigate(`/form`, { state: { person } });
  };

  return (
    <div>
      {personalDetails.map((person) => (
        <Card key={person.id} onClick={() => handleCardClick(person)}>
          <h3>{person.name}</h3>
        </Card>
      ))}
    </div>
  );
};
export default Details;
