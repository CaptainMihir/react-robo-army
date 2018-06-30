import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {

    const Cardarr = robots.map((robo,i)=>{
        return <Card key={robots[i].id} id={robots[i].id} name={robots[i].name} email={robots[i].email}/> ;

    });
  return (
              <div>
               {Cardarr}
              </div>
  );
}

export default CardList;
