import { useState } from "react";

const LoginForm = () => {
const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!email || !password) {
      setError('Email and Password are required!');
      return;
    }    
    else{
        setError('');
      alert('Logged in!');
    }
  };

  


return (
    <form onSubmit={handleSubmit}>
        <input 
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        ></input>

         <input 
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        ></input>

        <button type="submit">Login</button>
        {error && <p style={{color:'red'}}>{error}</p>}
    </form>
);
};


export default LoginForm;