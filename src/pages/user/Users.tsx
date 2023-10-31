import React from 'react';
import UserFormDefault from '../../components/user/UserFormDefault';
import UserFormWithReactHookForm from '../../components/user/UserFormWithReactHookForm';

const Users = () => {
  return (
    <div>
      <UserFormDefault />

      {/* form with react-hook-form */}

      <UserFormWithReactHookForm />
    </div>
  );
};

export default Users;
