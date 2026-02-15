export const SingleItem = ({ data }) => {
  const el = document.createElement("li");
  el.className = "grid-item";

  const elements = [
    { tag: "h3", className: "grid-item-header", text: data.title },
    { tag: "h3", className: "grid-item-subheader", text: data.subtitle },
    { tag: "p", className: "grid-item-content", text: data.description },
    {
      tag: "a",
      className: "url",
      text: data.live_url && "live_url",
      url: data.live_url,
    },
    {
      tag: "a",
      className: "url",
      text: data.source_code && "saource_code",
      url: data.source_code,
    },
  ];

  elements.forEach(({ tag, className, text, url }) => {
    if (!url) {
      if (tag === "a") return;
      const child = document.createElement(tag);
      child.className = className;
      child.textContent = text;
      el.appendChild(child);
    } else {
      const child = document.createElement(tag);
      child.href = url;
      child.target = "_blank";
      child.className = className;
      child.textContent = text;
      el.appendChild(child);
    }
  });

  return el;
};
