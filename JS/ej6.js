
function buscar(){
    let parrafo=document.getElementById('parrafo').value;
    let encontrar=document.getElementById('encontrar').value;
    console.log(encontrar);
    let reemplazar=parrafo.replace(new RegExp ( encontrar , 'g'), encontrar.fontcolor('red'));
    document.getElementById('respuesta').innerHTML=reemplazar;
}
function limpiar(){
    document.getElementById('parrafo').value='';
    document.getElementById('encontrar').value='';
    document.getElementById('respuesta').innerText='';
    habilitar();
}
function habilitar(){
    let encontrar=document.getElementById('encontrar').value;
    if (encontrar!=''){
        document.getElementById('boton').disabled=false;
    }else{
        document.getElementById('boton').disabled=true;
    }
}
