function HC1({ cards }) {
  const getFormattedText = (title, formatted_title) => {
    let entities = formatted_title["entities"];
    if (entities.length > 0) {
      let splittedText = title.split("{}");
      for (let i = 0; i < entities.length; i++) {
        splittedText[i] += entities[i];
      }
      return splittedText.join("");
    } else {
      return title;
    }
  };
  return cards.length > 0 ? (
    <>
      {cards.map((card) => (
        <div
          className="w-full rounded-2xl cursor-pointer inline-block h-full mr-5"
          onClick={() => (window.location = card["url"])}
        >
          <div
            className="flex w-full h-16 p-4 items-center shadow-md"
            style={{ backgroundColor: card["bg_color"] ? card["bg_color"] : "yellow" }}
          >
            <img
              src={card["icon"]?.["image_url"] || card["icon"]?.["asset_type"]}
              className="rounded-full h-12 w-12 mr-4"
            />
            <p>{getFormattedText(card["title"], card["formatted_title"])}</p>
          </div>
        </div>
      ))}
    </>
  ) : (
    <></>
  );
}

export default HC1;
