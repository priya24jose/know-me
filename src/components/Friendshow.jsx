  
import React from 'react';
import './friend.css';

const FriendShow = ({title,imageUrl}) => (
    <div className="friend">
        <img src={imageUrl} style={{width:'50%'}}/>
        <h2>{title}</h2>
       
            
        

    </div>
)

export default FriendShow;