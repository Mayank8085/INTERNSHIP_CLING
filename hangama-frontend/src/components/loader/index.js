import React from "react";
import "./index.css";

function Loader(props) {
  if (!props.loading) {
    return null;
  }

  return (
    <div class="loading" style={{}}>
      Loading&#8230;
    </div>
  );
}

export default Loader;
