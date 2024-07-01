var translations = {
    'EN': {"betrouwbaarheidsindex": "trustindex", "scanNu": "scan now"},
    'NL': {"betrouwbaarheidsindex": "betrouwbaarheidsindex", "scanNu": "scan nu"},
    'FR': {"betrouwbaarheidsindex": "indice de confiance", "scanNu": "scanner maintenant"},
    'DE': {"betrouwbaarheidsindex": "Vertrauensindex", "scanNu": "jetzt scannen"},
    'ES': {"betrouwbaarheidsindex": "índice de confianza", "scanNu": "escanear ahora"},
    'IT': {"betrouwbaarheidsindex": "indice di fiducia", "scanNu": "scansiona ora"},
    'PT': {"betrouwbaarheidsindex": "índice de confiança", "scanNu": "escanear agora"},
    'RU': {"betrouwbaarheidsindex": "индекс доверия", "scanNu": "сканировать сейчас"},
    'JA': {"betrouwbaarheidsindex": "信頼指数", "scanNu": "今すぐスキャン"},
    'ZH': {"betrouwbaarheidsindex": "信任指数", "scanNu": "立即扫描"},
    'KO': {"betrouwbaarheidsindex": "신뢰 지수", "scanNu": "지금 스캔"},
    'AR': {"betrouwbaarheidsindex": "مؤشر الثقة", "scanNu": "افحص الآن"},
    'HI': {"betrouwbaarheidsindex": "विश्वास सूचकांक", "scanNu": "अभी स्कैन करें"},
    'TR': {"betrouwbaarheidsindex": "güven endeksi", "scanNu": "şimdi tara"},
    'SV': {"betrouwbaarheidsindex": "förtroendeindex", "scanNu": "skanna nu"},
    'NO': {"betrouwbaarheidsindex": "tillitsindeks", "scanNu": "skann nå"},
    'FI': {"betrouwbaarheidsindex": "luottamusindeksi", "scanNu": "skannaa nyt"},
    'DA': {"betrouwbaarheidsindex": "tillidsindeks", "scanNu": "scan nu"},
    'EL': {"betrouwbaarheidsindex": "δείκτης εμπιστοσύνης", "scanNu": "σαρώστε τώρα"},
    'PL': {"betrouwbaarheidsindex": "wskaźnik zaufania", "scanNu": "skanuj teraz"},
    'CS': {"betrouwbaarheidsindex": "index důvěry", "scanNu": "skenovat nyní"},
    'HU': {"betrouwbaarheidsindex": "bizalmi index", "scanNu": "szkennelj most"},
    'RO': {"betrouwbaarheidsindex": "indice de încredere", "scanNu": "scanează acum"},
    'TH': {"betrouwbaarheidsindex": "ดัชนีความเชื่อมั่น", "scanNu": "สแกนตอนนี้"},
    'ID': {"betrouwbaarheidsindex": "indeks kepercayaan", "scanNu": "pindai sekarang"},
    'MS': {"betrouwbaarheidsindex": "indeks kepercayaan", "scanNu": "imbas sekarang"},
    'VI': {"betrouwbaarheidsindex": "chỉ số tin cậy", "scanNu": "quét ngay bây giờ"}
};

var languagesSet = ['EN', 'NL', 'FR', 'DE', 'ES', 'IT', 'PT', 'RU', 'JA', 'ZH', 'KO', 'AR', 'HI', 'TR', 'SV', 'NO', 'FI', 'DA', 'EL', 'PL', 'CS', 'HU', 'RO', 'TH', 'ID', 'MS', 'VI'];

function setLanguage(language) {
    let parts = language.split(' ');
    let flag = parts[0];
    let lang = parts[1];

    for (i in languagesSet){
        if (lang == languagesSet[i]) {
            document.getElementById('languageButton').innerHTML = flag + ' ' + lang;
            document.getElementById("betrouwbaarheidsindex").innerHTML = translations[lang].betrouwbaarheidsindex;
            document.getElementsByClassName("scanBtn")[0].innerHTML = translations[lang].scanNu;
        }
    }

}