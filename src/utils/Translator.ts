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
