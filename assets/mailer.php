<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name222 = trim($_POST['name']) ? $_POST['name'] : '';
    $mail222 = trim($_POST['email']) ? $_POST['email'] : '';
    $phone222 = trim($_POST['phone']) ? $_POST['phone'] : '';
    $file222 = trim($_POST['file']) ? $_POST['file'] : '';
    $vopr222 = trim($_POST['comment']) ? $_POST['comment'] : '';

    $files = $_FILES['file'];

    // Проверяем, что файлы были успешно загружены




    $recepient = 'Info@steelregion.ru';
    // $recepient = 'potapov.roma@mail.ru';


    $pagetitle = 'Заявка с сайта Стальной Регион Промо';
    $message = '
        Пользователь оставил свои данные
        Имя: ' . $name222 . '
        Телефон: ' . $phone222 . '
        Почта: ' . $mail222 . '
        Вопрос: ' . $vopr222 . '
        Файл: ' . $file222;
    if ($files['error'] === UPLOAD_ERR_OK) {
        // Перебираем массив с информацией о файлах
        $nameFile = str_replace(' ', '_', $files['name']);
        $message .= 'https://steelregion-promo.ru/files/' . $nameFile;
        $tmp_name = $files['tmp_name'];
        // Загружаем файлы на сервер
        move_uploaded_file($tmp_name, __DIR__ . "/files/{$nameFile}");
    }
    mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
} else {
    echo 'Invalid request';
}
