import "../styles/info-card.css"
function InfoCard(props) {
    return (
        <div className='info-card'>
            <a href="/login">{props.name}</a>
        </div>
    );
}

export default InfoCard;