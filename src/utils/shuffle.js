export const shuffleArray = (arr) => {
    const size = arr.length;
    for(let i = size-1; i > 0; i--) {
        const j = Math.floor(Math.random()*(i+1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}