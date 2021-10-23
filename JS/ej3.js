function soloNumeros(e){
    key=e.keycode || e.which;
    teclado=String.fromCharCode(key);
    numeros="0123456789";
    especiales=[8,37,38,46];//array
    tecladoEspecial=false;
    for(item of especiales){
        if(key==item){
            if(teclado!='%'&&teclado!='&'&&teclado!='.'){
                tecladoEspecial=true;
            }
        }
    }
    if(numeros.indexOf(teclado)==-1 &&!tecladoEspecial){
        return false;
    } 
}
function calcularEdad(){
    let nombre=document.getElementById('nombre').value;
    let edad=parseInt(document.getElementById('edad').value);
    if(edad==0){
        document.getElementById('respuesta').value='No es una edad válida.'
    }else if(edad>=18){
        document.getElementById('respuesta').value=`Hola, ${nombre.trim()}, eres mayor de edad.`
    }else{
        document.getElementById('respuesta').value=`Hola, ${nombre.trim()}, no eres mayor de edad.`
    }
}

function habilitar(){
    let nombre=(document.getElementById('nombre').value).trim();
    let edad=document.getElementById('edad').value;
    if (nombre!='' && edad!=''){
        document.getElementById('boton').disabled=false;
    }else{
        document.getElementById('boton').disabled=true;
    }
}

function limpiar(){
    document.getElementById('nombre').value='';
    document.getElementById('edad').value='';
    document.getElementById('respuesta').value='';
    document.getElementById('respuesta').value='Por favor, rellene todos los campos para continuar.';
    habilitar();
}