import PulseLoader from "react-spinners/PulseLoader";

const Loading: React.FC = () => {
  return (
    <div>
        <PulseLoader color="black" size={300} />
    </div>
  );
};

export default Loading;