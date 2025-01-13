// Render Props Component
const BorderWrapper: React.FC<{
    render: React.ReactNode;
  }> = ({ children }) => {
    return (
  <div style={{ border: "2px solid black", padding: "10px" }}>
        {children}
  </div>
    );
  };
   
  const SimpleComponent: React.FC<{ text: string }> = ({ text }) => <p>{text}</p>;
   
  const BorderedComponentRendering: React.FC = () => {
    return (
  <BorderWrapper>
  <SimpleComponent text="This is a bordered component!" />
  </BorderWrapper>
    );
  };


  export default BorderedComponentRendering;