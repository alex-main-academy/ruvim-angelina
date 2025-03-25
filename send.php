<?php
session_start();

// Проверяем, была ли уже отправлена заявка
if (isset($_SESSION['last_submission']) && time() - $_SESSION['last_submission'] < 5) {
    // Если заявка отправлена менее чем 5 секунд назад, отклоняем повторную отправку
    echo 'Заявка уже была отправлена. Пожалуйста, подождите немного.';
    exit();
}

// Сохраняем метку времени последней отправки
$_SESSION['last_submission'] = time();

// Данные из формы
$name = $_POST['name'];
$count = $_POST['count'];
$presence = isset($_POST['presence']) ? $_POST['presence'] : ''; // Получаем выбранное значение радио-кнопки

// URL вашего Google Apps Script
$scriptUrl = 'https://script.google.com/macros/s/AKfycbyVK6KdxZqT0Dy_Gp4cpBzP7EcTzALrSngvU1TBf02LAEnzpMFCUcP7iCCudveLJw/exec';

// Подготовка данных для отправки
$data = array(
    'name' => $name,
    'count' => $count,
    'presence' => $presence,
    'date' => date('Y-m-d H:i:s')
);

// Инициализация cURL для отправки данных
$options = array(
    'http' => array(
        'method'  => 'POST',
        'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
        'content' => http_build_query($data)
    )
);
$context  = stream_context_create($options);
$response = file_get_contents($scriptUrl, false, $context);

// Проверка ответа от Google Apps Script
$responseData = json_decode($response, true);

if ($responseData['result'] == 'success') {
    header('Location: thanks.html');
    exit();
} else {
    echo 'Произошла ошибка: ' . $responseData['error'];
}
?>