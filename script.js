const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const promise = fetch(DOG_URL);
const doggos = document.querySelector('.doggos');

promise.then(response => {
    const processingPromise = response.json();
    return processingPromise;
}).then(proccessedRespponse => {
    const img = document.createElement("img");
    img.src = proccessedRespponse.message;
    img.alt = "Cute doggo";
    doggos.appendChild(img);
})