import { Watch } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="loader">
      <Watch
        height="80"
        width="80"
        radius="48"
        color="cyan"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        visible={true}
      />
    </div>
  );
};

export default Loading;
