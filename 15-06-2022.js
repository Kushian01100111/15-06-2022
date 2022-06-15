// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

let Alphabet = {
  "n": "a",
  "o": "b",
  "p": "c",
  "q": "d",
  "r": "e",
  "s": "f",
  "t": "g",
  "u": "h",
  "v": "i",
  "w": "j",
  "x": "k",
  "y": "l",
  "z": "m",
  "a": "n",
  "b": "o",
  "c": "p",
  "d": "q",
  "e": "r",
  "f": "s",
  "g": "t",
  "h": "u",
  "i": "v",
  "j": "w",
  "k": "x",
  "l": "y",
  "m": "z",
  "N": "A",
  "O": "B",
  "P": "C",
  "Q": "D",
  "R": "E",
  "S": "F",
  "T": "G",
  "U": "H",
  "V": "I",
  "W": "J",
  "X": "K",
  "Y": "L",
  "Z": "M",
  "A": "N",
  "B": "O",
  "C": "P",
  "D": "Q",
  "E": "R",
  "F": "S",
  "G": "T",
  "H": "U",
  "I": "V",
  "J": "W",
  "K": "X",
  "L": "Y",
  "M": "Z",
}

let values = Object.entries(Alphabet)

function rot13(message){
  //your code here
  let massage = message.split("")
  
  for(let x = 0 ; x < massage.length; x++){
       for(let i = 0; i < values.length; i++){
           if(values[i][1] === massage[x]){
           massage[x] = values[i][0]
           break
        }
       }
  }
  return massage.join("")
}