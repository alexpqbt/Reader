import React, { useEffect, useState } from "react";

const Test = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8081/users")
      .then((res) => res.json())
      .then((data) => setData(data))
      .then((err) => console.log(err));
  }, []);
  return (
    <>
      <div style={{ padding: "40px" }}>
        <table>
          <thead>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Password</th>
            <th>Date Joined</th>
            <th>Description</th>
            <th>Streak Count</th>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={i}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.username}</td>
                <td>{d.password}</td>
                <td>{d.date_joined}</td>
                <td>{d.description}</td>
                <td>{d.streak_count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Test;
