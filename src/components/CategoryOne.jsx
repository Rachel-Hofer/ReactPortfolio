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
                <img className={classes.categoryOneImage} src={require('./AboutMe.png')} alt="About Me" />
                <span className={classes.categoryName}>Professional Background</span>
                {/* <span className={classes.title}>UI Software Engineer</span> */}
            </div>
        );
    }
}

export default withStyles(styles)(CategoryOne);