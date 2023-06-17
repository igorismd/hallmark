<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
//require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
// $name = $_POST['name'];
$name ='julian';
$phone = $_POST['phone'];
$comment = $_POST['message'];
$policy = $_POST['email'];
// $lid = $_POST['lid'];

$ip = @$_SERVER['REMOTE_ADDR'];
//$url = @$_SERVER['HTTP_REFERER'];
$time = date("Y-m-d H:i:s");

$get = array(
	'name'  => $name,
	'email' => $phone
);





$albo_url='https://h.albato.com/wh/38/1lfq23b/x-u5vE4bIYtJdx9vAdRI-TxvVuJX7BnHIIUYGbw3lOQ/';
$get_param=htmlspecialchars('?name='.$name.'&phone='.$phone.'&site=bf-dubai.com');
file_get_contents($albo_url.$get_param); 

$arr = array(
  'Имя: '     => $name,
  'Телефон: ' => $phone,
  ''          => $comment,
  'Форма: '   => $lid,
  'IP-адрес:' => $ip
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

// Формирование самого письма
$title = " Hallmark";
$body = "
Получено сообщение с сайта:<br><br>
Имя: $name<br>
Телефон: $phone<br>
$comment<br>
Политика: $policy<br><br>

Форма: $lid<br>
IP-адрес посетителя: $ip<br>
Время заказа: $time";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer(true);
try {
    /*
	$mail->isSMTP();
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = ''; // SMTP сервера вашей почты
    $mail->Username   = ''; // Логин на почте
    $mail->Password   = ''; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
	*/

    $mail->setFrom('order@patriarshie-prudi.ru', 'down-town-dubai.com'); // Адрес самой почты и имя отправителя


    // Получатель письма
    $mail->addAddress('888julian888@gmail.com');  // Ещё один, если нужен


	// Прикрепление файлов к письму
	/*
	if (!empty($file['name'][0])) {
	for ($ct = 0; $ct < count($file['tmp_name']); $ct++) {
		$uploadfile = tempnam(sys_get_temp_dir(), sha1($file['name'][$ct]));
		$filename = $file['name'][$ct];
		if (move_uploaded_file($file['tmp_name'][$ct], $uploadfile)) {
			$mail->addAttachment($uploadfile, $filename);
			$rfile[] = "Файл $filename прикреплён";
		} else {
			$rfile[] = "Не удалось прикрепить файл $filename";
		}
	}
	}
	*/

// Письмо
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;



// Результат

if ($mail->send()) {$result = "success";}

else {$result = "error";}

} catch (Exception $e) {
   $result = "error";
   $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
// echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);

// echo $result;

