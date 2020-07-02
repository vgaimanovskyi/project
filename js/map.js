function initMap() {
    const uluru = { lat: 51.4904058, lng: 31.3060742 };
    const map = new google.maps.Map(
        document.getElementById("map"), { zoom: 17, center: uluru });
    const icon = "../images/about/marker.gif";
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
        icon: icon
    });
    const infowindow = document.querySelector(".article__map .infowindow");
    marker.addListener("click", function () {
        infowindow.classList.toggle("hide");
    });
}