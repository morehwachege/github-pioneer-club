import React from 'react'

function UserCard({user}) {
    return (
        <div className="card m-3" style={{width: 18 + 'rem'}}>
            <img className="card-img-top" src={user.avatar_url} alt={`${user.login}'s github avatar image`} />
                <div className="card-body">
                    <h5 className="card-title">{user.login}</h5>
                    <p className="card-text">{user.name ? user.name : ''}</p>
                    <a href={user.html_url} className="btn btn-warning">See full profile</a>
                </div>
        </div>
    )
}

export default UserCard