import { ChevronRightIcon } from "@heroicons/react/outline";

function HC6Card({ cards }) {
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
          className="w-full bg-white shadow p-4 rounded-lg cursor-pointer inline-block"
          onClick={(e) => (card["url"] ? (window.location = card["url"]) : e.preventDefault())}
        >
          <div className="flex">
            <img
              src={card["icon"]?.["image_url"] || card["icon"]?.["asset_type"] || ""}
              className="h-6 w-6 mr-3"
              alt="icon"
            />
            <div className="flex justify-between w-full">
              <p
                className={"text-" + card["formatted_title"]?.["align"] + "w-full font-semibold"}
                dangerouslySetInnerHTML={{
                  __html: getFormattedText(card["title"], card["formatted_title"]),
                }}
              ></p>
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
