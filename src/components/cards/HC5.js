function HC5({ cards }) {
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
          className="w-full rounded-lg cursor-pointer inline-block h-auto mr-5"
          onClick={() => (window.location = card["url"])}
        >
          <div
            className="flex w-full p-4 rounded-lg items-center shadow-md mr-5 h-auto"
            style={{ backgroundColor: card["bg_color"] ? card["bg_color"] : "yellow" }}
          >
            <img
              src={card["bg_image"]?.["image_url"] || card["icon"]?.["asset_type"]}
              className="rounded-full object-fit"
            />
          </div>
        </div>
      ))}
    </>
  ) : (
    <></>
  );
}

export default HC5;
