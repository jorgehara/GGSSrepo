"use strict"
document.addEventListener("DOMContentLoaded", mangekyouFansub);

function mangekyouFansub() {
    

    //-------- json de la cabeza de la tabla
    let cabezadetabla = {
        "capitulo": "Capítulo",
        "opcion1": "Opción 1",
        "opcion2": "Opción 2",
        "opción3": "Opción 3"
    }


    //---------array
    let animeporver = [cabezadetabla];


    //----------Agregar datos a la tabla
    function agregarEpisodio() {
        let episodio = document.querySelector("#capitulo").value;
        let server1 = document.querySelector("#opcion1").value;
        let server2 = document.querySelector("#opcion2").value;
        let server3 = document.querySelector("#opcion3").value;
        let formularioanimeporver = {
            "capitulo": episodio,
            "opcion1": server1,
            "opcion2": server2,
            "opcion3": server3,
        }
        
    
        animeporver.push(formularioanimeporver);
        document.querySelector("#cuerpodetabla").innerHTML +=
            "<tr><td>" + formularioanimeporver.capitulo + "</td><td>" + formularioanimeporver.opcion1 + "</td><td>" +
            formularioanimeporver.opcion2 + "</td><td>" + formularioanimeporver.opcion3 + "</td></tr>";

        //-------dejar en blanco los inputs
        document.querySelector("#capitulo").value = "";
        document.querySelector("#opcion1").value = "";
        document.querySelector("#opcion2").value = "";
        document.querySelector("#opcion3").value = "";
    }

    //----------Bborrar elementos del array y eliminar filas
    function quitarEpisodios() {
        animeporver.splice(0, animeporver.length);
        document.querySelector("#cuerpodetabla").innerHTML = animeporver;
    }
    

    //---------Agregar los 3 primeros episodios
    function autocompletarPrimeros() {
        let autocompletar = {
            "auto" : [
                {
                    "capitulo": "Capítulo 1",
                    "opcion1": "Mega",
                    "opcion2": "Mediafire",
                    "opcion3": "4shared"
                },
                {
                    "capitulo": "Capítulo 2",
                    "opcion1": "Mega",
                    "opcion2": "Mediafire",
                    "opcion3": "4shared"
                },
                {
                    "capitulo": "Capítulo 3",
                    "opcion1": "Mega",
                    "opcion2": "Mediafire",
                    "opcion3": "4shared"
                }
            ]
        }

        animeporver.push(autocompletar);
        document.querySelector("#cuerpodetabla").innerHTML +=
            "<tr><td>" + autocompletar.auto[0].capitulo + "</td><td>" + autocompletar.auto[0].opcion1 + "</td><td>" +
            autocompletar.auto[0].opcion2 + "</td><td>" + autocompletar.auto[0].opcion3 + "</td></tr>" +
            "<tr><td>" + autocompletar.auto[1].capitulo + "</td><td>" + autocompletar.auto[1].opcion1 + "</td><td>" +
            autocompletar.auto[1].opcion2 + "</td><td>" + autocompletar.auto[1].opcion3 + "</td></tr>"+
            "<tr><td>" + autocompletar.auto[2].capitulo + "</td><td>" + autocompletar.auto[2].opcion1 + "</td><td>" +
            autocompletar.auto[2].opcion2 + "</td><td>" + autocompletar.auto[2].opcion3 + "</td></tr>";
    }



    let btnAgregar = document.getElementById("enviarver");
    btnAgregar.addEventListener("click", agregarEpisodio);

    let btnQuitar = document.getElementById("borrarver");
    btnQuitar.addEventListener("click", quitarEpisodios);

    let btnAuto = document.getElementById("autocompletar");
    btnAuto.addEventListener("click", autocompletarPrimeros);

}