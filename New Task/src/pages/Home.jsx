import Card from "../Components/Card.jsx";
import data from "../constant.js";
import { useContext } from "react";
import { Context } from "../context/Context.jsx";

const Home = () => {
  const { marks } = useContext(Context);

  const sortedData = [...data].sort((a, b) => {
    const marksA = marks.find((m) => m.id === a.id)?.average ?? -1;
    const marksB = marks.find((m) => m.id === b.id)?.average ?? -1;

    return marksB - marksA;
  });

  return (
    <main className="h-screen w-full bg-stone-200 grid grid-cols-5 px-10 py-15">
      {sortedData.map((d) => (
        <Card key={d.id} data={d} />
      ))}
    </main>
  );
};

export default Home;
