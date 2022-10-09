import React, {useEffect, useState} from 'react';
import UserCard from './UserCard';


function BigContainer({darkMode, showGitUser}) {
    
    const style = {
        width: 100 + "%"
    }
    return (
        <div className='d-flex justify-content-center align-items-center flex-wrap' style={style}>
           {
            showGitUser ? 
            showGitUser.map(user => {
                return <UserCard user={user} key={user.id} darkMode={darkMode} />
            })
            :
            <h5>No Users Yet Try Refreshing...</h5>
           } 
        </div>
    )
}

export default BigContainer