const str = 'szxzshpswspzz';

function evaluateLetterOccurence(strInput) {
let letters = {};

for (let i = 0; i < strInput.length; i++) {
	if(!letters[strInput[i]]){
		letters[strInput[i]] = 1;
	}
	else {
		letters[strInput[i]]++;
	}
}

let maxCount = Math.max(...Object.values(letters));
let maxCountLetters = Object.keys(letters).filter(key => letters[key] === maxCount);

return (maxCountLetters.length > 1) ? `The letters "${maxCountLetters}" occur maximum number of times: ${maxCount}` 
                                        : `The letter "${maxCountLetters}" occurs maximum number of times: ${maxCount}`;
}

console.log(evaluateLetterOccurence(str));