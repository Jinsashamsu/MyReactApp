//06-01-2025
import { useState, useEffect } from "react";

function DataFetcher({ url, render }) {
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
   
    return render({ data, loading, error });
  }
   
  const RenderPropsFetching: React.FC = () => {
    return (
  <DataFetcher
        url="https://jsonplaceholder.typicode.com/users"
        render={({ data, loading, error }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error: {error.message}</p>;
   
          return (
  <ul>
              {data.map((user) => (
  <li key={user.id}>{user.name}</li>
              ))}
  </ul>
          );
        }}
      />
    );
  };

  export default RenderPropsFetching;