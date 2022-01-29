import React from 'react';

const Form = () => {
  const address = (e) =>{
    console.log("hello", e);
    e.preventDefault();
  }
  return (
    <div>
      <form onSubmit={address}>
        <input name="name"/>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
