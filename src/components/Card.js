function Card() {
    return (
        <section className="card--section">
            <div className="card--section--img">
                <img className="card--katie--img" src="./katie-zaferes.png" alt="Katie Zaferes picture" />
                <div className="card--section--overlay">SOLD OUT</div>
            </div>
            <div className="card--section--text">
                <div className="card--section--starandtext">
                    <img className="card--star--img" src="./star-icon.png" alt="Star-icon" />
                    <p>5.0</p>
                    <p className="card--section--firstP">(6) &#x2022;USA</p>
                </div>
                <p className="card--section--secondP">Life lessons with Katie Zaferes</p>
                <div className="card-section--doubleP">
                    <p className="card--section-thirdP">From $136 /</p>
                    <p>person</p>
                </div>
            </div>
        </section>
    )
}

export default Card