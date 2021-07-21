import { ChevronRightIcon } from "@heroicons/react/outline";

function HC6Card({ cards }) {
  const getFormattedTitle = (title, formatted_title) => {
    return formatted_title["text"] ? formatted_title["text"] : title;
  };

  return cards.length > 0 ? (
    <>
      {cards.map((card) => (
        <div
          className="w-full bg-white shadow p-3 rounded-lg cursor-pointer inline-block"
          onClick={() => (window.location = card["url"])}
        >
          <div className="flex">
            <img
              src={card["icon"]?.["image_url"] || card["icon"]?.["asset_type"]}
              className="h-6 w-6 mr-3"
              alt="icon"
            />
            <div className="flex justify-between w-full">
              <p className={"text-" + card["formatted_title"]?.["align"] + "w-full font-semibold"}>
                {getFormattedTitle(card["icon"], card["formatted_title"])}
              </p>
              <ChevronRightIcon className="h-6 w-6" />
            </div>
          </div>
        </div>
      ))}
    </>
  ) : (
    <></>
  );
}

export default HC6Card;
