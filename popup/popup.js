document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.scanBtn').addEventListener('click', function() {
        document.getElementById('spinner').style.display = 'block';
        document.querySelector('.scanBtn').style.opacity = '0';

        // Retrieve the latest data from local storage
        chrome.storage.local.get(null, function(data) {
            console.log('Local storage data:', data);

            // Convert the data to JSON format
            const jsonData = JSON.stringify(data);

            // Send the JSON data to the server
            fetch('http://localhost/Git_AI4D/php/script.php', {
                method: 'POST',
                body: jsonData,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.text())
            .then(data => {
                console.log('Response from script.php:', data);
                document.getElementById('spinner').style.display = 'none';
                document.querySelector('.scanBtn').style.opacity = '1';
                let score = Math.random();
                circle(score); //callback result

                var scoring = "";
                //score toelichting
                
                if (score >= 0 && score < 0.2) {
                    scoring = "Zeer Onbetrouwbaar";
                } else if (score >= 0.2 && score < 0.4) {
                    scoring = "Onbetrouwbaar";
                } else if (score >= 0.4 && score < 0.6) {
                    scoring = "Neutraal / Onbekend";
                } else if (score >= 0.6 && score < 0.8) {
                    scoring = "Betrouwbaar";
                } else if (score >= 0.8 && score <= 1) {
                    scoring = "Zeer Betrouwbaar";
                }

                document.querySelector('.label').innerHTML = "Uw score is:<br>" + scoring;
                //remove the scan nu button
                document.querySelector('.scanBtn').style = "display: none";
                document.querySelector('.displayLike').style = "display: block"
            })
            .catch(error => {
                console.error('Error:', error);
                document.getElementById('spinner').style.display = 'none';
                document.querySelector('.scanBtn').style.opacity = '1';
                document.querySelector('#output').innerHTML = "Something went wrong!";
            });
        });
    });

    // Display the page text retrieved from local storage
    chrome.storage.local.get(['url', 'title', 'pageText'], function(data) {
        console.log('Stored metadata:', data);
        document.getElementById('pageText').textContent = 'Page Text: ' + (data.pageText || 'Not available');
    });
});

function circle(value) {
    const number = document.getElementById("number");
    const circleElement = document.querySelector("circle");
    let counter = 0;
    let percentage = value * 100;
    const intervalTime = 15;
    const totalLength = 565.48;

    number.innerHTML = "0.00";
    circleElement.style.strokeDashoffset = totalLength;

    setTimeout(() => {
        const interval = setInterval(() => {
            if (counter >= percentage) {
                clearInterval(interval);
            } else {
                counter += 1;
                number.innerHTML = (counter / 100).toFixed(2);
                circleElement.style.strokeDashoffset = totalLength - (counter * totalLength) / 100;
                
            }
        }, intervalTime);
    }, 500);
}

circle(0);

function setLanguage(language) {
    // Split the input string into flag and language code
    let parts = language.split(' ');
    let flag = parts[0];
    let code = parts[1];

    // Set the innerHTML of the 'languageButton' element to the flag and the language code
    document.getElementById('languageButton').innerHTML = flag + ' ' + code;
}

// Add event listeners for all the language options
document.querySelectorAll('.dropdown-content a').forEach(function(element) {
    element.onclick = function() {
        setLanguage(this.textContent);
    }
});