import CTAButtons from "../CTAButtons";

function HC3({ cards }) {
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
            className="flex flex-col w-full p-4 rounded-lg items-center shadow-md mr-5 h-auto relative"
            style={{ backgroundColor: card["bg_color"] ? card["bg_color"] : "yellow" }}
          >
            <img
              src={card["bg_image"]?.["image_url"] || card["icon"]?.["asset_type"]}
              className="rounded-full object-fit"
            />

            <div className="absolute top-40 flex flex-col justify-center items-center px-5">
              <h1 className="text-3xl w-full whitespace-normal font-semibold overflow-wrap">
                {getFormattedText(card["title"], card["formatted_title"])}
              </h1>
              <p className="whitespace-normal mt-4">
                {getFormattedText(card["description"], card["formatted_description"])}
              </p>
            </div>
            <div>
              {card["cta"].map((config) => (
                <CTAButtons config={config} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  ) : (
    <></>
  );
}

export default HC3;
