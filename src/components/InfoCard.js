import "../styles/info-card.css"
import { Routes, Route, Link } from 'react-router-dom'
import { GoogleAuthProvider,FacebookAuthProvider } from 'firebase/auth';
import {getAuth,signInWithRedirect} from "firebase/auth"
import { auth } from "../firebase-config";

// const provider = new GoogleAuthProvider();

function InfoCard(props) {
    return (
        <div className='info-card'>
            <Link className="link-tag" to="/register">{props.name}</Link>
        </div>

    );
}

export default InfoCard;