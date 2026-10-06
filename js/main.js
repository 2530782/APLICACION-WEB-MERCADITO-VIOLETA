// =====================================================
// MERCADITO VIOLETA - Interacciones del sitio
// =====================================================

// ===== 1. Filtro por categoría y buscador (emprendedoras.html) =====
const botonesFiltro = document.querySelectorAll('[data-filtro]');
const tarjetas = document.querySelectorAll('.negocio');
const buscador = document.getElementById('buscador');
const mensajeVacio = document.getElementById('sin-resultados');

let categoriaActual = 'Todas';

function aplicarFiltros() {
    const texto = buscador ? buscador.value.trim().toLowerCase() : '';
    let visibles = 0;

    tarjetas.forEach(function (tarjeta) {
        const coincideCategoria =
            categoriaActual === 'Todas' || tarjeta.dataset.categoria === categoriaActual;
        const coincideTexto = tarjeta.textContent.toLowerCase().includes(texto);
        const mostrar = coincideCategoria && coincideTexto;

        tarjeta.classList.toggle('d-none', !mostrar);

        if (mostrar) {
            visibles++;
        }
    });

    if (mensajeVacio) {
        mensajeVacio.classList.toggle('d-none', visibles > 0);
    }
}

botonesFiltro.forEach(function (boton) {
    boton.addEventListener('click', function () {
        categoriaActual = boton.dataset.filtro;

        botonesFiltro.forEach(function (b) {
            b.classList.remove('activo');
            b.setAttribute('aria-pressed', 'false');
        });

        boton.classList.add('activo');
        boton.setAttribute('aria-pressed', 'true');
        aplicarFiltros();
    });
});

if (buscador) {
    buscador.addEventListener('input', aplicarFiltros);
}

// ===== 2. Aparición de elementos al hacer scroll =====
const observador = new IntersectionObserver(
    function (elementos) {
        elementos.forEach(function (elemento) {
            if (elemento.isIntersecting) {
                elemento.target.classList.add('visible');
                observador.unobserve(elemento.target);
            }
        });
    },
    { threshold: 0.15 }
);

document.querySelectorAll('.revela').forEach(function (el) {
    observador.observe(el);
});

// ===== 3. Validación del formulario de registro (unete.html) =====
const formulario = document.getElementById('formulario');

if (formulario) {
    formulario.addEventListener('submit', function (evento) {
        evento.preventDefault();
        formulario.classList.add('was-validated');

        if (formulario.checkValidity()) {
            document.getElementById('ok').classList.remove('d-none');
            formulario.reset();
            formulario.classList.remove('was-validated');
        }
    });
}

// ===== 4. Filtro de eventos (bazares.html) =====
const botonesEvento = document.querySelectorAll('[data-evento]');
const eventos = document.querySelectorAll('.evento');

botonesEvento.forEach(function (boton) {
    boton.addEventListener('click', function () {
        const tipo = boton.dataset.evento;

        botonesEvento.forEach(function (b) {
            b.classList.remove('activo');
            b.setAttribute('aria-pressed', 'false');
        });

        boton.classList.add('activo');
        boton.setAttribute('aria-pressed', 'true');

        eventos.forEach(function (evento) {
            evento.classList.toggle('d-none', tipo !== 'Todos' && evento.dataset.tipo !== tipo);
        });
    });
});

// ===== 5. Categoría preseleccionada por enlace (emprendedoras.html?categoria=Comida) =====
const categoriaURL = new URLSearchParams(window.location.search).get('categoria');

if (categoriaURL) {
    botonesFiltro.forEach(function (boton) {
        if (boton.dataset.filtro === categoriaURL) {
            boton.click();
        }
    });
}
