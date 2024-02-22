export function getRandom(length) {
  let ourString ='';
  const randomBase = '0123456789abcdef';
  for (let i = 0; i < length; i++) {
    const rand = Math.floor(Math.random() * 16);
    ourString = ourString + randomBase.at(rand);
  }
  return ourString;
}