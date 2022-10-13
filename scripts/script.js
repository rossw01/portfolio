const bioPanel = document.getElementById("panelOne");
const projectsPanel = document.getElementById("panelTwo");

function scrollToProjects() {
  projectsPanel.scrollIntoView({
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
    behavior: "smooth",
    block: "start",
  });
}
