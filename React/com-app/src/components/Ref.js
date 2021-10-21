import React, {Component} from "react";

class Ref extends Component {
    constructor() {
        super();
        this.textInput = React.createRef();
    }

    focusText = () => {
        const x = this.textInput.current.value;
        console.log(x);
    }

    render() {
        return(
            <React.Fragment>
            <input ref={this.textInput} />
            <button onClick={this.focusText}>Click Me!</button>
            </React.Fragment>
        )
    }
}

export default Ref;