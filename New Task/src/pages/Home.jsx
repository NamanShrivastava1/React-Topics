import Card from "../Components/Card.jsx";
import data from "../constant.js";
// import { useContext } from "react";
// import { Context } from "../context/Context.jsx";

const Home = () => {
  // const { marks } = useContext(Context);

  // console.log(marks)
  return (
    <main className="h-screen w-full bg-stone-200 grid grid-cols-5 px-10 py-15">
      {data.map((d) => {
        return <Card key={d.id} data={d} />;
      })}
    </main>
  );
};

export default Home;
