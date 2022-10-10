import React from 'react'
import { useNavigate } from "react-router-dom";

function UserCard({ user, darkMode }) {
    let navigate = useNavigate();
    function handleSingleUserClick() {
        navigate(`/users/${user.id}`)
    }
    // console.log(user)
    return (
        <div className="card m-3" style={{ width: 18 + 'rem', background: darkMode ? 'white' : 'black' }}>
            <img className="card-img-top" src={user.avatar_url} alt={`${user.login}'s github avatar`} />
            <div className="card-body d-flex justify-content-center align-items-center flex-column">
                <h5 className="card-title">{user.login}</h5>
                <p className="card-text">{user.name ? user.name : ''}</p>
                <a className="btn btn-warning" onClick={handleSingleUserClick} >See full profile</a>
            </div>
        </div>
    )
}

export default UserCard