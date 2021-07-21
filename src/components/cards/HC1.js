function HC1({ cards }) {
  const getFormattedTitle = (title, formatted_title) => {
    return formatted_title["text"] ? formatted_title["text"] : title;
  };
  return cards.length > 0 ? (
    <>
      {cards.map((card) => (
        <div
          className="w-full rounded-lg cursor-pointer inline-block h-full"
          onClick={() => (window.location = card["url"])}
        >
          <div
            className="flex w-full h-16 p-4 items-center shadow-md mr-5"
            style={{ backgroundColor: card["bg_color"] ? card["bg_color"] : "yellow" }}
          >
            <img
              src={card["icon"]?.["image_url"] || card["icon"]?.["asset_type"]}
              className="rounded-full h-12 w-12 mr-4"
            />
            <p>{getFormattedTitle(card["icon"], card["formatted_title"])}</p>
          </div>
        </div>
      ))}
    </>
  ) : (
    <></>
  );
}

export default HC1;
