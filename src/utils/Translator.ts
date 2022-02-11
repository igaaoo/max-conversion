export function toBinary(inputText: string) {
  let mod = inputText.toLowerCase()
  let initialPhrase = Array.from(mod)
  let finalPhrase = initialPhrase

  for(let word in initialPhrase){
    switch(initialPhrase[word]){
      case "a":
        finalPhrase[word] ="01100001"
        break

        case "b":
        finalPhrase[word] ="01100010"
        break

        case "c":
        finalPhrase[word] ="01100011"
        break

        case "d":
        finalPhrase[word] ="01100100"
        break


        case "e":
        finalPhrase[word] ="01100101"
        break


        case "f":
        finalPhrase[word] ="01100110"
        break


        case "g":
        finalPhrase[word] ="01100111"
        break

        case "h":
        finalPhrase[word] ="01101000"
        break


        case "i":
        finalPhrase[word] ="01101001"
        break

        case "j":
        finalPhrase[word] ="01101010"
        break

        case "k":
        finalPhrase[word] ="01101011"
        break

        case "l":
        finalPhrase[word] ="01101100"
        break

        case "m":
        finalPhrase[word] ="01101101"
        break

        case "n":
        finalPhrase[word] ="01101110"
        break

        case "o":
        finalPhrase[word] ="01101111"
        break

        case "p":
        finalPhrase[word] ="01110000"
        break

        case "q":
        finalPhrase[word] ="01110001"
        break

        case "r":
        finalPhrase[word] ="01110010"
        break

        case "s":
        finalPhrase[word] ="01110011"
        break

        case "t":
        finalPhrase[word] ="01110100"
        break

        case "u":
        finalPhrase[word] ="01110101"
        break

        case "v":
        finalPhrase[word] ="01110110"
        break

        case "w":
        finalPhrase[word] ="01110111"
        break

        case "x":
        finalPhrase[word] ="01111000"
        break

        case "y":
        finalPhrase[word] ="01111001"
        break

        case "z":
        finalPhrase[word] ="01111010"
        break

        case " ":
          finalPhrase[word] ="  "
          break

        default:
          finalPhrase[word] = "x"
          break
    }
  }
  return finalPhrase.join(" ")
}

export function toMorse(inputText: string) {
  let mod = inputText.toLowerCase()
  let initialPhrase = Array.from(mod)
  let finalPhrase = initialPhrase

  for(let word in initialPhrase){
    switch(initialPhrase[word]){
      case "a":
        finalPhrase[word] =".-"
        break

        case "b":
        finalPhrase[word] ="-..."
        break

        case "c":
        finalPhrase[word] ="-.-."
        break

        case "d":
        finalPhrase[word] ="-.."
        break


        case "e":
        finalPhrase[word] ="."
        break


        case "f":
        finalPhrase[word] ="..-."
        break


        case "g":
        finalPhrase[word] ="--."
        break

        case "h":
        finalPhrase[word] ="...."
        break


        case "i":
        finalPhrase[word] =".."
        break

        case "j":
        finalPhrase[word] =".---"
        break

        case "k":
        finalPhrase[word] ="-.-"
        break

        case "l":
        finalPhrase[word] =".-.."
        break

        case "m":
        finalPhrase[word] ="--"
        break

        case "n":
        finalPhrase[word] ="-."
        break

        case "o":
        finalPhrase[word] ="---"
        break

        case "p":
        finalPhrase[word] =".--."
        break

        case "q":
        finalPhrase[word] ="--.-"
        break

        case "r":
        finalPhrase[word] =".-."
        break

        case "s":
        finalPhrase[word] ="..."
        break

        case "t":
        finalPhrase[word] ="-"
        break

        case "u":
        finalPhrase[word] ="..-"
        break

        case "v":
        finalPhrase[word] ="...-"
        break

        case "w":
        finalPhrase[word] =".--"
        break

        case "x":
        finalPhrase[word] ="-..-"
        break

        case "y":
        finalPhrase[word] ="-.--"
        break

        case "z":
        finalPhrase[word] ="--.."
        break

        case " ":
          finalPhrase[word] ="  "
          break

        default:
          finalPhrase[word] = "x"
          break
    }
  }
  return finalPhrase.join(" ")
}

