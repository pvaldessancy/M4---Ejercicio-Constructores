// La clase Cronometro ya está disponible


// Instanciar la clase Cronometro
const cronometro = new Cronometro();
const display = document.getElementById('timerDisplay');
const btnMostrar = document.getElementById('btnMostrar');
const btnReiniciar = document.getElementById('btnReiniciar');

btnMostrar.addEventListener('click', () => {
    display.textContent = cronometro.obtenerTiempo();
});

btnReiniciar.addEventListener('click', () => {
    cronometro.reiniciar();
    display.textContent = "00:00";
});
