import React, {useEffect, useState} from 'react';
import UserCard from './UserCard';


function BigContainer({darkMode}) {
    const [gitUser, setGitUser] = useState([]);

    useEffect(() => {
        fetch("https://api.github.com/users")
        .then(res => res.json())
        .then( data => {
            setGitUser(data)
        })
    }, [gitUser])
    const style = {
        width: 100 + "%",
        // backgroundColor: darkMode ? "white" : "black"
    }
    return (
        <div className='d-flex justify-content-center align-items-center flex-wrap' style={style}>
           {
            gitUser ? 
            gitUser.map(user => {
                return <UserCard user={user} key={user.id} darkMode={darkMode} />
            })
            :
            <h4>No Users Yet Try Refreshing...</h4>
           } 
        </div>
    )
}

export default BigContainer