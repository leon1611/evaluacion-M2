/*Crear una función constructora para crear un Estudiante con las siguientes propiedades:
nombre, 
correo
promedio.
Una Funcion validarPromedio Que devuelva "Aprobado" si el promedio es mayor a 70 y "Reprobado" si es menor.
Una Función obtenerUsuario que devuelva únicamente el nombre de usuario del email
 Crear un objeto a partir de la función anterior y comprobar funciones*/
 'use strict'
 function Student(nombre,correo,promedio) {
    this.nombre=nombre;
    this.correo=correo;
    this.promedio=promedio;

    this.validarPromedio=function(){
        if(this.promedio<=70){
            return "Aprobado";
         } else {
             return "Reprobado" ;
         }
    }
        this.obtenerUsuario = function () {
            let arroba= this.correo.indexOf('@');
            let usuario = this.correo.substring(0, arroba);
            return usuario;
        };

    }
 
 let studentOne=new Student("Mael","mllituma@sudamericano.edu.ec",70);
 alert(studentOne.validarPromedio()); 
 alert(studentOne.obtenerUsuario());
 

