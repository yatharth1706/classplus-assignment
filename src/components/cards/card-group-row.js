import HC1 from "./HC1";
import HC3 from "./HC3";
import HC5 from "./HC5";
import HC6 from "./HC6";
import HC9 from "./HC9";

function CardGroupRow({ cardGroup }) {
  return (
    <div
      className="mb-5 w-full p-2 whitespace-nowrap scrollbar-hide overflow-y-hidden"
      style={{
        height: cardGroup["height"] ? cardGroup["height"] : "auto",
        overflowX: cardGroup["is_scrollable"] ? "scroll" : "hidden",
      }}
    >
      {cardGroup["design_type"] === "HC6" && <HC6 cards={cardGroup["cards"]} />}
      {cardGroup["design_type"] === "HC9" && <HC9 cards={cardGroup["cards"]} />}
      {cardGroup["design_type"] === "HC1" && <HC1 cards={cardGroup["cards"]} />}
      {cardGroup["design_type"] === "HC5" && <HC5 cards={cardGroup["cards"]} />}
      {cardGroup["design_type"] === "HC3" && <HC3 cards={cardGroup["cards"]} />}
    </div>
  );
}

export default CardGroupRow;
