import {DEFAULT_COMMAND} from "@/constants/defaultCommand";

export const getRandomCommand = (count) => {
    const standard = DEFAULT_COMMAND.length / count;

    let arr = [];
    let sum = 0;
    for(let i = 0; i < count; i++) {
        sum += Math.floor(Math.random() * standard);
        arr.push(DEFAULT_COMMAND[sum]);
    }

    return arr;
};