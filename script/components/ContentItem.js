export default function ContentItem() {
  console.log("we are in Content Item");
  const div_element = document.createElement("div");
  div_element.textContent = "new test div from ContentItem";
  return div_element;
}
