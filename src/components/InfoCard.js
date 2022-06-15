import { Routes, Route, Link } from 'react-router-dom'
import "../styles/info-card.css"
function InfoCard(props) {
    return (
        <div className='info-card'>
            {/* <a href="/home">{props.name}</a> */}
            <Link className="link-tag" to="/register">{props.name}</Link>
        </div>
        
    );
}

export default InfoCard;