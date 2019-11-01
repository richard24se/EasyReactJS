import React, { Component, Fragment } from 'react';

import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const pedo = "pedo"

class Form1 extends Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    state = {
        numeroCelular: ""
    }
    
    handleChange(e) {
        var value = e.target.value;
        console.log(value)
        this.setState({numeroCelular: value})

    }

    render() { 
        return ( 
        <Fragment>
            <TextField
            id="standard-basic"
            label="Número celular"
            margin="normal"
            variant="outlined"
            helperText="Acá ingresa sólo tu celular"
            onChange={this.handleChange}
            value={this.state.numeroCelular}
            />
            <Typography variant="h2" gutterBottom>
                {this.state.numeroCelular}
            </Typography>
            <Typography variant="h3" gutterBottom>
                {this.state.numeroCelular}
            </Typography>
            <Typography variant="h4" gutterBottom>
                {this.state.numeroCelular}
            </Typography>
        </Fragment>



         );
    }
}
 

export default Form1;