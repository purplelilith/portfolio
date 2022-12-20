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
  <script src="https://kit.fontawesome.com/64e2084006.js" crossorigin="anonymous"></script>
  <script src="http://code.jquery.com/jquery-latest.js"></script> 
  <script src="./js/script.js"></script>
  <script src="./js/common.js"></script>
  <title>Document</title>
</head>
<body>
  <nav class="gnb">
    <ul>
      <li>
        <a href="#">about me</a>
      </li>
      <li>
        <a href="#">publishing</a>
      </li>
      <li>
        <a href="#">design</a>
      </li>
    </ul>
  </nav>
  <!-- 프로필영역 시작 -->
  <?php include "profile.php" ?>
  <!-- 프로필영역 끝 -->
  <!-- 포트폴리오 상세 시작 -->
  <?php include "web_port.php" ?>
  <!-- 포트폴리오 상세 끝-->


</body>
</html>