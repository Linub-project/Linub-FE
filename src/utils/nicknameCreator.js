import * as NICKNAME from "../constants/nicknameCandidate";

export const createRandomNickname = () => {
    const firstWords = NICKNAME.NICKNAME_FIRST();
    const lastWords = NICKNAME.NICKNAME_LAST();

    const first = firstWords[Math.floor(Math.random() * firstWords.length)];
    const last = lastWords[Math.floor(Math.random() * lastWords.length)];

    return `${first} ${last}`;
};