const createElement = (elementName = 'div', attributes = {}, content = '') => {
    const element = document.createElement(elementName)

    Object.keys(attributes).forEach(attribute => element.setAttribute(attribute, attributes[attribute]))

    element.textContent = content
    
    return element
}

const getRandomNumber = (from = 0, to = 1) => {
    return Math.floor(Math.random() * (to - from + 1)) + from
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex
  
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
