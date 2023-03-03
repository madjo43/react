const adjectives= ['lijep', 'zgodan', 'pametan'];
const nouns = ['mladen','mladjo','student'];

function getRandomName () {
    const adjectiveIndex = Math.floor(Math.random() * adjectives.length);
    const nounIndex = Math.floor(Math.random() * nouns.length);

    return `${adjectives[adjectiveIndex]} ${nouns[nounIndex]}`;
}

export function RandomNameButton(props) {
    function handleClick(event) {
        props.onRandomName(getRandomName());
    }
    return (
        <button type="button" onClick={handleClick}>Get random name</button>
    )
}