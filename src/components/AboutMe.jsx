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
            <div className={classes.aboutMe}>
                <h1 className={classes.titleName}>
                    Quarantine Journal
                </h1>
            </div>
        );
    }
}

export default withStyles(styles)(AboutMe);