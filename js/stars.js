function stars() {
    const count = 200;
    const body = document.body;
    let i = 0;

    while (i < count) {
        let star = document.createElement("i");
        const xLeft = document.getElementById("js-fild").getBoundingClientRect().left;
        const xRight = document.getElementById("js-fild").getBoundingClientRect().right;
        let x;
        if (i % 2) {
            x = Math.floor(Math.random() * xLeft) - 20;
        } else {
            x = xRight + xLeft - Math.floor(Math.random() * xLeft) - 20;
        }
        // let y = document.body.clientHeight - Math.floor(Math.random() * window.innerHeight);
        let y = Math.floor(Math.random() * document.body.clientHeight);
        let duration = Math.random() * 10;
        let size = Math.random() * 2;

        star.style.left = x + "px";
        star.style.top = y + "px";
        star.style.width = 1 + size + "px";
        star.style.height = 1 + size + "px";

        star.style.animationDuration = 1 + duration + "s";
        star.style.animationDelay = duration + "s";
        body.appendChild(star);
        i++;
    }
};
if (document.body.clientWidth >= 1250) {
    stars();
};