import React from "react";
import { MenuItem } from "./menuLoader";
import './box.css'

export const MenuDatabase = () => {
  const database = [
    { name: "Eggs", price: 10.99, id: 1 ,description:"blah",calories:"100", image:"egg.png" }
  ];

  return (
    <div className="grid">
      {database.map(item => (
        <MenuItem name={item.name} price={item.price} key={item.id} description={item.description} calories={item.calories} image={item.image}/>
      ))}
    </div>
  );
};
