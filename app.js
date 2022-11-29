$(function(){
    $("#Figuras").on("change",function(){
        //En el evento "change" del select llamamos a pintarFigura con el valor de la 
        //option seleccionada como parámetro
        pintarFigura($(this).val());
    });
});

function pintarFigura(figura){  
    
    //Borramos el canvas
    clearCanvas();

    let miLienzo = document.getElementById("myCanvas");
    let lapiz = miLienzo.getContext("2d");
    
    if(figura === "Rectangulo")
    {
        lapiz.strokeRect(5,5,200,100);
    }
    else if(figura === "Circulo")
    {
        lapiz.beginPath();
        lapiz.arc(100,75,50,0,2*Math.PI);
        lapiz.stroke();
    }
    else if(figura === "Octagono")
    {
        lapiz.strokeStyle = "#000000";
        lapiz.lineWidth = 1;            
        let numberOfSides = 8,
        size = 100,
        Xcenter = 100,
        Ycenter = 100;
        lapiz.beginPath();
        lapiz.moveTo (Xcenter +  size * Math.cos(0), Ycenter +  size *  Math.sin(0));          
        for (let i = 1; i <= numberOfSides; i += 1) 
        {
            lapiz.lineTo (Xcenter + size * Math.cos(i * 2 * Math.PI / numberOfSides), Ycenter + size * Math.sin(i * 2 * Math.PI / numberOfSides));
        }
        lapiz.stroke();
    }
    ///... El resto de figuras (en internet puedes encontrar cómo hacer cada una. Las 3D son bastante, bastante más complejas (a no ser que recurras a librerías externas como d3.js)
}

function clearCanvas(){
    let miLienzo = document.getElementById("myCanvas");
    let lapiz = miLienzo.getContext("2d");
    
    lapiz.clearRect(0, 0, miLienzo.width, miLienzo.height);
    lapiz.beginPath();
}