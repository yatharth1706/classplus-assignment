function HC5({ cards }) {
  const getFormattedText = (title, formatted_title) => {
    let entities = formatted_title["entities"];
    let finalHTML = "<p>";
    if (entities.length > 0) {
      let splittedText = title.split("{}");
      for (let i = 0; i < entities.length; i++) {
        let styles = ``;
        if (entities[i]["color"]) {
          styles += `color:${entities[i]["color"]};`;
        }
        if (entities[i]["font_style"]) {
          styles += `font-style:${entities[i]["font_style"]};`;
        }
        if (styles) {
          splittedText[i] += `<span style = "${styles}">${entities[i]["text"]}</span>`;
        } else {
          splittedText[i] += `<span>${entities[i]["text"]}</span>`;
        }
        if (entities[i]["url"]) {
          splittedText[i] = `<a href = "` + entities[i]["url"] + `">` + splittedText[i] + "</a>";
        }
      }
      return finalHTML + splittedText.join("") + "</p>";
    } else {
      return title;
    }
  };
  return cards.length > 0 ? (
    <>
      {cards.map((card) => (
        <div
          className="w-full rounded-lg cursor-pointer inline-block h-auto mr-5"
          onClick={(e) => (card["url"] ? (window.location = card["url"]) : e.preventDefault())}
        >
          <div
            className="flex w-full p-4 rounded-lg items-center shadow-md mr-5 h-auto"
            style={{ backgroundColor: card["bg_color"] ? card["bg_color"] : "yellow" }}
          >
            <img
              src={card["bg_image"]?.["image_url"] || card["icon"]?.["asset_type"] || ""}
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
