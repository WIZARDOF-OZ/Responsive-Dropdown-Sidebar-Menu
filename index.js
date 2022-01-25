/* Don't Share Code without giving Credits to Me(WizardOFOZ)

My github: https://github.com/WIZARDOF-OZ
Instagram: https://instagram.com/wizardofoz_official
*/

let arrow = document.querySelectorAll(".arrow");

for (let i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e) => {
    console.log(arrow);

    let arrowParent = e.target.parentElement.parentElement;
    console.log(arrowParent);
    arrowParent.classList.toggle("showMenu");
  });
}

let sidebar = document.querySelector(".sidebar");
console.log(sidebar);
let sidebarBTN = document.querySelector(".bx-menu");
console.log(sidebarBTN);

sidebarBTN.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

/* Don't Share Code without giving Credits to Me(WizardOFOZ)

My github: https://github.com/WIZARDOF-OZ
Instagram: https://instagram.com/wizardofoz_official
*/
