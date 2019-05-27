module.exports = props =>
  `the meme is ${props.meme} Memeified: ${memeIt(props.meme)}`;

function memeIt(memeString) {
  let result;
  //Spread Operators, map and arrow functions :) check them out!
  const memeStringArray = [...memeString].map((char, i) => {
    if (i % 2 == 0.0) {
      return char.toUpperCase(i);
    }
    return char.toLowerCase(i);
  });

  result = memeStringArray.join("");
  return result;
}
