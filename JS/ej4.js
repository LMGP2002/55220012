function soloNumeros(e,id){
    let nota=document.getElementById(id).value;
    key=e.keycode || e.which;
    teclado=String.fromCharCode(key);
    numeros="0123456789";
    especiales=[8,37,38,46];//array
    tecladoEspecial=false;
    for(item of especiales){
        if(key==item){
            tecladoEspecial=true;
            if(teclado=='%'||teclado=='&'){
                tecladoEspecial=false;
            }
        }
    }
    if(teclado=='.'&&nota.indexOf('.')!=-1){
        return false;
    }
    if(numeros.indexOf(teclado)==-1 &&!tecladoEspecial){
        return false;
    } 
}
function calcularPromedio(){
    let nombre=document.getElementById('nombre').value.trim();
    let materia=document.getElementById('materia').value.trim();
    let nota1=parseFloat(document.getElementById('nota1').value);
    let nota2=parseFloat(document.getElementById('nota2').value);
    let nota3=parseFloat(document.getElementById('nota3').value);
    let respuesta=document.getElementById('respuesta');
    let promedio=0;
    if(nota1<=5&&nota2<=5&&nota3<=5){
        promedio=Number(((nota1+nota2+nota3)/3).toFixed(2));
        mensaje(nombre,materia,promedio,respuesta);
    }else{
        respuesta.innerText="Por favor, digite todas las notas con valores entre 0 y 5."
    }
}
function mensaje(nom,mate,prome,rta){
    if(prome<3){
        rta.innerHTML=`Lo siento, ${nom}, <span style="color:red;">su nota es ${prome}</span>, no pasaste la materia ${mate}.`;
    }else{
        rta.innerHTML=`Felicitaciones, ${nom}, <span style="color:green;">su nota es ${prome}</span>, pasaste la materia ${mate}.`;
    }
}
function habilitar(){
    let nombre=document.getElementById('nombre').value;
    let materia=document.getElementById('materia').value;
    if (nombre!='' && materia!=''){
        document.getElementById('boton').disabled=false;
    }else{
        document.getElementById('boton').disabled=true;
    }
}
function limpiar(){
    document.getElementById('nombre').value='';
    document.getElementById('materia').value='';
    document.getElementById('nota1').value='';
    document.getElementById('nota2').value='';
    document.getElementById('nota3').value='';
    document.getElementById('respuesta').innerText='';
    document.getElementById('respuesta').innerText='Por favor, rellene todos los campos para continuar.';
    habilitar();
}