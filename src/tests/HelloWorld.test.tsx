import '@testing-library/jest-dom'; // Import jest-dom for custom matchers
import { render, screen } from '@testing-library/react';
import HelloWorld from '../Components/HelloWorld';


// Test case for rendering HelloWorld component
test('displays correct greeting', () => {
    // Render the component
    render(<HelloWorld />);
   
    // Access the element containing the greeting text
    const greeting = screen.getByRole('heading');  // Using getByRole to access element
   
    // Check if the element is in the document
    expect(greeting).toBeInTheDocument();
   
    // Check if the element contains the correct text content
    expect(greeting).toHaveTextContent('Hello World');
  });


