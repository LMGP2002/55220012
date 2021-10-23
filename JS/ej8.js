function sinEspacios(e){
    key=e.keycode || e.which;
    teclado=String.fromCharCode(key);
    if(teclado==' '){
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