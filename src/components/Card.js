import React from 'react';

const Card = (props) => {

   const{id,name,email}=props;
        return (
            <div className="tc bg-light-green dib br3 pa3 ma2 grow bw-2 shadow-5">
              <img src={`https://robohash.org/${id}?150x150`} alt="robo_img" />
              <div>
               <h2>{name}</h2>
               <p>{email}</p>
              </div>
            </div>
        );
}
export default Card;
