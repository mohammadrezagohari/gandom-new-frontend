// lib/withData.js
import { fetchData } from "./api";

const withData = (getData) => (WrappedComponent) => {
  const WithData = (props) => <WrappedComponent {...props} />;

  WithData.getStaticProps = async (context) => {
    const data = await getData(context);
    return {
      props: {
        data,
      },
    };
  };

  return WithData;
};

export default withData;
