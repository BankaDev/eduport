import React from "react";
import Layout from "../shared/layout";

const NotFound = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="mt-4 text-lg">Page Not Found</p>
      </div>
    </Layout>
  );
};

export default NotFound;
