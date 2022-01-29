import React, {useEffect, useState} from 'react';

const Object = () => {
  const [arr, setArr] = useState([2, 4])
  const [obj, setObj] = useState({num: 1, name: 'Desmond'})

  useEffect(() =>{
    console.log("obj", obj)
    console.log("arr", ...arr)
  },[])

  const handleArrClick = () =>{
    const newArr = [1, 5, 7]
    setArr([...arr, ...newArr])

    setTimeout(() => {
      console.log("new Array", arr)
    }, 2000)
  }

  const handleObjClick = () =>{
    const newObj = {name: 'Ifeanyi', age: 25}
    setObj({...obj, ...newObj})
  }
  return (
    <div>
      <button onClick ={handleArrClick}>Set Array State</button>
      <button onClick ={handleObjClick}>Set Object State</button>
    </div>
  );
};

export default Object;
