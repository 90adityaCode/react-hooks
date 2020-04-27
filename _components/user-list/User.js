import React, { useState, useEffect } from "react";

const User = ({ name }) => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`) 
      .then(response => response.json()) 
      .then(data => {
        if (data.length > 0) {
          const userList = data;
          console.log(userList);
          setUserList(userList);
        }
      });
  }, []);

  const renderUserList = () => {
    if (userList.length > 0) {
      return userList.map((val, index) => {
        return (
          <tr key={val.id}>
            <td>{val.name} </td>
            <td>{val.email}</td>
            <td>{val.phone}</td>
            <td>{val.username}</td>
            <td>{val.website}</td>
          </tr>
        );
      });
    }
    return userList;
  };
  return (
    <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th>Employee Name <i class="fa fa-sort-desc" aria-hidden="true"></i></th>
            <th>Email</th>
            <th>Phone</th>
            <th>Username</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>{renderUserList()}</tbody>
      </table>
    </div>
  );
};
export default User;
