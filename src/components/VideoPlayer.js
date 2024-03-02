import React from 'react'
import { useState } from 'react';

let album1 = 'La fiebre del oro'
let album2 = 'Registros de otoño'

const videos = [
    { id: 1, title: 'Voces profanas', album: album1, url: 'https://www.youtube.com/embed/bycUbnAX5hM?si=1LqUPfllph_Fi8g6?autoplay=0&mute=1&loop=1', duration: '03:23' },
    { id: 2, title: 'Los caminos del aire', album: album1, url: 'https://www.youtube.com/embed/RLs9srgNfqg?si=3XbVaZ_T2tMaIJaH?autoplay=0&mute=1&loop=1', duration: '03:13' },
    { id: 3, title: 'Pacto suicida', album: album2, url: 'https://www.youtube.com/embed/S-UnPPSSxR0?si=hqfAnQ1UXr43nDG-?autoplay=1&mute=1&loop=1', duration: '03:28' },
    { id: 4, title: 'Entre humo y botellas', album: album2, url: 'https://www.youtube.com/embed/7PZEYAlXM3s?si=wzsjDgFQeJqxLWlT?autoplay=1&mute=1&loop=1', duration: '03:44' },
];

export default function VideoPlayer() {
    const [selectedVideo, setSelectedVideo] = useState(videos[0]);

    const videosList = videos.map(video =>
        <li
            key={video.id}
            className='video-list-row'
            onClick={() => changeVideo(video)}
        >
            <div className='video-list-number'>
                {video.id}
                <i class="fas fa-play" aria-hidden="true"></i>

            </div>
            <div className='video-list-item'>
                <div>{video.title}</div>
                <div>{video.album}</div>
            </div>
            <div className='video-list-duration'>{video.duration}</div>
        </li>
    );

    function changeVideo(video) {
        setSelectedVideo(video)
    }

    return (
        <div className='video-player'>
            <div className='video'>
                <iframe
                    width="900"
                    height="500"
                    src={selectedVideo.url}
                    title="video1"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; mute; loop" allowFullScreen
                ></iframe>
            </div>
            <ul className='video-list'>{videosList}</ul>
        </div>
    )
}
