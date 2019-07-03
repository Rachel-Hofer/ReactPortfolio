import React, { Component } from 'react';

// MUI
import { withStyles } from '@material-ui/core/styles';
import { Instagram, LinkedinBox, NoteOutline } from "mdi-material-ui";
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
                <Tooltip title="Instagram" placement="bottom" interactive={true} backgroundColor="rgb(28, 58, 228)">
                    <Instagram className={classes.icon} />
                </Tooltip>
                <Tooltip title="LinkedIn" placement="bottom">
                    <LinkedinBox className={classes.icon} />
                </Tooltip>
                <Tooltip title="Resume" placement="bottom">
                    <NoteOutline className={classes.icon} />
                </Tooltip>
            </div>
        );
    }
}

export default withStyles(styles)(MainBackground);