let str = `
010-1234-5678
theduddn@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
http://localhost:1234
동해물과_백두산이 마르고 닮도록
`

console.log(
 str.match(/.{1,}(?=@)/g)   
)
console.log(
 str.match(/(?<=@).{1,}/g)   
)