export const SingleItem = ({ data }) => {
  const el = document.createElement("li");
  el.className = "grid-item";

  const elements = [
    { tag: "h3", className: "grid-item-header", text: data.title },
    { tag: "h3", className: "grid-item-subheader", text: data.subtitle },
    { tag: "p", className: "grid-item-content", text: data.description },
  ];

  elements.forEach(({ tag, className, text }) => {
    const child = document.createElement(tag);
    child.className = className;
    child.textContent = text;
    el.appendChild(child);
  });

  return el;
};
