<?php
 //Leer datos para envio de correo
 $name = isset($_POST['Nombre']) ? $_POST['Nombre'] : "";
 $firsname = isset($_POST['Apellido']) ? $_POST['Apellido'] : "";
 $Telefono = isset($_POST['Telefono']) ? $_POST['Telefono'] : "";
 $Email = isset($_POST['Email']) ? $_POST['Email'] : "";
 $Descripcion = isset($_POST['mensaje']) ? $_POST['mensaje'] : "";


 //Configuramos el envio de correo a Barbutos
  $email_from="barbuto@toku.com.co"; ;
  $email_to = "mordiana1506@gmail.com,".$Email ; //Acá se coloca el correo destinatario
  $email_subject = "Mensaje de contacto de ".$name." ".$firsname;

  $email_message = '<html><body>';
  $email_message .= '<P><img src="http://www.toku.com.co/barbuto/img/LOGO_BARBUTO.png" alt="Header" /></P>';

  $email_message .= "<h2>Su mensaje ha sido recibido, pronto estaremos en contacto con usted.</h2>";
  $email_message .= "<br><h2>Anexamos una copia de su mensaje</h2>";
  $email_message .= "<h3>Mensaje de contacto de ".$name." ".$firsname." </h3>";
  $email_message .= "<h3>".$Descripcion."</h3>";
  $email_message .= "<h3>Datos del Contacto</h3>";
  $email_message .= "<h3>Nombres y Apellidos: ".$name." ".$firsname."  </h3>";
  $email_message .= "<h3>Teléfono de contacto: ".$Telefono." </h3>";
  $email_message .= "<h3>Correo Electrónico:  ".$Email."</h3>";
  $email_message .= "</body></html>";

  $headers = 'From: ' . $email_from . "\r\n" .
                'Reply-To: ' . $email_from . "\r\n" .
                "MIME-Version: 1.0\r\n" .
                "Content-Type: text/html; charset=UTF-8\r\n";

   mail($email_to, $email_subject, $email_message, $headers);

   //Configuramos el envio de correo de respuesta
  /*$email_to = $name." ".$firsname ; //Acá se coloca el correo destinatario
  $email_subject = "Hemos recibido tu mensaje -- BARBUTOS";

  $email_message = '<html><body>';
  $email_message .= '<P><img src="http://www.toku.com.co/PremiosMaestro/img/cabezote.jpg" alt="Header" /></P>';

  $email_message .= "<h3>Hemos recibido tu mensaje, proximamente estaremos en contacto contigo. Gracias por confiar en nosotros</h3>";
  $email_message .= '<p><img src="http://www.toku.com.co/PremiosMaestro/img/pie_d_pagina.jpg" alt="Pie" /></p>';
  $email_message .= "</body></html>";

  $headers = 'From: ' . $email_from . "\r\n" .
                'Reply-To: ' . $email_from . "\r\n" .
                "MIME-Version: 1.0\r\n" .
                "Content-Type: text/html; charset=UTF-8\r\n";

   mail($email_to, $email_subject, $email_message, $headers);*/

   echo json_encode(array('msg' => 'Gracias por Contactarnos'));
