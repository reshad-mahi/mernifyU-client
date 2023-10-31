import React from 'react';
import { useForm } from 'react-hook-form';
import CustomForm from '../customComponents/CustomForm';
import CustomFormWithReactHookForm from '../customComponents/CustomFormWithReactHookForm';

const UserFormWithReactHookForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // Perform form submission logic here
    console.log('Form submitted with data:', register);
  };

  const textFields = [
    {
      label: 'Name',
      name: 'name',
    },
    {
      label: 'Email',
      name: 'email',
    },
  ];

  const selectFields = [
    {
      label: 'Gender',
      name: 'gender',
      options: [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
      ],
    },
    {
      label: 'City',
      name: 'city',
      options: [
        { label: 'New York', value: 'ny' },
        { label: 'Los Angeles', value: 'la' },
        { label: 'Chicago', value: 'chicago' },
      ],
    },
  ];

  return (
    <div>
      <CustomFormWithReactHookForm
        title="User Information with react hook form"
        textFields={textFields}
        selectFields={selectFields}
        onSubmit={handleSubmit(onSubmit)}
        register={register}
      />
    </div>
  );
};

export default UserFormWithReactHookForm;
