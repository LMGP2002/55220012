
let respuesta=document.getElementById('respuesta');

function habilitar(){
    let num1=parseFloat(document.getElementById('numero1').value);
    let num2=parseFloat(document.getElementById('numero2').value);
    if (!isNaN(num1) && !isNaN(num2)){
        document.getElementById('boton').disabled=false;
    }else{
        document.getElementById('boton').disabled=true;
    }
}

function limpiar(){
    document.getElementById('numero1').value='';
    document.getElementById('numero2').value='';
    respuesta.value='';
    respuesta.value='Por favor, digite números válidos positivos para continuar.';
    habilitar();
}
function soloNumeros(e,id){
    let num2=document.getElementById(id).value;
    key=e.keycode || e.which;
    teclado=String.fromCharCode(key);
    numeros="0123456789";
    especiales=[8,37,38,46,45];//array
    tecladoEspecial=false;
    for(item of especiales){
        if((key==item)&&(teclado!='%'&&teclado!='&')){
            tecladoEspecial=true;
        }
    }
    if(teclado=='-' && num2.indexOf('-')!=-1){
        return false;
    }else if(teclado=='.' && num2.indexOf('.')!=-1){
        return false;
    }
    if(numeros.indexOf(teclado)==-1 &&!tecladoEspecial){
        return false;
    } 
}

function divisibles(){
    let num1=parseFloat(document.getElementById('numero1').value);
    let num2=parseFloat(document.getElementById('numero2').value);
    if(num1%1==0 && num2%1==0){
        if(num1<0 && num2<0){
            respuesta.value=`Los números ${num1} y ${num2} no son positivos.`;
        }else if(num2<0){
            respuesta.value=`El número ${num2} no es positivo.`;
        }else if(num1<0){
            respuesta.value=`El número ${num1} no es positivo.`;
        }else if(num1%num2==0){
            respuesta.value=`El número ${num1} es divisible entre el número ${num2}.`;
        }else{
            respuesta.value=`El número ${num1} no es divisible entre el número ${num2}.`;
        }
    }else if(num1%1==0 && num2%1!=0){
        if(num1<0 && num2<0){
            respuesta.value=`El número ${num1} no es positivo y el ${num2} no es entero positivo.`;
        }else if(num2<0){
            respuesta.value=`El número ${num2} no es entero positivo.`;
        }else if(num1<0){
            respuesta.value=`El número ${num1} no es positivo y el ${num2} no es entero.`;
        }else{
            respuesta.value=`El número ${num2} no es entero.`;
        }   
    }else if(num1%1!=0 && num2%1==0){
        if(num1<0 && num2<0){
            respuesta.value=`El número ${num1} no es entero positivo y el ${num2} no es positivo.`;
        }else if(num2<0){
            respuesta.value=`El número ${num1} no es entero y el ${num2} no es positivo.`;
        }else if(num1<0){
            respuesta.value=`El número ${num1} no es entero positivo.`;
        }else{
            respuesta.value=`El número ${num1} no es entero.`;
        }   
    }else{
        if(num1<0 && num2<0){
            respuesta.value=`Los números ${num1} y ${num2} no son enteros positivos.`;
        }else if(num2<0){
            respuesta.value=`El número ${num1} no es entero y el ${num2} no es entero positivo.`;
        }else if(num1<0){
            respuesta.value=`El número ${num1} no es entero positivo y el ${num2} no es entero.`;
        }else{
            respuesta.value=`Los números ${num1} y ${num2} no son enteros.`;
        }   
    }
}