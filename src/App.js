import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Game from './components/Game/Game';

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      button:['','','','','','','','',''],
      turn:false,
      onclick_button:true,
      index_history:0,
      history_all:[{button:['','','','','','','','','']},],
    };
  }
  
  clickButtonGame= (index)=>{
    console.log(this.state.index_history,this.state.history_all);
   
    if(this.state.onclick_button===false) return;
    
    let value = '';
    if(this.state.turn===true) value = 'X';
    else value = 'O';
    const new_button=this.state.button;
    
    if(new_button[index]===''){
     
      if(this.state.index_history<=this.state.history_all.length-1){
        let reset_history = this.state.history_all;
        console.log(this.state.index_history,this.state.history_all.length);
        reset_history.splice(this.state.index_history+1);
        console.log(this.state.history_all,reset_history);
     
         this.setState({history_all:reset_history});
        //  return;
      }

        new_button[index]=value;
        // console.log(new_button);
     
        const new_index_history=this.state.index_history+1;
        const history_all=this.state.history_all;
        this.setState({button:new_button,turn:!this.state.turn,index_history:new_index_history});
        const new_btn=this.state.button;
        const history_all_new=history_all.concat([{button:[...new_btn]}]);
        // console.log(history_all_new);
        this.setState({history_all:history_all_new});
        // console.log(this.state.history_all);
        if(this.calculateWinner(this.state.button)){
            this.setState({
                onclick_button:false,});
            alert(value +' win');
        }
    }
}

pre= () => {

  console.log('pre-----------------------');

  let number_index_current= this.state.index_history;
  console.log(number_index_current,this.state.history_all);
  if(number_index_current>0 &&number_index_current<=10){

    let number= number_index_current-1;
    let arr_history=this.state.history_all;

    if(arr_history.length>=number){

      const current_button = [...arr_history[number]['button']];
      // console.log(current_button['button']);
      this.setState({button:current_button,index_history:number});
     
    }
    
  }
}
next= () => {
  let number_index_current= this.state.index_history;
 

  if(number_index_current>=0&&number_index_current<10){
    let number= number_index_current+1;
 
    let arr_history=this.state.history_all;
    if(arr_history.length>number){
      const current_button = [...arr_history[number]['button']];
      // console.log(arr_history.length,number,arr_history,current_button);
      // console.log(current_button,number);

      this.setState({button:current_button,index_history:number});
    }
  }
}
resetGame= () => {
    this.setState({
      button:['','','','','','','','',''],
      turn:false,
      onclick_button:true,
      index_history:0,
      history_all:[{button:['','','','','','','','','']},],
    });
}
calculateWinner=(button) =>{
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (button[a] && button[a] === button[b] && button[a] === button[c]) {
      return button[a];
    }
  }
  return null;
}
  render() {
   
    return (
      
      <div>
        <Game button={this.state.button} index_history= {this.state.index_history} clickButtonGame= {(index) => this.clickButtonGame(index)}  history_all= {this.state.history_all}   />
        <div className="col-xl-6 clear_both">
          <div>

            <input className="" type="button"  value ='pre' onClick={()=>this.pre()} />
            <input className="" type="button"  value ='next' onClick={()=>this.next()} />
          </div>
          <div>
            <input className="" type="button"  value ='reset game' onClick={()=>this.resetGame()} />
          </div>
         
        </div>
       
      </div>
    );
  }
}

export default App;