const projects = [
  {
    title: "Youtube Clone",
    image: "images/youtube-clone.png",
    link: "https://github.com/01jray975076/youtube-clone_05_25",
    description:
      "A frontend Youtube clone build with HTML, CSS, and JavaScript. It features a responsive design and allows users to search for videos.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Google Clone",
    image: "images/google-clone.png",
    link: "https://github.com/01jray975076/google-clone_05_25",
    description:
      "A Google homepage clone designed using HTML, CSS, and simple JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Portfolio Website",
    image: "images/profile-portfolio.png",
    link: "https://github.com/01jray975076/profile-portfolio",
    description:
      "This portfolio site built with HTML, CSS, and JavaScript to showcase projects.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Button Practice",
    image: "images/button-practice.png",
    link: "https://github.com/01jray975076/button_practice_05_24",
    description:
      "A styling exercise focused on button design and CSS interactions.",
  },
];

const projectList = document.getElementById("projectList");

projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `
    <img src="${project.image}" alt="${project.title}" />
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <ul class="tags">
    ${project.tags ? project.tags.map(tag => `<li>${tag}</li>`).join("") : ""}
    </ul>
    <a href="${project.link}" target="_blank"> View Project</a>`;
  projectList.appendChild(card);
});

// Hamburger menu toggle
const menuToggle = document.querySelector(".menu-toggle"); // Hamburger icon
const navLinks = document.querySelector(".nav-links"); // Navigation links

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active"); // Toggle the active class to show/hide the menu
});
// Close the menu when a link is clicked
