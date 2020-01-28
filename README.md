# Overview
A NPM package for generating random word by specific letter. Hundred of words from A-Z. Upper and lower case options.

# Installation
`npm i random-word-by-letter --save`

# Setup & Basic Usage
```
const randomWord =  require("random-word-by-letter");

console.log(randomWord('a'))
// e.g. Abstract

console.log(randomWord('b'))
// e.g. Banana
```
# Options
|1st Param (Required) | 2nd Param (Optional) |
|--|--|
| Letter | Letter Case |
| e.g. **A-Z** | **U** - Upper case, **L** - Lower case, **blank** - Default letter case |

### Examples
```
// Default letter case
console.log(randomWord('a'))
// e.g. Abstract

console.log(randomWord('a', 'u'))
// e.g. ABSTRACT

console.log(randomWord('a', 'l'))
// e.g. abstract
```

Feel free to clone or fork this project:  `https://github.com/deanilvincent/random-word-by-letter.git`

Contribution & pull request is welcome!

I'll be glad if you give this project a ★ on [Github](https://github.com/deanilvincent/random-word-by-letter) :))

### License

This project is licensed under the MIT License - see the  [LICENSE.md](https://github.com/deanilvincent/random-word-by-letter/blob/master/LICENSE)  file for details.