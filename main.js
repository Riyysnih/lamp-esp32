const endpoint = "http://192.168.1.10";

function getTamuLed() {
    fetch(endpoint + "/tamu", {
        method: "GET"
    }).then(response => response.text()).then(result => {
        if(result == "ON") {
            ledTamu.style.backgroundColor = "red";
            tamuLedImage.src = "./assets/lamp-on.png";
        }
        else {
            ledTamu.style.backgroundColor = "blue";
            tamuLedImage.src = "./assets/lamp-off.png";
        }
    });
}

function getDapurLed() {
    fetch(endpoint + "/dapur", {
        method: "GET"
    }).then(response => response.text()).then(result => {
        if(result == "ON") {
            ledDapur.style.backgroundColor = "red";
            dapurLedImage.src = "./assets/lamp-on.png";
        }
        else {
            ledDapur.style.backgroundColor = "blue";
            dapurLedImage.src = "./assets/lamp-off.png";
        }
    });
}

function getToiletLed() {
    fetch(endpoint + "/toilet", {
        method: "GET"
    }).then(response => response.text()).then(result => {
        if(result == "ON") {
            ledToilet.style.backgroundColor = "red";
            toiletLedImage.src = "./assets/lamp-on.png";
        }
        else {
            ledToilet.style.backgroundColor = "blue";
            toiletLedImage.src = "./assets/lamp-off.png";
        }
    });
}

function getKamarLed() {
    fetch(endpoint + "/kamar", {
        method: "GET"
    }).then(response => response.text()).then(result => {
        if(result == "ON") {
            ledKamar.style.backgroundColor = "red";
            kamarLedImage.src = "./assets/lamp-on.png";
        }
        else {
            ledKamar.style.backgroundColor = "blue";
            kamarLedImage.src = "./assets/lamp-off.png";
        }
    });
}

function setTamuLed() {
    fetch(endpoint + "/tamu", {
        method: "POST"
    }).then(response => response.text()).then(() => location.reload());
}

function setDapurLed() {
    fetch(endpoint + "/dapur", {
        method: "POST"
    }).then(response => response.text()).then(() => location.reload());
}

function setToiletLed() {
    fetch(endpoint + "/toilet", {
        method: "POST"
    }).then(response => response.text()).then(() => location.reload());
}

function setKamarLed() {
    fetch(endpoint + "/kamar", {
        method: "POST"
    }).then(response => response.text()).then(() => location.reload());
}

getTamuLed();
getDapurLed();
getToiletLed();
getKamarLed();
