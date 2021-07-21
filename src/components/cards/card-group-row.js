import HC1 from "./HC1";
import HC6 from "./HC6";
import HC9 from "./HC9";

function CardGroupRow({ cardGroup }) {
  return (
    <div
      className="mb-5 w-full p-2 whitespace-nowrap overflow-x-scroll scrollbar-hide overflow-y-hidden"
      style={{
        height: cardGroup["height"] ? cardGroup["height"] : "auto",
      }}
    >
      {cardGroup["design_type"] === "HC6" && <HC6 cards={cardGroup["cards"]} />}
      {cardGroup["design_type"] === "HC9" && <HC9 cards={cardGroup["cards"]} />}
      {cardGroup["design_type"] === "HC1" && <HC1 cards={cardGroup["cards"]} />}
    </div>
  );
}

export default CardGroupRow;
