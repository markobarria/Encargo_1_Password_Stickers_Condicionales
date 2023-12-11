function Pedido() {
    foto1 = parseInt(document.getElementById('foto1').value);
    foto2 = parseInt(document.getElementById('foto2').value);
    foto3 = parseInt(document.getElementById('foto3').value);

    sumaTotal = foto1 + foto2 + foto3;

    if (sumaTotal <= 10) {
        var resultado = document.querySelector('.respuesta');
        resultado.innerHTML = 'Lleva un total de ' + sumaTotal + ' stickers.';
    
    } else {
        var resultado = document.querySelector('.respuesta');
        resultado.innerHTML = "Llevas demaciados stickers";
        
    }
};
