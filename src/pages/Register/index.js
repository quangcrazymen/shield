import { Link } from 'react-router-dom'
import { db } from '../../firebase-config';
import { collection, getDocs, addDoc } from 'firebase/firestore/lite';
import { useState } from 'react';
import './style.css'
function Register() {
    const usersCollectionRef = collection(db, "Users")

    const [newName, setNewName] = useState("")
    const [newEmail, setNewEmail] = useState("")
    const [newPhone, setNewPhone] = useState(0)
    const [newGender, setNewGender] = useState("")
    const [newAge, setNewAge] = useState(0)
    const [newLogin, setNewLogin] = useState("")
    const [newPassword, setNewPassword] = useState("")

    const createUser = async () => {
        await addDoc(usersCollectionRef, {
            Name: newName,
            Email: newEmail,
            Phone: newPhone,
            Gender: newGender,
            Age: newAge,
            Login: newLogin,
            Password: newPassword
        })
    }

    return (
        <div className='Register'>
            <div className='register--backBtn'>
                <Link to="/welcome">
                    <svg  width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.5 18L1 9.5L9.5 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </Link>
            </div>
            <h1 className='register--title'>Đăng kí</h1>
            <input onChange={(event) => {
                setNewName(event.target.value)
            }}
                className='register--input'
                placeholder='Họ và tên'
            >
            </input>
            <input onChange={(event) => {
                setNewEmail(event.target.value)
            }}
                className='register--input'
                placeholder='Email'
                type="email"
            ></input>
            <input onChange={(event) => {
                setNewPhone(event.target.value)
            }}
                className='register--input'
                placeholder='Số điện thoại'
            >
            </input>
            <input onChange={(event) => {
                setNewGender(event.target.value)
            }}
                className='register--input'
                placeholder='Giới tính'
            ></input>
            <input onChange={(event) => {
                setNewAge(event.target.value)
            }}
                className='register--input'
                placeholder='Tuổi'
                type="number"
            ></input>
            <input onChange={(event) => {
                setNewLogin(event.target.value)
            }}
                className='register--input'
                placeholder='Tên đăng nhập'
            ></input>
            <input onChange={(event) => {
                setNewPassword(event.target.value)
            }}
                className='register--input'
                placeholder='Mật khẩu'
            ></input>
            <Link to="/home"><button className='register--button' onClick={createUser}>ĐĂNG KÍ</button></Link>
        </div>
    );
}

export default Register;