<?php

require "config.php";


//validate website info with regular expression
function isValidWebsiteInfo($url, $title, $webText) {
    $errors = [];

    if(!filter_var($url, FILTER_VALIDATE_URL)){
        array_push($errors, "Invalid Url");
    }
    if(!preg_match("/^[\s\S]*$/", $title)){
        array_push($errors, "Invalid title");
    }
    if(!preg_match("/^[\s\S]*$/", $webText)){
        array_push($errors, "Invalid webtext");
    }
    return $errors;

}

function processWebsiteInfo($dataArray) {
    global $conn;

    //bind parameters
    $url = htmlspecialchars($dataArray['url'], ENT_QUOTES, 'UTF-8');
    $title = htmlspecialchars($dataArray['title'], ENT_QUOTES, 'UTF-8');
    $webText = htmlspecialchars($dataArray['pageText'], ENT_QUOTES, 'UTF-8');

    //variable holding errors
    $errors = isValidWebsiteInfo($url, $title, $webText);

    //checks if $error is empty before preparing stmt
    if (empty($errors)) {
        try {
            // Prepare and execute the SQL statement to insert data into the websitedata table
            $stmt = $conn->prepare("INSERT INTO websitedata (url, title, webText) VALUES (:url, :title, :webText)");
            $stmt->bindParam(':url', $url);
            $stmt->bindParam(':title', $title);
            $stmt->bindParam(':webText', $webText);

            // Execute the prepared statement
            $stmt->execute();

            // Send a response back to the user
            echo "Data inserted successfully";
        } catch (PDOException $e) {
            // Handle SQL execution errors
            echo 'Error: ' . $e->getMessage();
        }
    } else {
        // Handle validation errors
        foreach ($errors as $error) {
            echo $error . "<br>";
        }
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the raw POST data
    $data = file_get_contents("php://input");

    // Decode the JSON data to PHP associative array
    $dataArray = json_decode($data, true);

    processWebsiteInfo($dataArray);
}