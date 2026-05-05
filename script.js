var acc = document.getElementsByClassName("accordion");

window.addEventListener("load", function () {
    // open first TWO accordions
    for (let i = 0; i < 2; i++) {
        acc[i].classList.add("active");
        let panel = acc[i].nextElementSibling;

        setTimeout(() => {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }, 50);
    }
});

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        let panel = this.nextElementSibling;
        this.classList.toggle("active");

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}