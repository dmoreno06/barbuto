//funcion de boton hacia arriba
jQuery(document).ready(function () {

    var btn = $('#toTop');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });
    condición ? expr1 : expr2 
});
       
        function valor(sevicio){
            servivio = sevicio.id;
            switch(servivio ) {
                case "corte":
                    adelante(servivio)
                    atras(servivio)
                    break;
                case "barba":
                    adelante(servivio)
                    atras(servivio)
                    break;
                case "limpieza":
                    adelante(servivio)
                    atras(servivio)
                    break;
                case "pigmentacion":
                    adelante(servivio)
                    atras(servivio)
                    break;
                case "depilacion":
                    adelante(servivio)
                    atras(servivio)
                    break;
            } 
            return servivio;         
        }
        let num=1;
        function adelante(){
            servivio=this.servivio;
            num++;
            if(num>10)
                num=1;
            var foto = document.getElementById("foto");
            foto.src="../img/destacados/"+servivio+"/"+servivio+num+".jpeg";
        }
        function atras(){
            servivio=this.servivio;
            num--;
            if(num<1)
                num=10;
            var foto = document.getElementById("foto");
            foto.src="../img/destacados/"+servivio+"/"+servivio+num+".jpeg";
            
        }

var figure = $(".video").hover( hoverVideo, hideVideo );

function hoverVideo(e) {  
   $('video', this).get(0).play();
}

function hideVideo(e) {
   $('video', this).get(0).pause();
}