document.addEventListener('DOMContentLoaded', () => {
  const filters = document.querySelectorAll('.filter-btn');
  const projects = document.querySelectorAll('.project-card');

  filters.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.dataset.category;
      projects.forEach(project => {
        project.style.display = project.classList.contains(category) || category === "all" ? "block" : "none";
      });
    });
  });
});
