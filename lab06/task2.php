<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <title>Результати - Завдання 2</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 900px;
            margin: 50px auto;
            padding: 20px;
        }
        .result-section {
            background: #e8f4f8;
            padding: 15px;
            margin: 15px 0;
            border-radius: 5px;
        }
        .success {
            color: green;
            font-weight: bold;
        }
        .error {
            color: red;
            font-weight: bold;
        }
        code {
            background: #f4f4f4;
            padding: 2px 5px;
            border-radius: 3px;
        }
    </style>
</head>
<body>
    <h1>Результати обробки</h1>
    <p><a href="task2.html">← Назад до форми</a></p>

    <?php
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        
        echo "<div class='result-section'>";
        echo "<h3>2.1. Заміна формату дати (дд-мм-рррр → рррр.мм.дд)</h3>";
        if (isset($_POST['date_text'])) {
            $dateText = $_POST['date_text'];
            echo "<p><strong>Оригінал:</strong> " . htmlspecialchars($dateText) . "</p>";
            
            $result = preg_replace('/(\d{2})-(\d{2})-(\d{4})/', '$3.$2.$1', $dateText);
            
            echo "<p><strong>Результат:</strong> " . htmlspecialchars($result) . "</p>";
            echo "<p><em>Функції: preg_replace()</em></p>";
        }
        echo "</div>";
        
        echo "<div class='result-section'>";
        echo "<h3>2.2. Перевірка пароля</h3>";
        if (isset($_POST['password'])) {
            $password = $_POST['password'];
            $length = strlen($password);
            
            echo "<p>Довжина пароля: <strong>$length</strong> символів</p>";
            
            if ($length > 5 && $length < 10) {
                echo "<p class='success'>✓ Пароль підходить!</p>";
            } else {
                echo "<p class='error'>✗ Пароль не підходить. Потрібно 6-9 символів.</p>";
            }
            echo "<p><em>Функції: strlen()</em></p>";
        }
        echo "</div>";
        
        echo "<div class='result-section'>";
        echo "<h3>2.3. Заміна смайлів на картинки</h3>";
        if (isset($_POST['smiley_text'])) {
            $smileyText = $_POST['smiley_text'];
            echo "<p><strong>Оригінал:</strong> " . htmlspecialchars($smileyText) . "</p>";
            
            $smileys = [
                ':)' => '😊',
                ':(' => '😢',
                ':D' => '😄',
                ';)' => '😉',
                ':P' => '😛'
            ];
            
            $result = str_replace(array_keys($smileys), array_values($smileys), $smileyText);
            
            echo "<p><strong>Результат:</strong> " . $result . "</p>";
            echo "<p><em>Функції: str_replace(), array_keys(), array_values()</em></p>";
        }
        echo "</div>";
        
        echo "<div class='result-section'>";
        echo "<h3>2.4. Трансліт українського тексту</h3>";
        if (isset($_POST['translit_text'])) {
            $text = $_POST['translit_text'];
            echo "<p><strong>Оригінал:</strong> " . htmlspecialchars($text) . "</p>";
            
            $translit = [
                'А'=>'A','Б'=>'B','В'=>'V','Г'=>'H','Ґ'=>'G','Д'=>'D','Е'=>'E','Є'=>'Ye',
                'Ж'=>'Zh','З'=>'Z','И'=>'Y','І'=>'I','Ї'=>'Yi','Й'=>'Y','К'=>'K','Л'=>'L',
                'М'=>'M','Н'=>'N','О'=>'O','П'=>'P','Р'=>'R','С'=>'S','Т'=>'T','У'=>'U',
                'Ф'=>'F','Х'=>'Kh','Ц'=>'Ts','Ч'=>'Ch','Ш'=>'Sh','Щ'=>'Shch','Ь'=>'',
                'Ю'=>'Yu','Я'=>'Ya',
                'а'=>'a','б'=>'b','в'=>'v','г'=>'h','ґ'=>'g','д'=>'d','е'=>'e','є'=>'ye',
                'ж'=>'zh','з'=>'z','и'=>'y','і'=>'i','ї'=>'yi','й'=>'y','к'=>'k','л'=>'l',
                'м'=>'m','н'=>'n','о'=>'o','п'=>'p','р'=>'r','с'=>'s','т'=>'t','у'=>'u',
                'ф'=>'f','х'=>'kh','ц'=>'ts','ч'=>'ch','ш'=>'sh','щ'=>'shch','ь'=>'',
                'ю'=>'yu','я'=>'ya'
            ];
            
            $result = strtr($text, $translit);
            
            echo "<p><strong>Результат:</strong> " . htmlspecialchars($result) . "</p>";
            echo "<p><em>Функції: strtr()</em></p>";
        }
        echo "</div>";
        
        echo "<div class='result-section'>";
        echo "<h3>2.5. Обрізання довгого тексту</h3>";
        if (isset($_POST['trim_text']) && isset($_POST['max_length'])) {
            $text = $_POST['trim_text'];
            $maxLen = (int)$_POST['max_length'];
            
            echo "<p><strong>Оригінал:</strong> " . htmlspecialchars($text) . "</p>";
            echo "<p>Довжина: " . strlen($text) . " символів, Макс: $maxLen</p>";
            
            if (strlen($text) > $maxLen) {
                $result = substr($text, 0, $maxLen) . "...";
                echo "<p><strong>Результат:</strong> " . htmlspecialchars($result) . "</p>";
            } else {
                echo "<p><strong>Результат:</strong> Текст не обрізано (менше $maxLen символів)</p>";
            }
            echo "<p><em>Функції: strlen(), substr()</em></p>";
        }
        echo "</div>";
        
        echo "<div class='result-section'>";
        echo "<h3>2.6. Підрахунок входжень слова</h3>";
        if (isset($_POST['count_text']) && isset($_POST['search_word'])) {
            $text = $_POST['count_text'];
            $word = $_POST['search_word'];
            
            echo "<p><strong>Текст:</strong> " . htmlspecialchars($text) . "</p>";
            echo "<p><strong>Шукаємо:</strong> " . htmlspecialchars($word) . "</p>";
            
            $count = substr_count($text, $word);
            
            echo "<p class='success'>Знайдено <strong>$count</strong> входжень</p>";
            echo "<p><em>Функції: substr_count()</em></p>";
        }
        echo "</div>";
        
    } else {
        echo "<p class='error'>Помилка: дані не були передані</p>";
    }
    ?>
    
    <div style="background: #fff3cd; padding: 15px; border-radius: 5px; margin-top: 20px;">
        <h4>Використані PHP функції:</h4>
        <ul>
            <li><code>preg_replace()</code> - заміна за регулярним виразом</li>
            <li><code>strlen()</code> - довжина рядка</li>
            <li><code>str_replace()</code> - заміна підрядків</li>
            <li><code>strtr()</code> - транслітерація символів</li>
            <li><code>substr()</code> - витяг підрядка</li>
            <li><code>substr_count()</code> - підрахунок входжень</li>
        </ul>
    </div>
</body>
</html>