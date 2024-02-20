import dices from "../constants/dices"

const ShuffleBlocks = (count) => {
    const sides = [];

    for (let i = 0; i < count; i++) {
        const side = sides.push(dices[Math.floor(Math.random() * dices.length)]);
        console.log(side);
    }
    console.log(sides);
    return sides;
};

export default ShuffleBlocks;
