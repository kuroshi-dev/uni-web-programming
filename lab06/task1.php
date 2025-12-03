<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <title>Результат - Завдання 1</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
        }
        .result {
            background: #e8f4f8;
            padding: 15px;
            border-radius: 5px;
            margin: 20px 0;
        }
        .original {
            background: #f5f5f5;
            padding: 15px;
            border-radius: 5px;
            margin: 20px 0;
        }
    </style>
</head>
<body>
    <h1>Результат обробки</h1>
    <p><a href="task1.html">← Назад до форми</a></p>

    <?php
    if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['text'])) {
        $text = $_POST['text'];
        
        echo "<div class='original'>";
        echo "<h3>Оригінальний текст:</h3>";
        echo "<p>" . htmlspecialchars($text) . "</p>";
        echo "</div>";
        
        function mb_strrev($str) {
            $chars = preg_split('//u', $str, -1, PREG_SPLIT_NO_EMPTY);
            return implode('', array_reverse($chars));
        }
        
        $words = preg_split('/(\s+)/u', $text, -1, PREG_SPLIT_DELIM_CAPTURE);
        
        $result = '';
        foreach ($words as $word) {
            if (preg_match('/^\s+$/u', $word)) {
                $result .= $word;
            } else {
                $result .= mb_strrev($word);
            }
        }
        
        echo "<div class='result'>";
        echo "<h3>Оброблений текст:</h3>";
        echo "<p>" . htmlspecialchars($result) . "</p>";
        echo "</div>";
        
        echo "<div style='background: #fff3cd; padding: 15px; border-radius: 5px;'>";
        echo "<h4>Використані PHP функції:</h4>";
        echo "<ul>";
        echo "<li><code>preg_split()</code> - розбиття тексту на слова</li>";
        echo "<li><code>mb_strrev()</code> - розворот UTF-8 рядка</li>";
        echo "<li><code>htmlspecialchars()</code> - безпечне виведення HTML</li>";
        echo "<li><code>mb_strlen()</code> - довжина: " . mb_strlen($text, 'UTF-8') . " символів</li>";
        echo "</ul>";
        echo "</div>";
    } else {
        echo "<p style='color: red;'>Помилка: текст не був переданий</p>";
    }
    ?>
</body>
</html>