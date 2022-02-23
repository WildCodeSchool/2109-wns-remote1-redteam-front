import { AvatarGroup, Avatar } from '@mui/material';
import React from 'react';


const AvatarList = () => {
    console.log('AvatarList props');
    const members = [
        {
            id: 1,
            name: 'Travis Howard',
            image: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        },
        {
            id: 2,
            name: 'Remy Sharp',
            image: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        },
        {
            id: 3,
            name: 'Remy Sharp',
            image: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        },
        {
            id: 4,
            name: 'Agnes Walker',
            image: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        },
        {
            id: 5,
            name: 'Trevor Henderson',
            image: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        }
    ]
    
    return (
        <div>
            <AvatarGroup max={4}>
                {
                  members.map(member =>
                      <Avatar key={member.id} alt={member.name} src={member.image} />
                  )
                }
            </AvatarGroup>
        </div>
    );
}

export default AvatarList;