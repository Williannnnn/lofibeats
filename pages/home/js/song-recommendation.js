let songsInfo = [
    'Roots, Kupla',
    'Revolution, ToMC Beatz',
    'Gloom, mell-ø',
    "You Don't Know, Psalm trees",
    'Lowlands, Alina Hardin',
    'Melloton, Liam Huston',
    'Céleste, Psalm trees',
    'City Lounge, Saib',
    'Blind blossom, Emperose',
    'Float, SPEECHLESS',
    'Waiting for you, mell-ø',
    'Acalma, Gambia beats',
    'Hawaii, Ahe Bane',
    'Sunflower, owlh',
    'Dusk, n o r m a l ',
    'In life, Tom Doolie',
    'Medicinal Sushi, Chris Mazuera',
    'Aoi, Iöland',
    'Earth, beaumont',
    'Jasmine, C4C',
    'Life, Slumberville',
    'Asleep, Fractite',
    'Space Dust, SPEECHLESS',
]

const songsList = document.querySelector('.song-recommendation__list')

const createRecommendedSongItem = (
    songName = 'Unknown',
    songThumbPath = '/src/assets/images/song-thumbs 1',
    songArtistName = 'Unknown',
    songDuration = '00:00'
) => {
    const songItem = createElement('li', { class: 'song-recommendation__item' })

    const thumbContainer = createElement('div', {
        class: 'song-recommendation__thumb',
    })

    const thumbImage = createElement('img', {
        src: `/src/assets/images/song-thumbs/thumb ${getRandomNumber(1, 10)}.jpeg`,
        alt: 'Song Thumb',
    })

    const songInfoContainer = createElement('div', {
        class: 'song-recommendation__song-info',
    })

    const songNameP = createElement(
        'p',
        {
            class: 'song-recommendation__song-name',
        },
        songName
    )

    const artistNameP = createElement(
        'p',
        {
            class: 'song-recommendation__artist-name',
        },
        songArtistName
    )

    const songDurationP = createElement(
        'p',
        {
            class: 'song-recommendation__song-duration',
        },
        songDuration
    )

    songInfoContainer.appendChild(songNameP)
    songInfoContainer.appendChild(artistNameP)
    songInfoContainer.appendChild(songDurationP)

    thumbContainer.appendChild(thumbImage)

    songItem.appendChild(thumbContainer)
    songItem.appendChild(songInfoContainer)

    return songItem
}

const renderRecommendedSongItem = (songItemElement, songsList) => 
    songsList.appendChild(songItemElement) 

for (let i = 1; i <= 11; i++) {
    songsInfo = shuffle(songsInfo)
    const randomSong = songsInfo[0]

    songsInfo.shift()

    const [artistName, songName] = randomSong.split(',')

    const item = createRecommendedSongItem(songName, null, artistName)

    renderRecommendedSongItem(item, songsList)
}
