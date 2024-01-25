import { Grid } from "react-loader-spinner";

function Loader() {
  return (
    <div className="flex  w-fit mt-36 mx-auto my-auto justify-center items-center">
      <Grid
        visible={true}
        height="40"
        width="40"
        color="#8403fc"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass="grid-wrapper"
      />
    </div>
  );
}

export default Loader;
