//06-01-2025
import { useState, useEffect } from "react";

// Higher-Order Component for fetching data
function withDataFetching(WrappedComponent, url) {
    //user list component is wrapped in HOC function 
    //receives userlist as argument  and modify it to return as modified component
    return function WithDataFetching(props) {
      const [data, setData] = useState(null);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);
   
      useEffect(() => {
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            setData(data);
            setLoading(false);
          })
          .catch((error) => {
            setError(error);
            setLoading(false);
          });
      }, [url]);

   //after fetching the data all props are appended and returned as separate component
      return <WrappedComponent data={data} loading={loading} error={error} {...props} />;
    };
  }
   
  function UserList({ data, loading, error }) {
    //data laoding and error state are received as props
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
   
    return (
  <ul>
        {data.map((user) => (
  <li key={user.id}>{user.name}</li>
        ))}
  </ul>
    );
  }
   
  // Wrap the component
  const UserListWithData = withDataFetching(UserList, "https://jsonplaceholder.typicode.com/users");
   
  const HOCFetchPattern: React.FC = () => {
    // UserListWithData is a child component which is used for wrapping the component
    return <UserListWithData />;
  };


  export default HOCFetchPattern;