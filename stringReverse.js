function reverseString(str) {
  if (str.length === 1) {
    return str;
  }
  return str[str.length - 1] + reverseString(str.substr(0, str.length - 1));
}

console.log(reverseString("there are"));
console.log(reverseString("dogs and cats"));
