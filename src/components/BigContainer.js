import React, {useEffect, useState} from 'react';
import UserCard from './UserCard';

function BigContainer() {
    const [gitUser, setGitUser] = useState([]);

    useEffect(() => {
        fetch("https://api.github.com/users")
        .then(res => res.json())
        .then( data => {
            setGitUser(data)
        })
    }, [gitUser])
    return (
        <div className='d-flex justify-content-center align-items-center flex-wrap' style={{width: 100 + "%"}}>
           {
            gitUser.map(user => {
                return <UserCard user={user} key={user.id} />
            })
           } 
        </div>
    )
}

export default BigContainer