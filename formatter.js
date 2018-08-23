module.exports.valueToAPIFormat = function findURLsInText(number) {
  // "" -> "0"
  if(!number){
    return "0";
  }
  // "12" -> "12.00"
  const numberWithDot = number.replace(",", ".");
  const numeroDecimal = Number.parseFloat(numberWithDot)

  return numeroDecimal;
  // "12.30" ->  "12.30"
  // "12.999" -> "13.00"
  // "12,30" ->  "12.30"
  // "12,999" -> "13.00"
};
