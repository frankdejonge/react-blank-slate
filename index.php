<?php
// Create a stream
$opts = [
    "http" => [
        "method" => "GET",
        "header" => "x-application-id: bf87f80a-296b-4286-937e-37eac0493234"
    ]
];

$context = stream_context_create($opts);

// Open the file using the HTTP headers set above
$json = file_get_contents('http://todos.frankdejonge.nl:8000/todo', false, $context);
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="/normalize.css">
    <title>Document</title>
</head>
<body style="padding: 0.25rem 1rem;">
    <div id="app"></div>
    <script language="javascript">window.INITIAL_STATE = <?=$json?></script>
    <script language="javascript" src="/dist/start.js"></script>
</body>
</html>