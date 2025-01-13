import { useRecoilState } from "recoil";
import { bearCountStateRecoil } from "./RecoilStore";

const RecoilCounter: React.FC = () => {
    const [bears, setBears] = useRecoilState(bearCountStateRecoil);
   
    return (
  <div>
  <h1>Bears: {bears}</h1>
  <button onClick={() => setBears((prev) => prev + 1)}>Increase Bears</button>
  <button onClick={() => setBears((prev) => prev - 1)}>Decrease Bears</button>
  </div>
    );
  };


  export default RecoilCounter;