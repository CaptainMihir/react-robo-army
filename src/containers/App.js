import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends React.Component {

   constructor(){
      super();
      this.state = {
        robots:[],
        searchfield:""
      }

   }

   componentDidMount(){
     fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
       return response.json();
     }).then((roboarr)=>{
         this.setState({robots:roboarr});
     })
   }

   onSearchChange = (event) => {
        this.setState({searchfield:event.target.value})
   }

    render(){

      const filteredRobots = this.state.robots.filter((robo)=>{
          return robo.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
      })

      if(this.state.robots.length===0)
       {
         return <h1>Loading....</h1>
       }
       else{
      return(
               <div className="tc">
               <h1 className="f1">The ROBO Army </h1>
               <SearchBox searchChange={this.onSearchChange}/>
               <Scroll>
                 <CardList robots={filteredRobots}/>
               </Scroll>
               </div>
        );
      }
    }

}
export default App;
