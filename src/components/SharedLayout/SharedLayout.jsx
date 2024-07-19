import { Suspense } from "react";
// import { Outlet } from "react-router-dom";

const SharedLayout = ({ children }) => {
  return (
    <div>
      <Suspense fallback={null}>
        {/* <Outlet /> */}
        {children}
      </Suspense>
    </div>
  );
};

export default SharedLayout;
