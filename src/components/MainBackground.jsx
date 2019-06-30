import React, { Component } from 'react';

// MUI
import { withStyles } from '@material-ui/core/styles';

// Local
import { styles } from "./NavBar.styles.js";

class MainBackground extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.backgroundImageDiv}>
                <img className={classes.backgroundImage} src={require('./loveWhatYouDo.jpg')} alt="Love What You Do" />
            </div>
        );
    }
}

export default withStyles(styles)(MainBackground);