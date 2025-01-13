import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReduxThunkFetchUsers from "./ReduxFetchUsersMain";


const UsersComponent = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users); // Assuming your Redux state structure

  const handleFetchUsers = () => {
    dispatch(ReduxThunkFetchUsers());
  };


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <button onClick={handleFetchUsers} disabled={loading}>
        {loading ? "Loading..." : "Fetch Users"}
      </button>

      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : (
        !loading && <p>No users found. Click "Fetch Users" to load data.</p>
      )}
    </div>
  );
};


export default UsersComponent;