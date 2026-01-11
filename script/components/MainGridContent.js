export const MainGridContent = () => {
  const section_element = document.getElementById("main-grid-content");
  section_element.classList.add("grid");
  section_element.textContent = "test connecting to js";
  const div_element = document.createElement("div");
  div_element.textContent = "new div";
  section_element.appendChild(div_element);
};
