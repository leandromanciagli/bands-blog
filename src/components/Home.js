import React from 'react'

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
                allowfullscreen="" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
                title="ultimo-lanzamiento"
            >
            </iframe>
        </div>
        
        <div className='video'>
            <iframe width="900" height="500" src="https://www.youtube.com/embed/bycUbnAX5hM?si=88sizyuhNmLBcjur" title="video1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    
        <div className='video'>
            <iframe width="900" height="500" src="https://www.youtube.com/embed/RLs9srgNfqg?si=R01X0A4hR1jeU5RM" title="video2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </div>
  )
}