import React, { useEffect, useState } from "react";
import axios from "axios";
import "./listUser.css";

const ListUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Gọi API để lấy danh sách người dùng
    axios
      .get(
        "https://testwebapibyvspurple20230309182427.azurewebsites.net/api/Users/GetSuggestedRoadmates?IdUser=1&fbclid=IwAR2ZSFlYRb4Lkuq7Vnw-TQpAICwW_RYNxe4X7ZOzKq2IJU_K5B4L2pUCwxg"
      )
      .then((response) => {
        // Lấy dữ liệu từ API và lưu vào state
        setUsers(response.data);
      })
      .catch((error) => {
        // Xử lý lỗi nếu có
        console.error(error);
      });
  }, []);

  return (
    <div className="container">
      {/* <div className="navbar">
        <h1>Danh sách người dùng</h1>
      </div> */}
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên</th>
            <th>Thành phố</th>
            <th>Giới thiệu</th>
            <th>Tags</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.city}</td>
              <td>{user.introduction}</td>
              <td>
                {user.tags.map((tag) => (
                  <span key={tag.id} className="tag">
                    {tag.name}
                  </span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListUser;
