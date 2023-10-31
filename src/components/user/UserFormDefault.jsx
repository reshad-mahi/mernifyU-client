import React, { useState } from 'react';
import CustomForm from '../customComponents/CustomForm';

const UserFormDefault = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log('Form submitted with data:', {
      name,
      email,
      gender,
      city,
    });
  };

  const textFields = [
    {
      label: 'Name',
      value: name,
      onChange: (e) => setName(e.target.value),
    },
    {
      label: 'Email',
      value: email,
      onChange: (e) => setEmail(e.target.value),
    },
  ];

  const selectFields = [
    {
      label: 'Gender',
      value: gender,
      onChange: (e) => setGender(e.target.value),
      options: [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
      ],
    },
    {
      label: 'City',
      value: city,
      onChange: (e) => setCity(e.target.value),
      options: [
        { label: 'New York', value: 'ny' },
        { label: 'Los Angeles', value: 'la' },
        { label: 'Chicago', value: 'chicago' },
      ],
    },
  ];

  return (
    <div>
      {' '}
      <CustomForm
        title="User Information"
        textFields={textFields}
        selectFields={selectFields}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default UserFormDefault;
