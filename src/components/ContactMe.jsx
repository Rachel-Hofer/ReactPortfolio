import React, { Component } from 'react';
import { Link } from "react-router-dom";

// MUI
import { withStyles } from '@material-ui/core/styles';
import { Instagram, LinkedinBox, NoteOutline, GithubBox } from "mdi-material-ui";
import Tooltip from '@material-ui/core/Tooltip';

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
            <div className={classes.iconRow}>
                <Tooltip title="Instagram" placement="bottom">
                    <Instagram className={classes.icon} /> <Link to={'https://www.instagram.com/rachel.hofer/'}></Link>
                </Tooltip>
                <Tooltip title="LinkedIn" placement="bottom">
                    <LinkedinBox className={classes.icon} />
                </Tooltip>
                <Tooltip title="GitHub" placement="bottom">
                    <GithubBox className={classes.icon} />
                </Tooltip>
                <Tooltip title="Resume" placement="bottom">
                    <NoteOutline className={classes.icon} />
                </Tooltip>
            </div>
        );
    }
}

export default withStyles(styles)(MainBackground);