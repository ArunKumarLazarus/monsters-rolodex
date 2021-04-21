import React,{Component} from 'react';

import './App.css';
import {CardList} from './component/card-list/cards-list.component.jsx';
import {SearchBox} from './component/search-box/search-box.component.jsx';




class App extends Component{
  constructor(){
    super();
    // this.state={string:'Arun'};
    this.state={
    monsters:[],
    searchFiled:''
  };
  this.handleChange=this.handleChange.bind(this);
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({monsters:users}));
  }

  handleChange=e=>
  {
    this.setState({searchFiled:e.target.value})
  }

  render(){
    const{monsters,searchFiled}=this.state;
    const filteredMonsters=monsters.filter(monster=>monster.name.toLowerCase().includes(searchFiled.toLowerCase()));
    return(
    <div className="App">
    <SearchBox
    placeholder='search monsters'
    handleChange={this.handleChange}
    />
    <CardList monsters={filteredMonsters}/>
    </div>
    );
  }
}
export default App;

