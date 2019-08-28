function takeANumber(currentLine, name) {
  currentLine.push(name)
  return `Welcome, ${name}. You are number ${currentLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0){
    var firstPerson = katzDeliLine[0]
    katzDeliLine.shift[0]
    return firstPerson
  }
}