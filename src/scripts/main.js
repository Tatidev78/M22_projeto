AOS.init();

const dataDoEvento = new Date("2025-11-11 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAgora = agora.getTime();
    const diferenca = timeStampDoEvento - timeStampAgora;

    const distanciaAteEvento=  Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const distanciaAteEventoHoras = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const distanciaAteEventoMinutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const distanciaAteEventoSegundos = Math.floor((diferenca % (1000 * 60)) / 1000);
    const contador = document.querySelector("#contador");
    contador.innerHTML = `${distanciaAteEvento} dias, ${distanciaAteEventoHoras} horas, ${distanciaAteEventoMinutos} minutos e ${distanciaAteEventoSegundos} segundos`;

    if (diferenca < 0) {
        clearInterval(contaAsHoras);
        contador.innerHTML = "O evento já aconteceu!";
    }
});
