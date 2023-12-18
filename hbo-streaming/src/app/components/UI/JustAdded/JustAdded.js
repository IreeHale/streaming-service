import './JustAdded.scss';


const  JustAdded= (props) => {
    const loopComp = (comp, digit) => {
        let thumbnails = [];
        for(let index = 1; index <= digit; index++){
            thumbnails.push(comp)
        }

        return thumbnails;
    }

    return (
        <div className="Just-added">
            <h3 className="Just-added__title">For You</h3>
                <div className="Just-added__thumbnails">

                    {loopComp(
                        (<div className="Just-added__thumbnail">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH9zozMJhrN_MYP9mwKIF6KMXFsUfAQB51rkITvwYjogAEDkBDxF-r_84SOuiFTZ7sdO8&usqp=CAU"/>
                            <div className="Just-added__top-player">
                                <i className="bi bi-play-fill"/>
                            </div>
                        </div>), 3
                    )}
                </div>
        </div>
    )
}

export default JustAdded;