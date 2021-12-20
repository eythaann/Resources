const txt = 'abcdeee'
const txt2 = 'aaaabcdddbbbaaacccddd'

const Compress = text => {
  let compress = []

  for (let i = 0; i < text.length; i++) {
    if (text[i] != text[i - 1]) {
      compress.push(text[i])
      compress.push(1)
    } else {
      compress[compress.length - 1]++
    }
  }

  return compress.length < text.length ? compress.join('') : text
}

console.log(Compress(txt))
console.log(Compress(txt2))
