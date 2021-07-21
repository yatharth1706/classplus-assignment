function HC1({ cards }) {
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
          className="w-full bg-white  p-1 rounded-lg cursor-pointer inline-block"
          onClick={(e) => (card["url"] ? (window.location.href = card["url"]) : e.preventDefault())}
        >
          <div
            className="flex w-full h-16 p-4 items-center shadow-md"
            style={{ backgroundColor: card["bg_color"] ? card["bg_color"] : "yellow" }}
          >
            <img
              src={card["icon"]?.["image_url"] || card["icon"]?.["asset_type"] || ""}
              className="rounded-full h-12 w-12 mr-4"
            />
            <p
              dangerouslySetInnerHTML={{
                __html: getFormattedText(
                  card["title"] ? card["title"] : "",
                  card["formatted_title"] ? card["formatted_title"] : ""
                ),
              }}
            ></p>
          </div>
        </div>
      ))}
    </>
  ) : (
    <></>
  );
}

export default HC1;
