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

        let num=1;
		function leftBo(servico){
            let ser= servico;
			num--;
			if(num<5)
                num=1;
            if(corte.click()){
                console.log(document.getElementById(ser).id);
                let ruta= ser.src="../img/destacados/"+ser+"/"+ser+num+".jpeg";
                console.log(ruta);
            }
        }
        function rightBo(servico){
            let ser= servico;
			num++;
			if(num>5)
                num=1;
            if(corte.click()){
                console.log(document.getElementById(ser).id);
                let ruta= ser.src="../img/destacados/"+ser+"/"+ser+num+".jpeg";
                console.log(ruta);
            }
        }

        function valor(sevicio){
            servivio = sevicio.id;
            switch(servivio ) {
                case "corte":
                    console.log(document.getElementById("corte").id);
                    leftBo("corte");
                    break;
                case "barba":
                    console.log(document.getElementById("barba").id);
                    leftBo("barba");
                    break;
                case "pigmentacion":
                    console.log(document.getElementById("pigmentacion").id);
                    leftBo("pigmentacion");
                    break;
                case "limpieza":
                    console.log(document.getElementById("limpieza").id);
                    leftBo("limpieza");
                    break;
                case "depilacion":
                    console.log(document.getElementById("depilacion").id);
                    leftBo("depilacion");
                    break;
            }          
        }