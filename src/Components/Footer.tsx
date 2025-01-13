interface FooterProps {
    sendMessageToParent: (msg: string) => void;
  }

const Footer: React.FC<FooterProps> = ({sendMessageToParent}) => {

    const handleClick = () => {
        sendMessageToParent("Hello from Footer!"); // Send this message to App
      };
      
    return( 
    
    <footer>Copy Write Protected
    <button onClick={handleClick} style={{ padding: "10px 20px", marginTop: "10px", cursor: "pointer" }}>
            Send Message to Parent
    </button>
    </footer>
    
    )
  };


  export default Footer;