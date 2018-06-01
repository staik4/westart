<?php
  // $email = $_POST['emailNewIdea'];
  // $message = $_POST['textNewIdea'];
  // $volume = $_POST['volumeOfProduct'];
  $email = $_POST['email'];
  $fio = $_POST['fio'];
  // $nameOrg = $_POST['nameOrg'];
  $tel = $_POST['tel'];
  $file = $_FILES;
  // $kindOfProduct = $_POST['kindOfProduct'];
  // var_dump($files);

  // $to = "staik4@yandex.ru";
  // $subject = "От посетителя сайта";
  // $text =  "Написал(а): $fio\n Контактный email - $email\n\n Количество - $volume\n Телефон - $tel \n Наименование организации - $nameOrg \n";

  // $header.= "Content-type: text/html; charset=utf-8\r\n";
  // $header .= "MIME-Version: 1.0\r\n";
  // $sending = mail($to, $subject, $text, $headers);

  // if($sending) echo " Ваше письмо отправлено!!";
  $thm = "Заявка";

  $msg = "Написал(а): $fio\n<br> Контактный email - $email\n<br> Телефон - $tel\n";

  $mail_to = "staik4@yandex.ru";

if (!empty($_FILES['file']['tmp_name']))

{

// Закачиваем файл

  $path = $_FILES['file']['name'];

  if (copy($_FILES['file']['tmp_name'], $path)) $picture = $path;

}


if(empty($picture)) mail($mail_to, $thm, $msg, $picture);

else send_mail($mail_to, $thm, $msg, $picture);

function send_mail($to, $thm, $html, $path)

{

$fp = fopen($path,"r");

if (!$fp)

{

  print "Файл $path не может быть прочитан";

  exit();

}

$file = fread($fp, filesize($path));

fclose($fp);



$boundary = "--".md5(uniqid(time())); // генерируем разделитель

$headers .= "MIME-Version: 1.0\n";

$headers .="Content-Type: multipart/mixed; boundary=\"$boundary\"\n";

$multipart .= "--$boundary\n";

$kod = 'koi8-r'; // или $kod = 'windows-1251';

$multipart .= "Content-Type: text/html; charset=utf-8\n";

$multipart .= "Content-Transfer-Encoding: Quot-Printed\n\n";

$multipart .= "$html\n\n";



$message_part = "--$boundary\n";

$message_part .= "Content-Type: application/octet-stream\n";

$message_part .= "Content-Transfer-Encoding: base64\n";

$message_part .= "Content-Disposition: attachment; filename = \"".$path."\"\n\n";

$message_part .= chunk_split(base64_encode($file))."\n";

$multipart .= $message_part."--$boundary--\n";



if(!mail($to, $thm, $multipart, $headers))
{

  echo "К сожалению, письмо не отправлено";

  exit();

}

}

?>
