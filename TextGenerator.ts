export class TextGenerator {
  #Lowercase = "qwertyuiopasdfghjklzxcvbnm";
  #Upercase = "QWERTYUIOPASDFGHJKLZXCVBNM";
  #Numbers = "0123456789";
  #Symbols = "&/%$*.,;:";
  #Spaces = " ";

  #length = 100;
  config = {
    lowercase: true,
    upercase: true,
    numbers: true,
    symbols: true,
    spaces: true,
  };

  set length(length: number) {
    this.#length = length;
  }

  generateText() {
    let text = "";
    let characters = "";

    if (this.config.lowercase) characters += this.#Lowercase;
    if (this.config.upercase) characters += this.#Upercase;
    if (this.config.numbers) characters += this.#Numbers;
    if (this.config.symbols) characters += this.#Symbols;
    if (this.config.spaces) characters += this.#Spaces;

    if (characters.length === 0) return "Are you ok?";

    for (let i = 0; i < this.#length; i++) {
      text += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return text;
  }
}
