function Card(props) {
    return (
        <section className="card--section">
            <div className="card--section--img">
                <img className="card--katie--img" src={props.img} alt="airbnb-pic" />
                {/* <div className="card--section--overlay">SOLD OUT</div> */}
            </div>
            <div className="card--section--text">
                <div className="card--section--starandtext">
                    <img className="card--star--img" src="star-icon.png" alt="Star-icon" />
                    <p>{props.rating}</p>
                    <p className="card--section--firstP">({props.views}) &#x2022;{props.location}</p>
                </div>
                <p className="card--section--secondP">{props.title}</p>
                <div className="card-section--doubleP">
                    <p className="card--section-thirdP">From ${props.price} /</p>
                    <p>person</p>
                </div>
            </div>
        </section>
    )
}

export default Card