import { RevolvingDot } from "react-loader-spinner";

const Loader = () => {
  return (
    <RevolvingDot
      visible={true}
      height="80"
      width="80"
      color="blue"
      ariaLabel="revolving-dot-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};
export default Loader;
