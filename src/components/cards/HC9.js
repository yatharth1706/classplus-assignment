function HC9({ cards }) {
  return cards.length > 0 ? (
    <>
      {cards.map((card) => (
        <div
          className="w-auto cursor-pointer inline-block h-auto h-full"
          onClick={() => (window.location = card["url"])}
        >
          <img
            src={card["bg_image"]?.["image_url"] || card["bg_image"]?.["asset_type"]}
            className="h-full"
          />
        </div>
      ))}
    </>
  ) : (
    <></>
  );
}

export default HC9;
