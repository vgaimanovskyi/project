/* window.scrollTo({
top: document.body.scrollHeight,
behavior: "smooth"
}); */

const planetArr = [];
const sectorArr = [];
const planets = document.getElementsByClassName("planet-block");
const fild = document.getElementsByClassName("fild")[0];
const sector = document.getElementsByClassName("sector");

for (let planet of planets) {
    let planetObj = {
        score: planet.dataset.score,
        top: pageYOffset + planet.getBoundingClientRect().top,
        left: planet.getBoundingClientRect().left - fild.getBoundingClientRect().left,
    }
    planetArr.unshift(planetObj);
}
for (let s of sector) {
    sectorArr.unshift(pageYOffset + s.getBoundingClientRect().top - s.getBoundingClientRect().height);
}
console.log("sectorArr", sectorArr);
// console.log("sectorArr", sectorArr[10], "plane.top", sectorArr[0] + 800);

const app = new Vue({
    el: '#app',
    data: {
        planetArr: planetArr,
        sectorArr: sectorArr,
        avatar: "",
        name: "",
        music: false,
        stars: false,
        admin: false,
        plane: {
            path: "",
            type: 0,
            life: 5,
            score: 0,
            top: sectorArr[0] + 800,
            left: 100,
            rotate: false,
            reverse: false,
            start: true,
            finish: false,
            fire: false,
        },
        step: 0,
        stepCount: 0,
        startFly: 0,
        endFly: 0,
        questStart: {
            modal: true,
            inputError: false
        },
        quest1: {
            modal: false,
            correct: 5,
            you: 0,
            achieve: false
        },
        quest2: {
            modal: false,
        },
        quest3: {
            modal: false,
        },
        quest4: {
            modal: false,
        },
        quest5: {
            modal: false,
            question1: "",
            answer1: false,
            question2: "",
            answer2: false,
            question3: "",
            answer3: false,
            correct: "111",
            you: "",
            achieve: false
        },
        quest6: {
            modal: false,
        },
        quest7: {
            modal: false,
        },
        quest8: {
            modal: false,
        },
        quest9: {
            modal: false,
            question1: "",
            answer1: false,
            question2: "",
            answer2: false,
            question3: "",
            answer3: false,
            question4: "",
            answer4: false,
            question5: "",
            answer5: false,
            correct: "11111",
            you: "",
            achieve: false
        },
        quest10: {
            modal: false,
            achieve: false
        },
        quest11: {
            modal: false,
        },
        quest12: {
            modal: false,
        },
        quest13: {
            modal: false,
            question1: "",
            answer1: "class='panel'",
            question2: "",
            answer2: "visible",
            question31: "",
            answer31: "<ol>",
            question32: "",
            answer32: "</ol>",
            question4: "",
            answer4: "translate(-50%,-50%)",
            achieve: false
        },
        quest14: {
            modal: false,
        },
        quest15: {
            modal: false,
            question: [],
            answer: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            you: 0,
            achieve: false
        },
        quest16: {
            modal: false,
        },
        quest17: {
            modal: false,
            question: [],
            answer: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            you: 0,
            achieve: false
        },
        quest18: {
            modal: false,
        },
        quest19: {
            modal: false,
        },
        questFinish: {
            modal: false,
        }
    },
    computed: {
        windowWidth: function () {
            if (document.body.clientWidth >= 1250) {
                return true;
            } else {
                return false;
            }
        }
    },
    methods: {
        addStep() {
            this.stepCount++;
            this.plane.fire = true;
            this.plane.start = false;
            if (this.endFly === 10 || this.endFly === 22 || this.endFly === 33) {
                this.step = 1;
            } else if (this.endFly === 28) {
                this.step = 4;
            } else if (!this.admin) {
                this.step = Math.floor(Math.random() * 3 + 1);;
            }
            this.startFly = this.plane.score;
            this.plane.score += +this.step;
            this.endFly = this.plane.score;

            this.fly(this.startFly);
        },
        fly(n) {
            console.log(n);

            if (this.step > 0) {
                n++;
            }
            if (n <= this.endFly) {

                if (n === 1 && this.endFly === 1 || !((n - 1) % 6)) {
                    // n === 1 || n === 7 || n === 13 || n === 19 || n === 25 || n === 31 || n === 37 || n === 43
                    console.log(n);
                    this.plane.rotate = true;
                    this.plane.reverse = false;
                } else if (n === 4 || !((n - 4) % 6)) {
                    // n === 4 || n === 10 || n === 16 || n === 22 || n === 28 || n === 34 || n === 40 || n === 46
                    console.log(n);
                    this.plane.reverse = true;
                    this.plane.rotate = false;
                } else if (!(n % 3)) {
                    // n === 3 || n === 6 || n === 9 || n === 12 || n === 15 || n === 18 || n === 21 || n === 24 || n === 27 || n === 30 || n === 33 || n === 36 || n === 39 || n === 42 || n === 45
                    this.plane.reverse = false;
                    this.plane.rotate = false;
                    // console.log(n);
                }

                this.startFly = n;
                this.plane.top = this.planetArr[n - 1].top;
                this.plane.left = this.planetArr[n - 1].left;
                console.log("plane.top", n);
                setTimeout(this.fly, 2000, this.startFly);

                if (window.innerWidth < 479) {
                    window.scrollTo({
                        top: this.sectorArr[n] + 20,
                        behavior: "smooth"
                    });
                    console.log("scroll");
                } else if (window.innerHeight < 479) {
                    window.scrollTo({
                        top: this.sectorArr[n] + 250,
                        behavior: "smooth"
                    });
                    console.log("scroll");
                } else if (window.innerHeight < 576) {
                    window.scrollTo({
                        top: this.sectorArr[n] + 350,
                        behavior: "smooth"
                    });
                    console.log("scroll");
                } else {
                    window.scrollTo({
                        top: this.sectorArr[n],
                        behavior: "smooth"
                    });
                    console.log("scroll", n);
                }
            } else {
                this.plane.fire = false;
            };

            /* --- modal quests open --- */
            if (this.endFly === 3 && this.plane.left === this.planetArr[2].left && this.plane.top === this.planetArr[2].top) {
                this.openModal("quest1");
            } else if (this.endFly === 5 && this.plane.left === this.planetArr[4].left && this.plane.top === this.planetArr[4].top) {
                this.openModal("quest2");
            } else if (this.endFly === 8 && this.plane.left === this.planetArr[7].left && this.plane.top === this.planetArr[7].top) {
                this.openModal("quest3");
            } else if (this.endFly === 10 && this.plane.left === this.planetArr[9].left && this.plane.top === this.planetArr[9].top) {
                this.openModal("quest4");
            } else if (this.endFly === 12 && this.plane.left === this.planetArr[11].left && this.plane.top === this.planetArr[11].top) {
                this.openModal("quest5");
            } else if (this.endFly === 15 && this.plane.left === this.planetArr[14].left && this.plane.top === this.planetArr[14].top) {
                this.openModal("quest6");
            } else if (this.endFly === 19 && this.plane.left === this.planetArr[18].left && this.plane.top === this.planetArr[18].top) {
                this.openModal("quest7");
            } else if (this.endFly === 22 && this.plane.left === this.planetArr[21].left && this.plane.top === this.planetArr[21].top) {
                this.openModal("quest8");
            } else if (this.endFly === 24 && this.plane.left === this.planetArr[23].left && this.plane.top === this.planetArr[23].top) {
                this.openModal("quest9");
            } else if (this.endFly === 25 && this.plane.left === this.planetArr[24].left && this.plane.top === this.planetArr[24].top) {
                this.openModal("quest10");
            } else if (this.endFly === 28 && this.plane.left === this.planetArr[27].left && this.plane.top === this.planetArr[27].top) {
                this.openModal("quest11");
            } else if (this.endFly === 31 && this.plane.left === this.planetArr[30].left && this.plane.top === this.planetArr[30].top) {
                this.openModal("quest12");
            } else if (this.endFly === 32 && this.plane.left === this.planetArr[31].left && this.plane.top === this.planetArr[31].top) {
                this.openModal("quest13");
            } else if (this.endFly === 37 && this.plane.left === this.planetArr[36].left && this.plane.top === this.planetArr[36].top) {
                this.openModal("quest14");
            } else if (this.endFly === 40 && this.plane.left === this.planetArr[39].left && this.plane.top === this.planetArr[39].top) {
                this.openModal("quest15");
            } else if (this.endFly === 16 && this.plane.left === this.planetArr[15].left && this.plane.top === this.planetArr[15].top) {
                this.openModal("quest16");
            } else if (this.endFly === 43 && this.plane.left === this.planetArr[42].left && this.plane.top === this.planetArr[42].top) {
                this.openModal("quest17");
            } else if (this.endFly === 33 && this.plane.left === this.planetArr[32].left && this.plane.top === this.planetArr[32].top) {
                this.openModal("quest18");
            } else if (this.endFly === 35 && this.plane.left === this.planetArr[34].left && this.plane.top === this.planetArr[34].top) {
                this.openModal("quest19");
            } else if (this.plane.left === this.planetArr[45].left && this.plane.top === this.planetArr[45].top) {
                this.openModal("questFinish");
            }
        },
        changeStep(s) {
            // alert("На один ход назад");
            this.step = s;
            if (s < 0) {
                this.endFly = this.plane.score;
                this.plane.score += this.step;
                this.startFly = this.plane.score;
            } else {
                this.startFly = this.plane.score;
                this.plane.score += this.step;
                this.endFly = this.plane.score;
            }

            // console.log("startFly", this.startFly, "endFly", this.endFly);

            this.fly(this.startFly);
            this.step = 0;
        },
        openModal(q) {
            if (q === "quest1") {
                this.quest1.modal = true;
                $(".panel-carousel").slick("setPosition");
            } else if (q === "quest2") {
                this.quest2.modal = true;
            } else if (q === "quest3") {
                this.quest3.modal = true;
            } else if (q === "quest4") {
                this.quest4.modal = true;
            } else if (q === "quest5") {
                this.quest5.modal = true;
                $(".panel-carousel").slick("setPosition");
            } else if (q === "quest6") {
                this.quest6.modal = true;
            } else if (q === "quest7") {
                this.quest7.modal = true;
            } else if (q === "quest8") {
                this.quest8.modal = true;
            } else if (q === "quest9") {
                this.quest9.modal = true;
                $(".panel-carousel").slick("setPosition");
            } else if (q === "quest10") {
                this.quest10.modal = true;
            } else if (q === "quest11") {
                this.quest11.modal = true;
            } else if (q === "quest12") {
                this.quest12.modal = true;
            } else if (q === "quest13") {
                this.quest13.modal = true;
                $(".panel-carousel").slick("setPosition");
            } else if (q === "quest14") {
                this.quest14.modal = true;
            } else if (q === "quest15") {
                this.quest15.modal = true;
                $(".panel-carousel").slick("setPosition");
            } else if (q === "quest16") {
                this.quest16.modal = true;
            } else if (q === "quest17") {
                this.quest17.modal = true;
                $(".panel-carousel").slick("setPosition");
            } else if (q === "quest18") {
                this.quest18.modal = true;
            } else if (q === "quest19") {
                this.quest19.modal = true;
            } else if (q === "questFinish") {
                this.questFinish.modal = true;
            }
        },
        questAnswer(q) {
            if (q === "q4q1") {
                this.quest5.you += this.quest5.question1;
                this.quest5.answer1 = true;
            } else if (q === "q4q2") {
                this.quest5.you += this.quest5.question2;
                this.quest5.answer2 = true;
            } else if (q === "q4q3") {
                this.quest5.you += this.quest5.question3;
                this.quest5.answer3 = true;
            } else if (q === "q9q1") {
                this.quest9.you += this.quest9.question1;
                this.quest9.answer1 = true;
            } else if (q === "q9q2") {
                this.quest9.you += this.quest9.question2;
                this.quest9.answer2 = true;
            } else if (q === "q9q3") {
                this.quest9.you += this.quest9.question3;
                this.quest9.answer3 = true;
            } else if (q === "q9q4") {
                this.quest9.you += this.quest9.question4;
                this.quest9.answer4 = true;
            } else if (q === "q9q5") {
                this.quest9.you += this.quest9.question5;
                this.quest9.answer5 = true;
            } else if (q === "quest15") {
                for (let i = 0; i <= this.quest15.question.length - 1; i++) {
                    if (this.quest15.question[i] == this.quest15.answer[i]) {
                        this.quest15.you++;
                    }
                }
            } else if (q === "quest17") {
                for (let i = 0; i <= this.quest17.question.length - 1; i++) {
                    if (this.quest17.question[i] == this.quest17.answer[i]) {
                        this.quest17.you++;
                    }
                }
            }
        },
        getStart() {
            if (this.name.length > 0) {
                this.avatar = document.querySelector("#avatars-carousel .slick-active").children[0].attributes[0].nodeValue;
                this.plane.path = document.querySelector("#ships-carousel .slick-active").children[0].attributes[0].nodeValue;
                this.questStart.modal = false;

                this.plane.type = +document.querySelector("#ships-carousel .slick-active").attributes[1].nodeValue;
                if (this.name === "admin") {
                    this.admin = true;
                    document.body.style.overflow = "visible";
                }
                if (this.stars) {
                    let stars = document.querySelectorAll("body > i");
                    for (let i of stars) {
                        i.classList.add("aminate");
                    }
                } else {
                    let stars = document.querySelectorAll("body > i");
                    for (let i of stars) {
                        i.classList.remove("aminate");
                    }
                }
                $(window).scrollTop($(document).height())
            } else {
                this.questStart.inputError = true;
            }
        },
        finish() {
            this.questFinish.modal = false;
            this.plane.finish = true;

            setTimeout(this.pageReload, 4000);
        },
        pageReload() {
            location.reload();
        },
    },
});
