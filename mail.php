<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Flexy Group - Ваша заявка отправлена"</title>
</head>
<body>
  <?php
  //проверяем, существуют ли переменные в массиве POST
  if(!isset($_POST['email']) and !isset($_POST['message'])){
  ?> <form action="mail.php" method="post" class="form-wrapper" id="form" name="form">
  <h2 class="idea__form-title" id="l-28">
     Можно связаться с нами или <br> оставить заявку здесь
  </h2>
  <input name="email" type="text" class="form-idea" placeholder="Ваша почта"
     id="l-29" required />
  <textarea name="message" placeholder="Расскажите о вашей идеи" class="form-idea form-idea_text"
     id="l-30"></textarea>
  <input type="checkbox" class="checkbox-subscribe" checked required>
  <label for="checkbox" class="label">
     Я согласен(а) на обработку моих персональных данных.
  </label>
  <button type="submit" class="form-btn" value="Отправить" data-submit>Отправить</button>
</form> <?php
  } else {
  //показываем форму
  $email = $_POST['email'];
  $message = $_POST['message'];
  $email = htmlspecialchars($email);
  $message = htmlspecialchars($message);
  $email = urldecode($email);
  $message = urldecode($message);
  $email = trim($email);
  $message = trim($message);
  if (mail("flexygroup@gmail.com", "Заявка с сайта Flesy Group", "E-mail: ".$email.".\r\nСообщение: ".$message."\r\nОтправлено для:flexygroup@gmail.com \r\n", "")){
  ?>
  <div style="font-size: 30px; text-align: center; margin-top: 20px;">
    Спасибо. Ваше сообщение отправлено.
  </div>
  <?php
  } else {
  ?>
  <div style="font-size: 30px; text-align: center; margin-top: 20px;">
    При отправки произошла ошибка.
  </div>
  <?php
  }
  }

  ?>

  <meta name="generator">

<script type="text/javascript">

setTimeout('location.replace("/index.html")', 3000);

/*Изменить текущий адрес страницы через 3 секунды (3000 миллисекунд)*/

</script> 

  </body>

</html>

