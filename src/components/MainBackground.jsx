import React, { Component } from 'react';

// MUI
import { withStyles } from '@material-ui/core/styles';

// Local
import { styles } from "./NavBar.styles.js";
import ContactMe from "./ContactMe";

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
                <img className={classes.backgroundImage} src={require('./waterColor.jpg')} alt="Love What You Do" />
                <span className={classes.name}>Rachel Hofer</span>
                <span className={classes.title}>UI Software Engineer</span>
                {/* <ContactMe /> */}
            </div>
        );
    }
}

export default withStyles(styles)(MainBackground);