txt = 'abcdeee'
txt2 = 'aaaabcdddbbbaaacccddd'

def Compress (text: str) -> str:
  compressed = []
  for i in range(0, len(text)):
    if text[i] == text[i - 1]:
      compressed[len(compressed) - 1] += 1
      continue
    compressed.append(text[i])
    compressed.append(1)
  if len(compressed) > len(text): return text
  return "".join(map(str, compressed))

print(Compress(txt))
print(Compress(txt2))