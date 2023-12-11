import './FeaturedMedia.scss'; 

const FeaturedMedia = (props) => {
    return (
        <div className="featured-media">
            <iframe 
            width="100%"
            height="100%"

            src="https://www.youtube.com/embed/QJHY4ggYCk4?start=16&autoplay=1&controls=0&mute=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
             allowFullScreen/>
            <div className="featured-media__bg">
                <div className="featured-media__container">
                    <div className="featured-media__title">Mortal Kombat</div>
                    <div className="featured-media__playing">NOW PLAYING</div>
                    <div className="featured-media__location">In theaters and on HBO MAX. 
                    Streaming throughout May 23.</div>
                    <div className="featured-media__buttons">
                        <div className="featured-media__play-btn">
                            <i className="bi bi-play-fill"></i>
                        </div>
                        <div className="featured-media__info-btn">MORE INFO</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedMedia;