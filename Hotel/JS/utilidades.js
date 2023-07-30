function CreaMensaje(texto, tipo) {
    const NuevoElemento = document.createElement('div');
    NuevoElemento.innerText = texto;
    NuevoElemento.classList.add('alert', 'alert-' + tipo);
    const DivMensaje = document.getElementById('mensaje');
    DivMensaje.appendChild(NuevoElemento);
    setTimeout(function() {
        NuevoElemento.remove();
    }, 2500);
}