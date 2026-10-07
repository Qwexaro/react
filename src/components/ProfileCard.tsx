import React from 'react';


let ProfileCard = (): React.JSX.Element =>
  < section className='profile-card' >
    <div className='profile'>
      <div className='avatar'>
        avatar
      </div>
      <div className='profile-info'>
        <h2>Name</h2>
        <p>@nick</p>
      </div>
    </div>

  </section >;



export default ProfileCard;
