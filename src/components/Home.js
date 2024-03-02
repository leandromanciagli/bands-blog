import React from 'react'
import VideoPlayer from './VideoPlayer';

export default function Home() {
    return (
        <div>
            <div className='ultimo-lanzamiento'>
                <h1 className='bebas-neue-regular ultimo-lanzamiento-title'>Escuchá nuestro último lanzamiento</h1>
                <iframe 
                    style={{borderRadius: '12px'}}
                    src="https://open.spotify.com/embed/track/5mNkDizpIDIX90SDJbyxY9?utm_source=generator" 
                    width="50%" 
                    height="152" 
                    frameBorder="0" 
                    allowFullScreen="" 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                    loading="lazy"
                    title="ultimo-lanzamiento"
                >
                </iframe>
            </div>
            <VideoPlayer />
            <div >
                <a className="social-media-icon" href="https://www.youtube.com/@orfebres" target="_blank">
                    {/* <i className="fa fa-instagram" aria-hidden="true"></i> */}
                    Instagram
                </a>
            </div>
        </div>
    )
}