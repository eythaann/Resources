
const CountWords = (text = "") => {
  let dict = {};
  let separateWords = text
    .toLowerCase()
    .replaceAll(/[,."()]/g, "")
    .split(" ");

  for (let word of separateWords) {
    if (dict[word]) {
      ++dict[word];
    } else {
      dict[word] = 1;
    }
  }

  return dict;
};

export default CountWords
