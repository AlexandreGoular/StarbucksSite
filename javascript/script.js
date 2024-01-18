let copo = document.querySelector(".starbucks")
let verde = document.querySelector(".verde")
let rosa = document.querySelector(".rosa")
let amarelo = document.querySelector(".amarelo")
let circulo = document.querySelector(".circulo")

verde.addEventListener("click", () => {
    copo.src = "./assets/img/copoVerde.png"
    circulo.style.background = "#017143"
})

rosa.addEventListener("click", () => {
    copo.src = "./assets/img/copoMorango.png"
    circulo.style.background = "purple"
})

amarelo.addEventListener("click", () => {
    copo.src = "./assets/img/copoMorangoLeite.png"
    circulo.style.background = "pink"
})