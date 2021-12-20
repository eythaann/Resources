const generatePassword = (
  width = 12,
  config = { lowercase: true, upercase: true, numbers: true, symbols: true }
) => {
  if (width > 100) return 'Tamaño maximo es de 100 caracteres'

  const Lowercase = 'qwertyuiopasdfghjklzxcvbnm'
  const Upercase = 'QWERTYUIOPASDFGHJKLZXCVBNM'
  const Numbers = '0123456789'
  const Symbols = '&/%$*'

  let pass = ''
  let characters = ''

  if (config.lowercase) characters += Lowercase
  if (config.upercase) characters += Upercase
  if (config.numbers) characters += Numbers
  if (config.symbols) characters += Symbols

  if (characters.length === 0) return 'Active una Opcion Minimo'

  for (let i = 0; i < width; i++) {
    pass += characters.charAt(Math.floor(Math.random() * characters.length))
  }

  return pass
}

export default generatePassword
