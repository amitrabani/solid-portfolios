import React from "react";
import { LoadingMessageContainer } from "./withLoadingStyles";

const WithLoading = LoadingCompoenent => {
  return props => {
    return props.loading ? (
      <LoadingMessageContainer
        style={{ width: props.width, height: props.height }}
      >
        Loading Skeleton...
      </LoadingMessageContainer>
    ) : (
      <LoadingCompoenent {...props} />
    );
  };
};
export default WithLoading;
console.log("validation required");
