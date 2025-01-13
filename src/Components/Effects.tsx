import { useState, useEffect } from 'react'

interface PostEffect
{
    id: number; // or string, depending on your data
  title: string;
  body : string;
}

function EffectUsage() {
    const [data, setData] = useState<PostEffect[]>([]);
    const [loading, setLoading] = useState(true);
  
   useEffect(() => {
     fetch('https://jsonplaceholder.typicode.com/posts')
       .then((response) => response.json())
       .then((data) => {
         setData(data);
         setLoading(false);
       });
   }, []); // Empty array means it runs only once (like componentDidMount).
  
   return (
    <div>
          {loading ? <p>Loading...</p> : <ul>
              {data.map((item) => (
    <>
    <li key={`title-${item.id}`}>Title: {item.title}</li>
    <li key={`body-${item.id}`}>Body: {item.body}</li>
    </>
              ))}
    </ul>}
    </div>
      );
 }

 const Timer = () => {
    const [seconds, setSeconds] = useState(0);
  
    useEffect(() => {
      const timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
  
      // Cleanup the interval on component unmount
      return () => clearInterval(timer);
    }, []); // Empty dependency array ensures this runs only once
  
    return (
      <div>
        <h1>Timer: {seconds} seconds</h1>
      </div>
    );
  };
  
 export default EffectUsage

 export {Timer}