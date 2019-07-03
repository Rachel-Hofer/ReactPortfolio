import React, { Component } from 'react';

// MUI
import { withStyles } from '@material-ui/core/styles';

// Local
import { styles } from "./NavBar.styles.js";

class CategoryFour extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <img className={classes.categoryFourImage} src={require('./biggerSpill.png')} alt="Other" />
                {/* <span className={classes.categoryThreeName}>Professional Background</span> */}
            </div>
        );
    }
}

export default withStyles(styles)(CategoryFour);