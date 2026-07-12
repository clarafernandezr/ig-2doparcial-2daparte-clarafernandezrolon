let tarjetasObras = document.querySelectorAll('.galeria-obras');
//inicialmente había logrado este efecto en css (muy sencillo con un hover), pero como la consigna pedía que hagamos un efecto con js, elegí este
for (let i = 0; i < tarjetasObras.length; i++) {
    let tarjeta = tarjetasObras[i];
    //tuve que investigar los eventos mouseenter y mouseleave para replicar el efecto del hover
    tarjeta.addEventListener('mouseenter', function () {
        tarjeta.style.transform = "scale(1.08)";
        let overlayTexto = tarjeta.querySelector('.overlay');
        overlayTexto.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
        overlayTexto.style.opacity = "1";
    });

    tarjeta.addEventListener('mouseleave', function () {
        tarjeta.style.transform = "scale(1)";
        let overlayTexto = tarjeta.querySelector('.overlay');
        overlayTexto.style.backgroundColor = "rgba(0, 0, 0, 0)";
        overlayTexto.style.opacity = "0";
    });
}