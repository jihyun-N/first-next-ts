import React from "react";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <p>여기는 마케팅과 관련된 페이지가 놓이는 곳</p>
      {children}
    </div>
  );
};

export default MarketingLayout;
