function stars() {
    const count = 1000;
    const body = document.body;
    let i = 0;

    while (i < count) {
        let star = document.createElement("i");
        let x = Math.floor(Math.random() * document.body.clientWidth);
        let y = Math.floor(Math.random() * document.body.clientHeight);
        let duration = Math.random() * 10;
        let size = Math.random() * 2;

        star.style.left = x + "px";
        star.style.top = y + "px";
        star.style.width = 1 + size + "px";
        star.style.height = 1 + size + "px";

        star.style.animationDuration = 5 + duration + "s";
        star.style.animationDelay = duration + "s";
        body.appendChild(star);
        i++;
    }
}
stars();