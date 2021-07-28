import React, { Component } from 'react';

class Game extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state= {
    //         button:['','','','','','','','',''],
    //         turn:false,
    //         onclick_button:true,
    //         index_history:0,
    //         history_all:[],
    //     }
    // }
    clickButtonGame= (index) => {
        this.props.clickButtonGame(index);
    }

    renderGame = () => {
        // console.log(this.state);
        const buttons=this.props.button;
        const element = buttons.map((item,index) => {
            // console.log(index);
            return (
                // <div className="col-xl-4 col-sm-4">
                    <input className="button_game" type="button" key={index} value ={item} onClick={()=>this.clickButtonGame(index)} />
                // </div>
            )
        });
        return element;
    }

    
   
    render() {
        return (
            <div style={{width:"300px"}}>
                <div className="col-xl-6">
                    {this.renderGame()}
                </div>
            </div>
        );
    }
}

export default Game;