const tutorials =
 [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];




const titleCased = () => {
  console.log(tutorials)
  const arry2 = [];
  const title = tutorials.map(element => element.split(" "))
  console.log("new title")
  console.log(title)

  for (let i = 0; i < title.length; i++) {
  for (let j=0; j<title[i].length; j++ )
    title[i][j] = title[i][j].charAt(0).toUpperCase() + title[i][j].slice(1);
arry2.push(title[i].join(" "));
}
return arry2
}


