import React, { Component } from 'react';

// MUI
import { withStyles } from '@material-ui/core/styles';

// Local
import { styles } from "./NavBar.styles.js";

class CategoryOne extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <img className={classes.categoryTwoImage} src={require('./blueWaterColor.jpg')} alt="Projects" />
                <span className={classes.categoryNameTwo}>Personal Projects</span>
            </div>
        );
    }
}

export default withStyles(styles)(CategoryOne);