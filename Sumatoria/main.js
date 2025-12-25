// Generar número aleatorio entre 1 y 10 para la base
const baseAleatoria = Math.floor(Math.random() * 10) + 1;

// Crear el objeto de la clase Sumatoria (Esto genera la primera línea de salida)
const miSumatoria = new Sumatoria(baseAleatoria);

// Obtener referencia al botón
const btn = document.getElementById('btnEjecutar');

// Asignar el evento click para ejecutar el método sumar()
btn.addEventListener('click', () => {
    miSumatoria.sumar();
});
