

interface MyButtonProps 
{
    label: string,
    onClickfn:  () => void;
}

const MyButton: React.FC<MyButtonProps> = ({label, onClickfn}) => {
    return <button onClick={onClickfn}>{label}</button>
};


export default MyButton;