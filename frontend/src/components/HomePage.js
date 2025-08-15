import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/users");
        const data = await res.json();
        if (Array.isArray(data)) setUsers(data);
      } catch (e) {
        console.error("Fetch users failed:", e);
      }
    };
    load();
  }, []);

  return (
    <div className="home-container">
      <h1>Welcome!</h1>
      <div className="button-group">
        <Link to="/signin"><button>Sign In</button></Link>
        <Link to="/signup"><button>Sign Up</button></Link>
      </div>

      <h2>Registered Users</h2>
      <table className="user-table">
        <thead>
          <tr><th>Name</th><th>Email</th><th>Phone</th><th>Age</th></tr>
        </thead>
        <tbody>
          {users.length ? users.map(u => (
            <tr key={u._id}>
              <td>{u.name}</td><td>{u.email}</td><td>{u.phone}</td><td>{u.age}</td>
            </tr>
          )) : (
            <tr><td colSpan="4">No registered users.</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
export default HomePage;
