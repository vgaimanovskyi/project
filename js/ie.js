function ie() {
    //ie detection
    if (!!window.MSInputMethodContext && !!document.documentMode) {
        document.documentElement.classList.add("ie11")
    }
    if (navigator.userAgent.toLowerCase().indexOf("msie 10") != -1) {
        document.documentElement.classList.add("ie10")
    }
    /* if (navigator.userAgent.toLowerCase().indexOf('msie 9') != -1) {
        document.documentElement.classList.add("ie9")
    }
    if (navigator.userAgent.toLowerCase().indexOf('msie 8') != -1) {
        document.documentElement.classList.add("ie8")
    } */
};
ie();