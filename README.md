### Projecttitel
- AI4Debunk Chrome Extensie

### Beschrijving
- Dit is een Chrome Extensie die pagina's kan scannen en kan aangeven of de tekst op de pagina nepnieuws is of niet. Dit gebeurt aan de hand van een waarheidsgetal tussen 0.00 en 1.00.
- De Extensie bevat een 'Scan nu' knop, waarna de score van de website wordt getoond. Je kunt talen selecteren waarbij de tekst van de Extensie verandert op basis van de gemaakte keuze.

### Installatie

#### Vereisten
- Een moderne webbrowser die extensies ondersteunt op Chrome
- De volgende bestanden moeten aanwezig zijn in de projectdirectory:
    - `popup/popup.html`
    - `popup/popup.js`
    - `popup/styles.css`
    - `popup/translations.js`
    - `img/icon.png`
    - `background.js`
    - `content.js`
    - `manifest.json`
    - `translations.js`
    - `script.php`

#### Stappen

1. **Projectdirectorystructuur**:
   Zorg ervoor dat je projectdirectory er als volgt uitziet:

   ```plaintext
   Ai4D_Chromeextension/
   ├── background.js
   ├── content.js
   ├── img/
   │   └── icon.png
   ├── manifest.json
   ├── popup/
   │    ├── popup.html
   │    ├── popup.js
   │    ├── styles.css
   │    ├── popup.html
        └── translations.js
   ```

3. **Database installeren en project configureren**

Download en installeer Xampp.  
Start Xampp en zorg ervoor dat de Apache en MySQL services draaien.  
Open de Xampp control panel en ga naar de "MySQL Admin" om de database te beheren.  
Maak een nieuwe database aan voor het project.

Plaats je projectbestanden in de `htdocs` map van je Xampp installatie. Dit is meestal te vinden in de Xampp installatiedirectory, bijvoorbeeld `C:\xampp\htdocs\`.

importeer de `ai4debunk.sql` in je nieuw gemaakte database.

Update de database configuratie in je projectbestanden met de juiste gegevens (database naam, gebruikersnaam, wachtwoord, etc.). De configuratie vindt plaats in een bestand genaamd `config.php` in je projectdirectory. Zorg ervoor dat de database host is ingesteld op `localhost`, de database naam overeenkomt met de naam van de database die je hebt aangemaakt, en de gebruikersnaam en het wachtwoord overeenkomen met je MySQL inloggegevens (standaard is de gebruikersnaam `root` en het wachtwoord is leeg).
verander tot slot de link naar de database in de fetch request in `popup.js`.

3. **Extensie laden in de browser**:
    - Open je browser (bijvoorbeeld Google Chrome).
    - Ga naar `chrome://extensions/`.
    - Zet de ontwikkelaarsmodus aan door rechtsboven de schakelaar aan te zetten.
    - Klik op "Load unpacked" (Pakket zonder uitpakken laden).
    - Navigeer naar je projectdirectory `ai-checker/` en selecteer deze.

4. **Extensie testen**:
    - Nadat de extensie is geladen, zou je het icoon van de extensie moeten zien in de browserwerkbalk.
    - Klik op het icoon om het pop-upvenster te openen en zorg ervoor dat het correct werkt.
    - Controleer of het content script (content.js) correct wordt uitgevoerd op de bezochte pagina's.

### Gebruik
- Klik op het extensie-icoon in de browserwerkbalk om het pop-upvenster te openen.
- De extensie zal automatisch scripts uitvoeren op alle bezochte pagina's volgens de specificaties in `content.js`.



### Probleemoplossing
- Zorg ervoor dat alle bestanden correct zijn geplaatst volgens de bovenstaande structuur.
- Controleer of de manifest.json correct is geconfigureerd.
- Voor specifieke fouten, gebruik de ontwikkelaarstools van de browser (`F12` of `Ctrl+Shift+I`) om consoleberichten te bekijken.
