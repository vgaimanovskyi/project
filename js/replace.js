function replace() {
    //ie detection
    if (!!window.MSInputMethodContext && !!document.documentMode) {
        window.location.replace("pages/ie.html");
    }
    if (navigator.userAgent.toLowerCase().indexOf("msie") != -1) {
        window.location.replace("pages/ie.html");
    }

    // document.body.clientWidth
    if (window.innerWidth < 320 || window.innerHeight < 320) {
        window.location.replace("pages/mobile.html");
    }
};
replace();