let places = JSON.parse(localStorage.getItem("places")) || [];
let addressform = document.getElementById("addressform");
let destination = document.getElementById("destination");

addressform.addEventListener("submit", function(event) {
    event.preventDefault();
    const location = document.getElementById("location").value.trim();
    const landmarks = document.getElementById("landmarks").value.trim();
    const timedate = document.getElementById("time").value.trim(); 
    const contact = document.getElementById("contact").value.trim();
    const message = document.getElementById("message").value.trim();
    const image = document.getElementById("image").value.trim();

    const place = {
        location: location,
        landmarks: landmarks,
        timedate: timedate,
        contact: contact,
        message: message,
        image: image
    };
    places.push(place);
    localStorage.setItem("places", JSON.stringify(places));
    addressform.reset();
    displayPlaces(places);
});

function displayPlaces(data) {
    destination.innerHTML = "";
    data.forEach(place => {
        let div = document.createElement("div");
        div.className = "place";
        div.innerHTML = `
            <img src="${place.image}" alt="${place.location}" 
            <h3>${place.location}</h3>
            <h4>${place.landmarks}</h4>
            <h4>${place.timedate}</h4>
            <h4>${place.contact}</h4>
            <h4>${place.message}</h4>
        `;
        destination.appendChild(div);
    });
}


displayPlaces(places);