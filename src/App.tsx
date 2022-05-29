import React from "react";
import internal from "stream";
import "./App.css";
import { useState } from "react";

const products = [
  { itemName: "Boar", orders: 35 },
  { itemName: "Paddle", orders: 2 },
  { itemName: "Rehbar", orders: 106 },
];

function App() {
  const [clicks, setClicks] = useState(0);

  function handleClick() {
    setClicks(clicks + 1);
  }

  return (
    <div className="bg-slate-800 h-screen">
      <div className="pt-16 mx-auto flex flex-col justify-center items-center space-y-4">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Iced pigs know better
        </h1>
        <div className="grid grid-cols-2 gap-2 sm:gap-4 sm:grid-cols-3 ">
          {products.map((product) => (
            <Card
              key={product.itemName}
              itemName={product.itemName}
              orders={product.orders}
            />
          ))}
        </div>
        <MyButton onClick={handleClick} text={"Thanks for all the fish"} />
        <h2 className="text-lg text-center font-medium text-white">
          Clicked {clicks} times
        </h2>
      </div>
    </div>
  );
}

export default App;

interface ButtonProp {
  text: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const MyButton = ({ text, onClick }: ButtonProp) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-700 text-white max-w- font-bold py-2 px-4 rounded"
    >
      {text}
    </button>
  );
};

interface CardProps {
  itemName: string;
  orders: number;
}

const Card = ({ itemName, orders }: CardProps) => {
  return (
    <div
      className={`flex flex-col pl-2 pr-12 py-1 bg-gradient-to-r ${
        orders > 50
          ? "from-pink-500 to-yellow-500"
          : "from-cyan-500 to-blue-500"
      } rounded `}
    >
      <h3 className="text-lg font-medium">{itemName}</h3>
      <p className="text-sm text-slate-100">{orders}</p>
    </div>
  );
};
