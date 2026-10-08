// import React from 'react'

// import { useState } from "react";
// import { useEffect } from "react";
// import Todo from "./components/Todo.jsx";
// import UseRef from "./components/UseRef.jsx";
// import ReactMemo from "./components/ReactMemo";
// import UseMemo from "./components/UseMemo";
// import SyntheticEvents from "./components/SyntheticEvents";
// import UseCallback from "./components/UseCallback";
// import LazyLoding from "./components/LazyLoding";
// import Virtulization from "./components/Virtulization";
// import BuggyComponent from "./components/BuggyComponent";
// import Error from "./ErrorBoundary/Error";
// import { BrowserRouter, Route, Routes } from "react-router";
// import { Pagination } from "./components/Pagination";
// import Debouncing from "./components/Debouncing";
// import Throttling from "./components/Throttling";
// import { UseOptimistic } from "./components/UseOptimistic";
import UseTransition from "./components/UseTransition";

const App = () => {
  return (
    <div>
      {/* <Todo /> */}
      {/* <UseRef /> */}
      {/* <ReactMemo /> */}
      {/* <SyntheticEvents /> */}
      {/* <UseMemo /> */}
      {/* <UseCallback /> */}
      {/* <LazyLoding /> */}
      {/* <Virtulization /> */}
      {/* <Error>
        <BuggyComponent />
      </Error> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/page" element={<Pagination />} />
        </Routes>
      </BrowserRouter> */}
      {/* <Debouncing /> */}
      {/* <UseOptimistic /> */}
      <UseTransition />
    </div>
  );
};

export default App;
