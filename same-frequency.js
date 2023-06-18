function freqCounter (str) {
    let freq = new Map();
    for (let char of str) {
        let valCount = freq.get(char) || 0;
        freq.set(char, valCount + 1);
    }
    return freq;
}

// add whatever parameters you deem necessary
function sameFrequency(int1, int2) {
    const freq1 = freqCounter(int1.toString());
    const freq2 = freqCounter(int2.toString());
    for (let num of freq1.keys()) {
        if (freq1.get(num) !== freq2.get(num)) return false;
    }
    return true;
}

module.exports = sameFrequency;