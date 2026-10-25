export const calculate = (totalCnt, correctCnt) => {
    if (totalCnt <= 0) return 0;
    return Math.round((correctCnt / totalCnt) * 10000) / 100;
};