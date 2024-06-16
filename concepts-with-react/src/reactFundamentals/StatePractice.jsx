import React, { useState } from "react";
import { users } from "../constants";

const StatePractice = () => {
  const [userData, setUserData] = useState(users);

  const handleUpdateuser = () => {
    setUserData((prev) => {
      const newData = [...prev];
      newData.forEach((u) => {
        const number = Math.random() * 100;
        u["number"] = number;
      });
      return newData;
    });
  };

  function sortUsersByAge() {
    setUserData((prev) => {
      const newData = [...prev];
      newData.sort((a, b) => a.age - b.age);
      return newData;
    });
  }

  return (
    <>
      <h1>State practice react</h1>
      <button onClick={handleUpdateuser}>Update User</button>
      <button onClick={sortUsersByAge}>Sort by age</button>
      <div>
        {userData.map((u, index) => {
          return (
            <ul key={index}>
              <li>{u.userName}</li>
              <li>{u.age}</li>
              <li>{u.address}</li>
              <li>{u.number}</li>
            </ul>
          );
        })}
      </div>
    </>
  );
};

export default StatePractice;
