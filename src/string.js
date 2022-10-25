function fn(str) {
  let zhan = []
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(" || str[i] === "[" || str[i] === "{") { zhan.push(str[i]) } else {
      if (str[i] === "}" && "{" === zhan.pop()) { continue } if (str[i] === ")" && "(" === zhan.pop()) { continue } if (str[i] === "]"
        && "[" === zhan.pop()) { ; continue } return false;
    }
  } return zhan.length > 0 ? false : true;
}

const s1 = "()"
const s2 = "()[]{}";
const s3 = "(]"
const s4 = "([)]"
const s5 = "([])"
const s6 = "{([{}])}"

console.log(fn(s1));
console.log(fn(s2));
console.log(fn(s3));
console.log(fn(s4));
console.log(fn(s5));
console.log(fn(s6));