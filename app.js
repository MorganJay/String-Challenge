const test = '5556293383563665';

const test2 = '5788888888882339999';

const StringChallenge = str => {
  let emptyCount = 0;
  const array = str.split('');
  for (let number = 2; number <= 9; number++) {
    for (let index = 0; index < array.length; index++) {
      let char = number + '';
      if (char === array[index]) {
        emptyCount++;
        if (emptyCount >= number) return true;
      } else emptyCount = 0;
    }
  }
  return false;
};

console.log(StringChallenge(test2));
