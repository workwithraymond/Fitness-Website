import React from 'react'


const SocialLinks = ({id,  href, icon, itemClass }) => {
 
            return (
              <li >
                <a href={href} target="_blank" rel="noopener noreferrer">
                <i className={`social-icon ${icon} ${id === 2 ? 'youtube-color' : id === 1 ? 'facebook-color' : id === 3 ? 'instagram-color' : id === 4 ? 'snapchat-color' : ''}`} />
              </a>  
              </li>
            
          )
          };

      
export default SocialLinks