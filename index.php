<!DOCTYPE html>
<html lang="ko">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="./css/style.css">
  <link rel="stylesheet" href="./css/reset.css">
  <link rel="stylesheet" href="./css/profile.css">
  <link rel="stylesheet" href="./css/gnb.css">
  <link rel="stylesheet" href="./css/web_port.css">
  <link rel="stylesheet" href="./css/home.css">
  <link rel="stylesheet" href="./css/contact.css">
  <link rel="stylesheet" href="./css/footer.css">
  <script src="https://kit.fontawesome.com/64e2084006.js" crossorigin="anonymous"></script>
  <script src="http://code.jquery.com/jquery-latest.js"></script>
  <script src="./js/script.js"></script>
  <script src="./js/common.js"></script>
  <title>Document</title>
</head>

<body>
  <!-- gnb 시작 -->
  <?php include "gnb.php" ?>
  <!-- gnb 끝-->

  <div class="contact_section">
    <h2>contact</h2>
    <ul>
      <li>
        <a href="#">
          <i class="fa-solid fa-phone"></i>
          <p>010 - 6388 - 1150</p>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="fa-solid fa-envelope"></i>
          <p>acidlime1987@naver.com</p>
        </a>
      </li>
    </ul>
  </div> <!-- contact_section -->
  <!-- 첫화면 시작 -->
  <?php include "home.php" ?>
  <!-- 첫화면 끝-->
  <!-- 프로필영역 시작 -->
  <?php include "profile.php" ?>
  <!-- 프로필영역 끝 -->
  <!-- 포트폴리오 상세 시작 -->
  <?php include "web_port.php" ?>
  <!-- 포트폴리오 상세 끝-->
  <?php include "footer.php" ?>
</body>

</html>