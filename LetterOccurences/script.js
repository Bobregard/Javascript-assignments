function evaluateOccurence() {
    const str = 'szxzshpswspzz';
    let map = new Map();

    for (let i = 0; i < str.length; i++) {     
        map.set(str[i], (map.get(str[i]) ?? 0) + 1)
    }

    const maxOccuringNumber = Math.max(...map.values());
    const maxOccuringLetters = [...map.entries()]
                            .filter(({ 1: v }) => v === maxOccuringNumber)
                            .map(([k]) => k);

    console.log((maxOccuringLetters.length === 1) ? `The letter "${maxOccuringLetters}" occurs maximum number of times: ${maxOccuringNumber}`
                                                : `The letters "${maxOccuringLetters}" occur maximum number of times: ${maxOccuringNumber}`);
}

evaluateOccurence();