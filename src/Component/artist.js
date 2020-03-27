import React from 'react';

export const Artist = ({artist}) => {
    if(!artist) return null;
const {images,name, followers} = artist
    return (
        <div className="text-center">
           <img 
            src={images[0] && images[0].url} alt={name}
            style={{
                width:200,
                height:200,
                borderRadius:100,
                marginTop:20
            }}
            
            />
           <h3  style={{marginTop:20}}> {name}</h3>
           <p>
            {followers.total} followers
           </p>
        </div>
    )
}


