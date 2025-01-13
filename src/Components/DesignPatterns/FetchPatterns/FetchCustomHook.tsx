//06-01-2025
import { useEffect, useState } from "react";

// Custom hook for data fetching
function useDataFetcher(url) {
    /* usedatafetcher is custom hook - backend url or web api
data returned, loadingstate, errorstate - returned from the customhook
if error error state will be true
if loading loading state will be true
loadingstate and errorstate is handled in the custom hook */
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
   

    /* standard to be used in useeffect
update the atates in the hook */
    useEffect(() => {
        /* fetch api conversion to json
if axios no conversion needed */
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
   
    return { data, loading, error };
  }
   
  //use custom hook for data fetching or HOC or render function - standard to use any of these as design patterns 
//   custom hook pattern is code maintainablilty, or hoc etc instead of writing it all in the main function
  const CustomHookDataFetch: React.FC = () => {
    const { data, loading, error } = useDataFetcher("https://jsonplaceholder.typicode.com/users");
   
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
   
    return (
  <ul>
        {data.map((user) => (
  <li key={user.id}>{user.name}</li>
        ))}
  </ul>
    );
  };


  export default CustomHookDataFetch;