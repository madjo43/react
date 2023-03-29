const adjectives= ['lijep', 'zgodan', 'pametan'];
const nouns = ['mladen','mladjo','student'];

export function getRandomName () {
    const adjectiveIndex = Math.floor(Math.random() * adjectives.length);
    const nounIndex = Math.floor(Math.random() * nouns.length);

    return `${adjectives[adjectiveIndex]} ${nouns[nounIndex]}`;
}