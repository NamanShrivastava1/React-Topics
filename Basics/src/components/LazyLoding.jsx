// import React from 'react'

import { lazy, Suspense } from "react";

const LazyLoding = () => {
  const Home = lazy(() => import("../pages/Home.jsx"));

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Home />
    </Suspense>
  );
};

export default LazyLoding;
