const musicPlayerController = document.querySelector('.music-player__controller')

musicPlayerController.addEventListener('click', ({target}) => {
    if (target.getAttribute('alt') === 'Shuffle' || target.getAttribute('alt') === 'Replay') {
        target.style.filter = target.style.filter === 'drop-shadow(var(--shadow-red))' ? 'none' : 'drop-shadow(var(--shadow-red))'
    }
})

const volumeIndicator = document.querySelector('.music-player__volume')
const volumeBar = document.querySelector('.music-player__volume-bar input')

volumeIndicator.addEventListener('click', ({target}) => {
    const volumeIconsPath = {
        volumeUp: '/src/assets/icons/google/player/volume_up_white_24dp.svg',
        volumeDown: '/src/assets/icons/google/player/volume_down_white_24dp.svg',
        volumeOff: '/src/assets/icons/google/player/volume_off_white_24dp.svg'
    }

    const currentVolumeIconPath = target.getAttribute('src')

    if (currentVolumeIconPath === volumeIconsPath.volumeUp || currentVolumeIconPath === volumeIconsPath.volumeDown) {
        volumeBar.dataset.volumeValue = volumeBar.value
        volumeBar.value = 0
        
        target.setAttribute('src', volumeIconsPath.volumeOff)
    } else if (currentVolumeIconPath === volumeIconsPath.volumeOff) {
        volumeBar.value = volumeBar.dataset.volumeValue

        target.setAttribute('src', volumeIconsPath.volumeUp)
    }
})