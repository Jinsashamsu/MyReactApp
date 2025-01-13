import React from "react";
import UserContext from "./UserContext";
import { useContext } from "react";

interface PostType
{
    title: string;
    content: string;
}

const Post: React.FC<PostType> = (postData) => {
    const user = useContext(UserContext); // Access user data
    
return <div><h4>{postData.title}</h4> <p>{postData.content}</p> <p>Welcome, {user.username}! {user.loggedIn} ! {user.id}</p> </div>
}

export default Post;