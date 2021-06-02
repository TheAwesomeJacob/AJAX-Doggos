const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const button = document.querySelector('.button2')

const promise = fetch(DOG_URL);
const doggos = document.querySelector('.doggos');

button.addEventListener("click", () =>{
promise.then(response => {
    const processingPromise = response.json();
    return processingPromise;

}).then(proccessedRespponse => {

    const img = document.createElement("img");
    img.src = proccessedRespponse.message;
    img.alt = "Cute doggo";
    doggos.appendChild(img);

})
})