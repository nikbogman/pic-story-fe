import diceSides from "../constants/diceSides"

const ShuffleBlocks = (count)=>{
    const sides = [];

    for (let i = 0; i < count; i++) {
        const side = sides.push(diceSides[Math.floor(Math.random() * diceSides.length)]);
        console.log(side);
    } 
    console.log(sides);
    return sides;
};

export default ShuffleBlocks;
