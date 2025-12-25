class Sumatoria {
    constructor(base) {
        this.valorActual = base;
        this.total = 0;
        this.container = document.getElementById('output');
        this.mostrarMensaje(`Constructor: Sumatoria inicializada con base ${base}`);
    }

    sumar() {
        this.total += this.valorActual;
        this.mostrarMensaje(`Sumando: ${this.valorActual}`);
        this.mostrarMensaje(`Total acumulado: ${this.total}`);
        this.valorActual++;
    }

    mostrarMensaje(texto) {
        if (this.container) {
            const p = document.createElement('div');
            p.textContent = texto;
            this.container.appendChild(p);
        } else {
            console.log(texto);
        }
    }
}
