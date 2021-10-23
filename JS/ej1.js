function contarCaract(){
    let cont=document.getElementById('textarea').value.length;
    if(cont==1){
        document.getElementById('respuesta').value=`Hay ${cont} carácter`;
        
    }else{
        document.getElementById('respuesta').value=`Hay ${cont} caracteres`;
    }
}
function limpiar(){
    document.getElementById('textarea').value='';
    document.getElementById('respuesta').value='';
}