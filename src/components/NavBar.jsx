import React, { Component } from 'react';

// MUI
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Menu } from "mdi-material-ui";

// Local
import { styles } from "./NavBar.styles.js";

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <AppBar className={classes.navBar}>
                    <Toolbar>
                        <Typography variant="h6">
                            <Menu />
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(styles)(NavBar);