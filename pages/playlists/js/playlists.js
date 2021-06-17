let songsInfo = [
    'Roots, Kupla',
    'Revolution, ToMC Beatz',
    'Gloom, mell-ø',
    'You Don\'t Know, Psalm trees',
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

const playlistsList = document.querySelector('.playlists__list')

const createPlaylistItem = (
    playlistName = 'Unknown',
    artistName = 'Unknown',
    playlistSongs = []
) => {
    const playlistItem = createElement('li', {
        class: 'playlists__playlist-item',
    })

    const playlistBasics = createElement('section', {
        class: 'playlists__playlist-basics',
    })

    const playlistThumb = createElement('div', {
        class: 'playlists__thumb',
    })

    const playlistThumbImage = createElement('img', {
        src: `/src/assets/images/song-thumbs/thumb ${getRandomNumber(
            1,
            10
        )}.jpeg`,
        alt: 'Song Thumb',
    })

    const playlistInfo = createElement('div', {
        class: 'playlists__playlist-info',
    })

    const playlistNameP = createElement('p', {}, playlistName)

    const artistNameP = createElement('p', {}, artistName)

    const playlistSongsSection = createElement('section', {
        class: 'playlists__songs',
    })

    const playlistSongsList = createElement('ul', {
        class: 'playlists__songs-list',
    })

    playlistItem.appendChild(playlistBasics)
    playlistItem.appendChild(playlistSongsSection)

    playlistBasics.appendChild(playlistThumb)
    playlistBasics.appendChild(playlistInfo)

    playlistThumb.appendChild(playlistThumbImage)

    playlistInfo.appendChild(playlistNameP)
    playlistInfo.appendChild(artistNameP)

    playlistSongsSection.appendChild(playlistSongsList)

    playlistSongs.forEach(song => playlistSongsList.appendChild(song))

    return playlistItem
}

const createSongItem = (songName = 'Unknown', songDuration = '00:00') => {
    const songItem = createElement('li', {
        class: 'playlists__song',
    })

    const songNameP = createElement('p', {}, songName)
    const songDurationP = createElement('p', {}, songDuration)

    songItem.appendChild(songNameP)
    songItem.appendChild(songDurationP)

    return songItem
}

const renderPlaylists = () => {
    for (let playlistId = 0; playlistId < 10; playlistId++) {
        const [playlistName, artistName] = shuffle(songsInfo)[0].split(',')
        const playlistSongs = []
    
        for (let songId = 0; songId < getRandomNumber(3, 10); songId++) {
            const [songName] = shuffle(songsInfo)[0].split(',')
    
            const song = createSongItem(songName, getRandomSongDuration())
    
            playlistSongs.push(song)
        }
    
        const playlist = createPlaylistItem(playlistName, artistName, playlistSongs)
    
        playlistsList.appendChild(playlist)
    }
}

renderPlaylists()

const playlists = document.querySelectorAll('.playlists__playlist-item')

playlists.forEach(playlist => {
    playlist.addEventListener('click', event => {
        event.preventDefault()
        playlist.classList.toggle('opened-playlist')
    })
})
