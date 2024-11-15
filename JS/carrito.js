// Precios de los productos
const precios = {
    fresasChocolate: 12000,
    heladoFresa: 5000,
    heladoChocolate: 5000,
    malteada: 10000,
    paletas: 2200,
    torta: 70000,
};

// Carrito y total
let carrito = [];
let total = 0;

function agregarAlCarrito() {
    // Obtener cantidades de cada empanada
    const cantidadfresasChocolate = parseInt(document.getElementById("fresasChocolate").value);
    const cantidadheladoFresa = parseInt(document.getElementById("heladoFresa").value);
    const cantidadheladoChocolate = parseInt(document.getElementById("heladoChocolate").value);
    const cantidadmalteada = parseInt(document.getElementById("malteada").value);
    const cantidadpaletas = parseInt(document.getElementById("paletas").value);
    const cantidadtorta = parseInt(document.getElementById("torta").value);

    // Vaciar el carrito actual
    carrito = [];
    total = 0;

    // Agregar empanadas seleccionadas al carrito
    if (cantidadfresasChocolate > 0) {
        carrito.push({ nombre: "fresasChocolate", cantidad: cantidadfresasChocolate, precio: precios.fresasChocolate });
        total += cantidadfresasChocolate * precios.fresasChocolate;
    }
    if (cantidadheladoFresa > 0) {
        carrito.push({ nombre: "heladoFresa", cantidad: cantidadheladoFresa, precio: precios.heladoFresa });
        total += cantidadheladoFresa * precios.heladoFresa;
    }
    if (cantidadheladoChocolate > 0) {
        carrito.push({ nombre: "heladoChocolate", cantidad: cantidadheladoChocolate, precio: precios.heladoChocolate });
        total += cantidadheladoChocolate * precios.heladoChocolate;
    }
    if (cantidadmalteada > 0) {
        carrito.push({ nombre: "malteada", cantidad: cantidadmalteada, precio: precios.malteada });
        total += cantidadmalteada * precios.malteada;
    }
    if (cantidadpaletas > 0) {
        carrito.push({ nombre: "paletas", cantidad: cantidadpaletas, precio: precios.paletas });
        total += cantidadpaletas * precios.paletas;
    }
    if (cantidadtorta > 0) {
        carrito.push({ nombre: "torta", cantidad: cantidadtorta, precio: precios.torta });
        total += cantidadtorta * precios.torta;
    }

    // Actualizar el carrito y el total
    actualizarCarrito();
}

function actualizarCarrito() {
    const carritoElement = document.getElementById("carrito");
    carritoElement.innerHTML = "";

    carrito.forEach(item => {
        const li = document.createElement("li");
        li.classList.add("list-group-item");
        li.textContent = `${item.cantidad} x ${item.nombre} - $${(item.cantidad * item.precio)}`;
        carritoElement.appendChild(li);
    });

    document.getElementById("total").textContent = total;
}

function solicitarPedido() {
    if (carrito.length === 0) {
        alert("El carrito está vacío. Por favor, agrega productos.");
        return;
    }

    let pedido = "Tu pedido:\n";
    carrito.forEach(item => {
        pedido += `${item.cantidad} x ${item.nombre} - $${(item.cantidad * item.precio)}\n`;
    });
    pedido += `Total: $${total}`;
    alert(pedido);
}

function limpiarCarrito() {
    document.getElementById("fresasChocolate").value = 0;
    document.getElementById("heladoFresa").value = 0;
    document.getElementById("heladoChocolate").value = 0;
    document.getElementById("malteada").value = 0;
    document.getElementById("paletas").value = 0;
    document.getElementById("torta").value = 0;

    carrito = [];
    total = 0;
    actualizarCarrito();
}