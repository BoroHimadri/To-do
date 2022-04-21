import React from "react";
import "./Todo.css";
class Todo extends React.Component{
    state = {
        sl_no: " ",
        work : " ",
    };

    add= (e)=>{
        e.preventDefault();
        if(this.state.work=== "" ){
            alert("Fileds are mandatory");
            return;
        }
        this.props.addTodoHandler(this.state);
        this.setState({sl_no:" "});
        this.setState({work:" "});
        //console.log(this.state);
    }
    render(){
    return(
        <div>
           <form className="ui form" onSubmit={this.add}>
                <div className="field">
                    <label id="new">Add new</label>
                        <input type="text" required 
                        value={this.state.work}
                        onChange={(e) =>this.setState({work:e.target.value}) }
                        />
                </div> 
                <button id="but" className="ui primary button">Add</button>
            </form>
        </div>
    );
}
}
export default Todo;