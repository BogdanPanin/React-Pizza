import React from "react";
import ContentLoader from "react-content-loader";

function LoadingBlock() {
  return (
    <div className="pizza">
      <ContentLoader
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <circle cx="130" cy="130" r="130" />
        <rect x="0" y="271" rx="10" ry="10" width="280" height="24" />
        <rect x="0" y="315" rx="10" ry="10" width="280" height="85" />
        <rect x="0" y="417" rx="10" ry="10" width="89" height="27" />
        <rect x="120" y="409" rx="30" ry="30" width="158" height="40" />
      </ContentLoader>
    </div>
  );
}

export default LoadingBlock;
