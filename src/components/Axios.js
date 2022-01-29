import React, {useEffect, useState} from 'react';
import axios from "axios";

const Axios = () => {
  const [users, setUsers] = useState([]);
  const endPoint =
    "https://my-json-server.typicode.com/ifeanyidike/jsondata/users";

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const {data} = await axios.get(endPoint);
    setUsers(data);
  };
  return (
    <div className="App">
      {users.map( (user,i) => (

        <div key={i}>
          <h2>{user.name}</h2>
          <p>Occupation: {user.job}</p>
          <p>Sex: {user.sex}</p>
        </div>
      ))}
    </div>
  );
};

export default Axios;
