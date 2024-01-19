import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

import { PizzaType } from "../../Types/pizzaType";

function Menu() {
  const menu = useLoaderData();
  const menuArray: PizzaType[] = menu.data as PizzaType[];

  return (
    <ul>
      {menuArray.map((pizza: PizzaType) => {
        return <MenuItem pizza={pizza} key={pizza.id}></MenuItem>;
      })}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
