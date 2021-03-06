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

    const playlistBasics = createElement('header', {
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

    const contentMediasContainer = createElement('div', {
        class: 'content-medias-container'
    })

    const contentMediasContainerSpotifyDiv = createElement()
    const contentMediasContainerYouTubeDiv = createElement()

    const spotifyImage = createElement('img', {
        src: '/src/assets/icons/logo-spotify.svg'
    })

    const youTubeImage = createElement('img', {
        src: '/src/assets/icons/youtube.svg'
    })

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
    playlistBasics.appendChild(contentMediasContainer)

    playlistThumb.appendChild(playlistThumbImage)

    playlistInfo.appendChild(playlistNameP)
    playlistInfo.appendChild(artistNameP)

    contentMediasContainer.appendChild(contentMediasContainerSpotifyDiv)
    contentMediasContainer.appendChild(contentMediasContainerYouTubeDiv)

    contentMediasContainerSpotifyDiv.appendChild(spotifyImage)
    contentMediasContainerYouTubeDiv.appendChild(youTubeImage)

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

const createdPlaylists = []

const renderPlaylists = (playlists = []) =>
    playlists.forEach(playlist => playlistsList.appendChild(playlist))

const buildPlaylists = () => {
    for (let playlistId = 0; playlistId < 10; playlistId++) {
        const [playlistName, artistName] = shuffle(songsInfo)[0].split(',')
        const playlistSongs = []
    
        for (let songId = 0; songId < getRandomNumber(3, 10); songId++) {
            const [songName] = shuffle(songsInfo)[0].split(',')
    
            const song = createSongItem(songName, getRandomSongDuration())
    
            playlistSongs.push(song)
        }
    
        const playlist = createPlaylistItem(playlistName, artistName, playlistSongs)
    
        createdPlaylists.push(playlist)
    }
}

buildPlaylists()
renderPlaylists(createdPlaylists)

const playlists = document.querySelectorAll('.playlists__playlist-item')

const isClassified = (element, classes = []) =>
    [...element.classList].some(elementClass => classes.some(className => elementClass === className))

playlists.forEach(playlist => {
    playlist.addEventListener('click', ({target}) => {
        const playlistClosingClasses = ['playlists__thumb', 'playlists__playlist-info']

        if (isClassified(target, playlistClosingClasses) || isClassified(target.parentElement, playlistClosingClasses))
            playlist.classList.toggle('opened-playlist')
    })
})
