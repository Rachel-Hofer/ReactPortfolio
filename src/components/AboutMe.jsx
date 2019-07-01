import React, { Component } from 'react';

// MUI
import { withStyles } from '@material-ui/core/styles';

// Local
import { styles } from "./NavBar.styles.js";

class AboutMe extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <div className={classes.spaceFiller}></div>
                <div className={classes.flexContainer}>
                    <li className={classes.flexItem}>ONE</li>
                    <li className={classes.flexItem}>TWO</li>
                    <li className={classes.flexItem}>THREE</li>
                    <li className={classes.flexItem}>FOUR</li>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(AboutMe);