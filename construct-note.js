function freqCounter (str) {
    let freq = new Map();
    for (let char of str) {
        let valCount = freq.get(char) || 0;
        freq.set(char, valCount + 1);
    }
    return freq;
}

// add whatever parameters you deem necessary
function constructNote(msg, letters) {
    if (letters.length === 0) return false;
    let msgFreq = freqCounter(msg);
    let lettersFreq = freqCounter(letters);
    for (let char of lettersFreq.keys()) {
        if (lettersFreq.get(char) < msgFreq.get(char)) return false;
    }
    return true;
}

module.exports = constructNote;