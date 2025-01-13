//conditional based component/ui rendering
//real live eg: ecommerce site payment gateway different methods of payments during checkout net banking, upi, paypal, 
// Button components
const PrimaryButton = () => <button className="primary">Primary</button>;
const SecondaryButton = () => <button className="secondary">Secondary</button>;
 
// Factory function
const ButtonFactory = (type: "primary" | "secondary") => {
  if (type === "primary") return <PrimaryButton />;
  if (type === "secondary") return <SecondaryButton />;
  return null;
};
 
const FactoryPattern = () => {
  return (
<div>
      {ButtonFactory("primary")}
      {ButtonFactory("secondary")}
</div>
  );
};
 

export default FactoryPattern;