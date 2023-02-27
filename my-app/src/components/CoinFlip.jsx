export function CoinFlip () {
    const number = Math.random();
    return <div>Coin shows {number > 0.5 ? "HEADS" : "TAILS"}</div>
}