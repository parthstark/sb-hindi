function chanakyaUnicodeConvertor(inputText) {
    const arrayOne = new Array("¤", "U", "¢ð", "´ð", "ð¸", "Ò", "¥æò", "¸", "¸•", "¸¹", "¸»", "¸Á", "¸Ç", "¸É", "¸È", "¸Ø", "¸Ú", "¸Ù", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "T", "V", "W", "X", "Y", "`", "a", "b", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "u", "žæ", "ž", "#", "%", "@", "„", "¦", "¨", "¯", "µ", "º", "Cþ", "q", "Ê", "u", "g", "Ÿæ", "Åþ", "Çþ", "Éþ", "^", "h", "Ð", "ý", "þ", "¥ô", "¥æð", "¥õ", "¥æñ", "¥æ", "¥", "§Z", "§ü", "§", "©", "ª", "«", "¬", "­", "°ð", "°", "€", "·", "", "¹", "‚", "»", "ƒæ", "ƒ", "¾", "“", "‘", "¿", "À", "”", "…", "’", "Á", "Ûæ", "Û", "†æ", "†", "Å", "Æ", "Ç", "É", "‡æ", "‡", "ˆ", "Ì", "‰", "Í", "Î", "¼", "Š", "Ï", "óæ", "ó", "‹æ", "Ù", "‹", "Œ", "Â", "", "È", "Ž", "Õ", "", "Ö", "", "×", "Ä", "Ø", "Ú", "Ë", "Ü", "¶", "Ý", "Ã", "ß", "àæ", "³æ", "o", "³", "à", "c", "á", "S", "â", "ã", "±", "ÿæ", "ÿ", "˜æ", "˜", "™æ", "™", "üð´", "æò", "æñ", "æ", "è", "é", "ê", "ä", "å", "ë", "ì", "í", "Ô", "ñ", "ô", "õ", "¢", "´", "¡", "Ñ", "¸", "ò", "ù", "÷", "ð", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "®", "v", "w", "x", "y", "z", "{", "|", "}", "~", "्ो", "्ौ", "्ाे", "्ाा", "ाे", "ाे", "ाै", "्ा", "ंु", "ओे", "ोे", "ाे", "ईंं")
    const arrayTwo = new Array("", "", "ð¢", "ð´", "¸ð", "'", "ऑ", "फ़्", "क़", "ख़", "ग़", "ज़", "ड़", "ढ़", "फ़", "य़", "ऱ", "ऩ", "्र", "क्च", "ष्ट", "ष्ठ", "श्व", "स्न", "त्र", "॥", "ढ्ढ", "छ्व", "्य", "रु", "रू", "हृ", "ह्र", "क्क", "क्त", "क्र", "ञ्ज", "ङ्क", "ङ्ख", "ङ्ग", "ङ्घ", "क्व", "ड्ड", "ड्ढ", "स्र", "द्ग", "द्घ", "द्द", "द्ध", "द्ब", "द्भ", "द्म", "द्य", "द्व", "ठ्ठ", "श्च", "ह्न", "ह्म्", "ह्य", "ह्ल", "ह्व", "त्त", "त्त्", "प्त", "त्न", "ञ्च", "ल्ल", "ष्ट्व", "ङ्क्ष", "ख्न", "द्ब्र", "ख्र", "ष्ट्र", "ह्न", "ज़्", "ह्व", "द्द", "श्र", "ट्र", "ड्र", "ढ्र", "ट्ट", "द्ध", "।", "्र", "्र", "ओ", "ओ", "औ", "औ", "आ", "अ", "ईं", "ई", "इ", "उ", "ऊ", "ऋ", "ॠ", "ऌ", "ऐ", "ए", "क्", "क", "ख्", "ख", "ग्", "ग", "घ", "घ्", "ङ", "च्च्", "च्", "च", "छ", "ज्ज्", "ज्", "ज्", "ज", "झ", "झ्", "ञ", "ञ्", "ट", "ठ", "ड", "ढ", "ण", "ण्", "त्", "त", "थ्", "थ", "द", "द", "ध्", "ध", "न्न", "न्न्", "न", "न", "न्", "प्", "प", "फ्", "फ", "ब्", "ब", "भ्", "भ", "म्", "म", "य्", "य", "र", "ल्", "ल", "ल", "ळ", "व्", "व", "श", "श", "श", "श्", "श्", "ष्", "ष", "स्", "स", "ह", "ह्", "क्ष", "क्ष्", "त्र", "त्र्", "ज्ञ", "ज्ञ्", "ðZ", "ॉ", "ौ", "ा", "ी", "ु", "ू", "ु", "ू", "ृ", "ॄ", "ॢ", "े", "ै", "ो", "ौ", "ं", "ं", "ँ", ":", "़", "ॅ", "ऽ", "्", "े", "०", "१", "२", "३", "४", "५", "६", "७", "८", "९", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "े", "ै", "े", "ा", "ो", "ो", "ौ", "", "ुं", "ओ", "ो", "ो", "ईं")
    // Check if input text is not empty
    // Replace specific characters with their Unicode equivalents
    inputText = inputText.replace(/क़/g, "क़");
    inputText = inputText.replace(/ख़‌/g, "ख़");
    inputText = inputText.replace(/ग़/g, "ग़");
    inputText = inputText.replace(/ज़/g, "ज़");
    inputText = inputText.replace(/ड़/g, "ड़");
    inputText = inputText.replace(/ढ़/g, "ढ़");
    inputText = inputText.replace(/ऩ/g, "ऩ");
    inputText = inputText.replace(/फ़/g, "फ़");
    inputText = inputText.replace(/य़/g, "य़");
    inputText = inputText.replace(/ऱ/g, "ऱ");

    // Perform general replacements using predefined arrays
    for (let inputSymbolIdx = 0; inputSymbolIdx < arrayOne.length; inputSymbolIdx++) {
        let idx = 0;
        // Continue replacing until no occurrences are found
        while (idx !== -1) {
            inputText = inputText.replace(arrayOne[inputSymbolIdx], arrayTwo[inputSymbolIdx]);
            idx = inputText.indexOf(arrayOne[inputSymbolIdx]);
        }
    }

    // Replace special character 'Z' with 'üं'
    inputText = inputText.replace(/Z/g, "üं");

    // Handle special case of character 'ç'
    let positionOfF = inputText.indexOf("ç");
    while (positionOfF !== -1) {
        let characterRightToF = inputText.charAt(positionOfF + 1);
        inputText = inputText.replace("ç" + characterRightToF, characterRightToF + "ि");
        positionOfF = positionOfF + 1;
        // Handle additional replacements after 'ç'
        while ((inputText.charAt(positionOfF + 1) === "्") && (positionOfF < inputText.length - 1)) {
            let stringToBeReplaced = inputText.charAt(positionOfF + 1) + inputText.charAt(positionOfF + 2);
            inputText = inputText.replace("ि" + stringToBeReplaced, stringToBeReplaced + "ि");
            positionOfF = positionOfF + 2;
        }
        positionOfF = inputText.search(/ç/, positionOfF + 1);
    }

    // Define set of matras for further processing
    const setOfMatras = "ा ि ी ु ू ृ े ै ो ौ ं ः ँ ॅ";

    // Handle special case of character 'ü'
    let positionOfZ = inputText.indexOf("ü");
    while (positionOfZ > 0) {
        let probablePositionOfHalfR = positionOfZ - 1;
        let characterAtProbablePositionOfHalfR = inputText.charAt(probablePositionOfHalfR);
        // Find the character before 'ü' which is not a matra
        while (setOfMatras.includes(characterAtProbablePositionOfHalfR)) {
            probablePositionOfHalfR = probablePositionOfHalfR - 1;
            characterAtProbablePositionOfHalfR = inputText.charAt(probablePositionOfHalfR);
        }
        // Replace characters around 'ü' with 'र्'
        let characterToBeReplaced = inputText.substr(probablePositionOfHalfR, (positionOfZ - probablePositionOfHalfR));
        let newReplacementString = "र्" + characterToBeReplaced;
        characterToBeReplaced = characterToBeReplaced + "ü";
        inputText = inputText.replace(characterToBeReplaced, newReplacementString);
        positionOfZ = inputText.indexOf("ü");
    }
    // Return the modified text
    return inputText;
}