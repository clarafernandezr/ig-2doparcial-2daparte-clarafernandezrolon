let curiosidades = [
    "Laurie Anderson fue una de las primeras artistas en combinar performance, música experimental y tecnología en la escena del arte contemporáneo.",
    "Su tema O Superman se convirtió en un éxito inesperado en 1981 y llegó al segundo puesto en los rankings del Reino Unido.",
    "Diseñó su propio violín eléctrico que le permitía tocar sonidos digitales y activar efectos con sensores.",
    "Ha colaborado con artistas como Lou Reed, con quien estuvo casada hasta su fallecimiento en 2013.",
    "En 2002 fue nombrada la primera artista residente de la NASA, desarrollando obras inspiradas en la exploración espacial.",
    "Su instalación de realidad virtual Chalkroom recibió el premio a mejor experiencia inmersiva en el Festival de Cine de Venecia en 2017.",
    "Utiliza su propia voz alterada digitalmente como herramienta narrativa y estética en muchas de sus obras.",
    "Ha creado instalaciones multimedia que combinan texto, imagen y sonido en entornos sensoriales de gran escala.",
    "Su obra cruza permanentemente los límites entre arte, ciencia, política y poesía.",
    "Sigue siendo una figura activa e influyente en el arte digital y ha experimentado con inteligencia artificial en proyectos recientes."
]
//esta segunda constante será usada cuando el primer array de curiosidades se quede sin elementos
const curiosidades2 = [
    "Laurie Anderson fue una de las primeras artistas en combinar performance, música experimental y tecnología en la escena del arte contemporáneo.",
    "Su tema O Superman se convirtió en un éxito inesperado en 1981 y llegó al segundo puesto en los rankings del Reino Unido.",
    "Diseñó su propio violín eléctrico que le permitía tocar sonidos digitales y activar efectos con sensores.",
    "Ha colaborado con artistas como Lou Reed, con quien estuvo casada hasta su fallecimiento en 2013.",
    "En 2002 fue nombrada la primera artista residente de la NASA, desarrollando obras inspiradas en la exploración espacial.",
    "Su instalación de realidad virtual Chalkroom recibió el premio a mejor experiencia inmersiva en el Festival de Cine de Venecia en 2017.",
    "Utiliza su propia voz alterada digitalmente como herramienta narrativa y estética en muchas de sus obras.",
    "Ha creado instalaciones multimedia que combinan texto, imagen y sonido en entornos sensoriales de gran escala.",
    "Su obra cruza permanentemente los límites entre arte, ciencia, política y poesía.",
    "Sigue siendo una figura activa e influyente en el arte digital y ha experimentado con inteligencia artificial en proyectos recientes."
]


function mostrarCuriosidades() {
    //aquí yo había aplicado el random dentro de curiosidadMostrada, intentando hacer el splice luego, pero solo podía primero creando una variable de indiceAleatorio
    let indiceAleatorio = Math.floor(Math.random() * curiosidades.length);
    let curiosidadMostrada = curiosidades[indiceAleatorio];
    alert(curiosidadMostrada);
    curiosidades.splice(indiceAleatorio, 1);
    //decidí que sería una mejora ir sacando los datos curiosos ya mostrados y al final reiniciar el array para que siempre se vean datos distintos hasta el reinicio
    if (curiosidades.length === 0) {
        curiosidades = curiosidades2.slice();
    }
}