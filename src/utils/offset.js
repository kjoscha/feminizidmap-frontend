// function calculating a random number between -1 and 1 based on a string
const offset = (str) => {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += str.charCodeAt(i);
  }
  return (sum % 200) / 100 - 1;
}

export default offset;
