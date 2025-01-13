import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const fetchPosts = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return response.data;
  };

  const PostsByQuery: React.FC = () => {
    // Use the "Object form" of useQuery
    const { data, isLoading, isError, error } = useQuery({
      queryKey: ["posts"],   // Key to identify this query
      queryFn: fetchPosts,   // The function to fetch data
    });
   
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: {error?.message}</div>;
   
    return (
  <div>
  <h1>Posts</h1>
  <ul>
          {data.map((post: any) => (
  <li key={post.id}>{post.title}</li>
          ))}
  </ul>
  </div>
    );
  };


  export default PostsByQuery;