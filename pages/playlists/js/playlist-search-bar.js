const searchBar = document.querySelector('.playlists__search-bar-input')

searchBar.addEventListener('input', () => {
    const searchedPlaylists = createdPlaylists.filter(playlist => {
        const [{ textContent: playlistName }, { textContent: artistName }] =
            playlist.children[0].children[1].children

        const searchBarValue = searchBar.value.toLowerCase()
        const lowerCasePlaylistName = playlistName.toLowerCase()
        const lowerCaseArtistName = artistName.toLowerCase()

        return contains(searchBarValue, lowerCasePlaylistName) || contains(searchBarValue, lowerCaseArtistName)
    })

    playlistsList.textContent = ''

    searchBar.value === ''
        ? renderPlaylists(createdPlaylists)
        : renderPlaylists(searchedPlaylists)
})
