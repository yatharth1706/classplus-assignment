function CTAButtons({ config }) {
  return (
    <button
      className="p-2 w-20 text-center rounded-md"
      style={{
        background: config["bg_color"],
        color: config["text_color"],
      }}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        window.location.href = config["url"];
      }}
    >
      {config["text"]}
    </button>
  );
}

export default CTAButtons;
