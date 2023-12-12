import './ForYouList.scss';


const ForYouList = () => {
    const loopComp = (comp, digit) => {
        let thumbnails = [];
        for(let index = 1; index <= digit; index++){
            thumbnails.push(comp)
        }

        return thumbnails;
    }

    return (
        <div className="foryou-list">
            <h3 className="foryou-list__title">For You</h3>
                <div className="foryou-list__thumbnails">
                    {loopComp(
                        <div className="foryou-list__thumbnail">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH9zozMJhrN_MYP9mwKIF6KMXFsUfAQB51rkITvwYjogAEDkBDxF-r_84SOuiFTZ7sdO8&usqp=CAU" />
                            <div className="foryou-list__top-player">
                                <i className="bi bi-play-fill"/>
                            </div>
                        </div>, 10
                    )}
                </div>
        </div>
    )
}

export default ForYouList;