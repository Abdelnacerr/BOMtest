//Solution to Keyboard knights Problem:
//Mohamed Abdinasir

// Keyboard layout as an array
const keyboard = [
  ['A', 'B', 'C', 'D', 'E'],
  ['F', 'G', 'H', 'I', 'J'],
  ['K', 'L', 'M', 'N', 'O'],
  ['', '1', '2', '3', ''],
];

const vowels = ['A', 'E', 'I', 'O']

// Function to check if a move is a valid knight move
const isValidMove = (currX, currY, nextX, nextY) => {
  const dx = Math.abs(currX - nextX);
  const dy = Math.abs(currY - nextY);
  return (
    (dx === 1 && dy === 2) ||
    (dx === 2 && dy === 1)
  ) && nextX >= 0 && nextX < keyboard.length && nextY >= 0 && nextY < keyboard[nextX].length &&
     keyboard[nextX][nextY] !== ''; //Omit empty string squares and limit moves to valid keys only
};

// Function to count valid sequences recursively
const countValidSequences = (x, y, length, vowelsUsed) => {
  if (length === 10) {
    return 1;
  }

  let totalCount = 0;

  for (let dx = -2; dx <= 2; dx++) {
    for (let dy = -2; dy <= 2; dy++) {
      const nextX = x + dx;
      const nextY = y + dy;

      if (
        isValidMove(x, y, nextX, nextY) &&
        !(dx === 0 && dy === 0) //Avoid staying in the same square
      ) {
        const nextKey = keyboard[nextX][nextY];
        const isVowel = vowels.includes(nextKey);
        const nextVowelsUsed = vowelsUsed + (isVowel ? 1 : 0);

        if (nextVowelsUsed <= 2) {
          totalCount += countValidSequences(nextX, nextY, length + 1, nextVowelsUsed);
        }
      }
    }
  }

  return totalCount;
}

// Function to calculate the total number of valid sequences
const totalValidSequences = () => {
  let totalCount = 0;

  for (let x = 0; x < keyboard.length; x++) {
    for (let y = 0; y < keyboard[x].length; y++) {
      const startKey = keyboard[x][y];
      if (startKey !== '') {
        totalCount += countValidSequences(x, y, 1, vowels.includes(startKey) ? 1 : 0);
      }
    }
  }

  return totalCount;
};

// Display the total number of valid sequences
console.log(`Total number of valid 10-key sequences: ${totalValidSequences()}`);
