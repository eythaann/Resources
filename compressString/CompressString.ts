const txt = 'abcdeee';
const txt2 = 'aaaabcdddbbbaaacccddd';

const Compress = (text: string): string => {
  const compressed: (string | number)[] = [];

  for (let i = 0; i < text.length; i++) {
    if (text[i] == text[i - 1]) {
      (compressed[compressed.length - 1] as number)++;
      continue;
    }
    compressed.push(text[i]);
    compressed.push(1);
  }

  return compressed.length < text.length ? compressed.join('') : text;
};

console.log(Compress(txt));
console.log(Compress(txt2));
