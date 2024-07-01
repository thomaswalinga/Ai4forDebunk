<?php

require "script.php";

function testisValidWebsiteInfo(){
    $url = "https://www.google.com";
    $title = "Example Title";
    $webText = "Example Webtext";

    $errors = isValidWebsiteInfo($url, $title, $webText);

    if(!empty($errors)){
        echo "isValidWebsiteInfo test failed". PHP_EOL;
    } else {
        echo "isValidWebsiteInfo test succeeded". PHP_EOL;
    }
}

function testIsValidUrl(){
    $invalid_url = "https:/www.invalidurl.nl";
    $title = "Example Title";
    $webText = "Example webtext";

    $errors = isValidWebsiteInfo($invalid_url, $title, $webText);

    if(!empty($errors)){
        echo "inValidUrl indeed invalid". PHP_EOL;
    } else {
        echo "inValidUrl is valid, test failed". PHP_EOL;
    }
}

function testIsValidTitle(){
    $url = "https://www.google.com";
    $invalid_title = "Example Title><><><!";
    $webText = "Example webtext";

    $errors = isValidWebsiteInfo($url, $invalid_title, $webText);

    if(!empty($errors)){
        echo "invalid title indeed invalid". PHP_EOL;
    } else {
        echo "invalid title is valid, test failed". PHP_EOL;
    }
}

function testIsValidWebText(){
    $url = "https://www.google.com";
    $title = "Example Title!";
    $webText = "Example  invalid webtext <><><!";

    $errors = isValidWebsiteInfo($url, $title, $webText);

    if(!empty($errors)){
        echo "invalid webtext indeed invalid". PHP_EOL;
    } else {
        echo "invalid webtext is valid, test failed". PHP_EOL;
    }
}

testisValidWebsiteInfo();
testIsValidUrl();
testIsValidTitle();
testIsValidWebText();