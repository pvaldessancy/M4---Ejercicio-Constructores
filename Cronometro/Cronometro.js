class Cronometro {
    constructor() {
        this.inicio = new Date();
    }

    obtenerTiempo() {
        const ahora = new Date();
        const segundosTotales = Math.floor((ahora - this.inicio) / 1000);
        const minutos = Math.floor(segundosTotales / 60).toString().padStart(2, '0');
        const segundos = (segundosTotales % 60).toString().padStart(2, '0');

        return `${minutos}:${segundos}`;
    }

    reiniciar() {
        this.inicio = new Date();
    }
}
