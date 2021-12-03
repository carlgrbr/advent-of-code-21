
const input = ['110001001110', '011111001000', '100010001011', '111001001101',
  '100000110000', '100000001000', '011001011010', '111110100011']

const solveTask1 = (input) => {
  const gamma = input[0].split('').reduce((acc, _e, i) => {
    const [numOfZeros, numOfOnes] = input.reduce(
      ([zero, one], ele) => (ele[i] === '0' ? [zero + 1, one] : [zero, one + 1]),
      [0, 0]
    );

    return acc + (numOfZeros > numOfOnes ? '0' : '1');
  }, '');

  const epsilon = reverseString(gamma);

  return parseInt(Number(gamma), 2) * parseInt(Number(epsilon), 2);  
}

// helper

function reverseString(string) {
  return string
    .split('')
    .map((e) => (e === '0' ? '1' : '0'))
    .join('');
}
