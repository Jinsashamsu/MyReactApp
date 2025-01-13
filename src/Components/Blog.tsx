import Header from "./Header";
import React from "react";
import Footer from "./Footer";
import Post from "./Post";
import { useState } from "react";
import UserContext from "./UserContext";



const Blog: React.FC = () => {

    const [message, setMessage] = useState(""); // State to hold the message from Footer
 
  // Function to receive the message from Footer
  const handleFooterMessage = (msg: string) => {
    setMessage(msg);
  };

  

    return (
  <div style={{ display: "flex" }}>
  {/* {<Sidebar />} */}
  <div style={{ marginLeft: "220px", width: "100%" }}>
  
  <Header title="My Blog" />
  
  
  <Post title="Post 1" content="This is the first post content." />
  
  <Post title="Post 2" content="This is the second post content." />
  <Post title="Post 3" content="This is the third post content." />
  {/*  
   */}
  <Footer sendMessageToParent={handleFooterMessage} />
  {message && <p style={{ color: "blue", marginTop: "20px" }}>Message from Footer: {message}</p>}
  </div>
  </div>
    );
  };


  export default Blog;