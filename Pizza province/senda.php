<?php
 if($_POST)
 {
 $to_Email = "chchermobay@gmail.com";
 $subject = 'Вопрос клиента '.$_POST["polz_name"];

 if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {

 $answer_serv = json_encode(
 array(
 'text' => 'Возникла ошибка при отправке данных'
 ));

 die($answer_serv);
 }

 if(!isset($_POST["polz_name"]) || !isset($_POST["polz_tel"]) || !isset($_POST["polz_theme"]) || !isset($_POST["polz_question"]))
 {
 $answer_serv = json_encode(array('type'=>'error', 'text' => 'Заполните форму'));
 die($answer_serv);
 }

 $user_Name = filter_var($_POST["polz_name"], FILTER_SANITIZE_STRING);
 $user_Phone = filter_var($_POST["polz_tel"], FILTER_SANITIZE_STRING);
 $user_Theme = filter_var($_POST["polz_theme"], FILTER_SANITIZE_STRING);
 $user_Question = filter_var($_POST["polz_question"], FILTER_SANITIZE_STRING);
     
 if(strlen($user_Name)<3)
 {
 $answer_serv = json_encode(array('text' => 'Поле Имя слишком короткое или пустое'));
 die($answer_serv);
 }
 if(!is_numeric($user_Phone))
 {
 $answer_serv = json_encode(array('text' => 'Номер телефона может состоять только из цифр'));
 die($answer_serv);
 }
 if(strlen($user_Phone)<10)
 {
 $answer_serv = json_encode(array('text' => 'Номер телефона слишком короткий или пустой'));
 die($answer_serv);
 }
 if(strlen($user_Theme)<5)
 {
 $answer_serv = json_encode(array('text' => 'Поле Тема слишком короткое или пустое'));
 die($answer_serv);
 }
 if(strlen($user_Question)<7)
 {  
 $answer_serv = json_encode(array('text' => 'Поле Сообщение слишком короткое или пустое'));
 die($answer_serv);
 } 

 $message = "Имя: ".$user_Name.". Телефон: ".$user_Phone.". Тема: ".$user_Theme.". Сообщение: ".$user_Question;

 if(!mail($to_Email, $subject, $message, "From: pizza-province.000webhostapp.com \r\n"))
 {
 $answer_serv = json_encode(array('text' => 'Не могу отправить почту! Пожалуйста, проверьте ваши настройки PHP почты.'));
 die($answer_serv);
 }else{
 $answer_serv = json_encode(array('text' => 'Спасибо! '.$user_Name .', ваше сообщение отправлено.'));
 die($answer_serv);
 }
 }
 ?>