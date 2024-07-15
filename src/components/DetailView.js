import Item from 'antd/es/list/Item';
import React from 'react'
import { useParams,Link  } from 'react-router-dom'
import { Button } from 'antd';


const personalDetails = [
    { id: 1, name: 'John Doe', age: 30, gender: 'Male' },
    { id: 2, name: 'Jane Smith', age: 25, gender: 'Female' },
    { id: 3, name: 'Alice Johnson', age: 28, gender: 'Female' },
  ];

const DetailView = () => {
    const {id} = useParams();
    const detail = personalDetails.find(item => item.id === parseInt(id))

    if (!detail) return <div>Detail not found</div>;

  return (
    <div>
      <h2>Details</h2>
      <p><strong>Name:</strong> {detail.name}</p>
      <p><strong>Age:</strong> {detail.age}</p>
      <p><strong>Gender:</strong> {detail.gender}</p>

      <Link to="/">
        <Button type="primary">Back to List</Button>
      </Link>
    </div>
  )
}
export default DetailView
