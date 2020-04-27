import React, { Component } from 'react';
// import { Router, Link } from "react-router-dom";

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
                    <a href={'https://www.instagram.com/rachel.hofer/'}><Instagram className={classes.icon} /> </a>
                </Tooltip>
                <Tooltip title="LinkedIn" placement="bottom">
                    <a href={'https://www.linkedin.com/in/rachel-hofer/'}><LinkedinBox className={classes.icon} /></a>
                </Tooltip>
                <Tooltip title="GitHub" placement="bottom">
                    <a href={'https://github.com/Rachel-Hofer'}><GithubBox className={classes.icon} /></a>
                </Tooltip>
                <Tooltip title="Resume" placement="bottom">
                    <a href={'https://docs.google.com/document/d/17F5xdlhEqq5PceTi2IPI8jQX_Ho_d9-VScnWZfq8w34/edit?usp=sharing'}><NoteOutline className={classes.icon} /></a>
                </Tooltip>
            </div>
        );
    }
}

export default withStyles(styles)(MainBackground);