// import {useEffect, useState} from "react";
// import axios from "axios";
//
// const FetchedData = () => {
//   const [userIDs, setUserIDs] = useState([]);
//   const [user, setUser] = useState({});
//   const [currentID, setCurrentID] = useState(1);
//
//   const endPoint =
//     "https://my-json-server.typicode.com/ifeanyidike/jsondata/users";
//
//   useEffect(() => {
//     axios.get(endPoint).then(({data}) => setUserIDs(data));
//   }, []);
//
//   useEffect(() => {
//     const fetchUserIDs = async () => {
//       const { data } = await axios.get(`${endPoint}/${currentID}`});
//   setUser(data);
// };
//
// fetchUserIDs();
// }, [currentID]);
//
// const moveToNextUser = () => {
//   setCurrentID((prevId) => (prevId < userIDs.length ? prevId + 1 : prevId));
// };
// const moveToPrevUser = () => {
//   setCurrentID((prevId) => (prevId === 1 ? prevId : prevId - 1));
// };
//
//   return (
//     <div>
//       <div>
//         <h2>{user.name}</h2>
//         <p>Occupation: {user.job}</p>
//         <p>Sex: {user.sex}</p>
//       </div>
//
//       <button onClick={moveToPrevUser}>Prev</button>
//       <button onClick={moveToNextUser}>Next</button>
//     </div>
//   );
// };
//
// export default FetchedData;
