<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <base href="/">
  <title>Document</title>
  <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
</head>
<body>
  <!-- 1. Display the application -->
  <div class="container">
    <app-main>loading...</app-main>
  </div>

  <!-- 2. Load libraries -->
  <script src="node_modules/jquery/dist/jquery.min.js"></script>
  <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>

  <script src="node_modules/angular2/bundles/angular2-polyfills.js"></script>
  <script src="node_modules/rxjs/bundles/Rx.umd.js"></script>
  <script src="node_modules/angular2/bundles/angular2-all.umd.js"></script>

  <!-- 3. Load our 'modules' -->
  <script src="scripts/main.js"></script>
</body>
</html>
