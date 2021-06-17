const createElement = (elementName = 'div', attributes = {}, content = '') => {
    const element = document.createElement(elementName)

    Object.keys(attributes).forEach(attribute => element.setAttribute(attribute, attributes[attribute]))

    element.textContent = content
    
    return element
}

const getRandomNumber = (from = 0, to = 1) => 
  Math.floor(Math.random() * (to - from + 1)) + from

function shuffle(array) {
    let currentIndex = array.length,
        randomIndex

    while (1 !== currentIndex) {
        randomIndex = getRandomNumber(0, currentIndex - 1)
        currentIndex--

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ]
    }

    return array
}

const getRandomSongDuration = () => {
    const songMinutesValue = getRandomNumber(1, 5)
    const songSecondsValue = getRandomNumber(0, 59)

    const songMinutes = songMinutesValue < 10 ? `0${songMinutesValue}` : songMinutesValue
    const songSeconds = songSecondsValue < 10 ? `0${songSecondsValue}` : songSecondsValue

    const songDuration = `${songMinutes}:${songSeconds}`

    return songDuration
}
