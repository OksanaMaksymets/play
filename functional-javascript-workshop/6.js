function countWords(inputWords) {
    return inputWords.reduce((prev, curr) => (
        prev[curr] = ++prev[curr] || 1, prev), {}
    );
};

module.exports = countWords