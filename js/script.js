// script.js
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  
  sections.forEach(section => {
    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "Mostrar/Ocultar";
    toggleBtn.style.marginBottom = "10px";
    toggleBtn.style.display = "block";
    
    section.insertBefore(toggleBtn, section.children[1]);
    
    toggleBtn.addEventListener("click", () => {
      const content = Array.from(section.children).slice(2); 
      content.forEach(el => {
        el.style.display = (el.style.display === "none") ? "block" : "none";
      });
    });
  });
});
