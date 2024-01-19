import { PizzaType } from "../../Types/pizzaType";
import { formatCurrency } from "../../utils/helpers";

type PizzaProp = {
  pizza: PizzaType;
};

function MenuItem({ pizza }: PizzaProp) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li>
      <img src={imageUrl} alt={name} />
      <div>
        <p>{name}</p>
        <p>{ingredients.join(", ")}</p>
        <div>
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
