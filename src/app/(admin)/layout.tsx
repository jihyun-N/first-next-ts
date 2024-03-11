import React from "react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <p>여기는 Admin과 관련된 페이지가 놓이는 곳</p>
      {children}
    </div>
  );
};

export default AdminLayout;
