function soloNumeros(e){
    key=e.keycode || e.which;
    teclado=String.fromCharCode(key);
    numeros="0123456789";
    especiales=[8,37,38,44,46];//array
    tecladoEspecial=false;
    for(item of especiales){
        if(key==item){
            if(teclado!='%'&&teclado!='&'){
                tecladoEspecial=true;
            }
        }
    }
    if(numeros.indexOf(teclado)==-1 &&!tecladoEspecial){
        return false;
    } 
}
function limpiar(){
    document.getElementById('respuesta').innerText='';
    document.getElementById('numeros').value='';
}
const vaciar=respuesta=>respuesta.innerText='';
function clasificar(){
    let respuesta=document.getElementById('respuesta');
    vaciar(respuesta);
    let entrada=document.getElementById('numeros').value;
    let numeros=entrada.split(',');
    numeros=numeros.filter(element=>element!='')
    numeros.forEach(element => {
        if(element%1==0){
            if(element%2==0){
                respuesta.innerHTML+=`<p>${element} <span style="color:blue;">es par</span></p>`;
            }else respuesta.innerHTML+=`<p>${element} <span style="color:green;">es impar</span></p>`;
        }else respuesta.innerHTML+=`<p>${element} <span style="color:red;">no es entero</span></p>`;      
    });
}