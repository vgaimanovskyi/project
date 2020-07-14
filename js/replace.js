function replace() {
    //ie detection
    if (!!window.MSInputMethodContext && !!document.documentMode) {
        window.location.replace("pages/ie.html");
    }
    if (navigator.userAgent.toLowerCase().indexOf("msie") != -1) {
        window.location.replace("pages/ie.html");
    }
    if (document.body.clientWidth < 479) {
        window.location.replace("pages/mobile.html");
    }
};
replace();