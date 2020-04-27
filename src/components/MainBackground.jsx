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
            <div className={classes.main}>
                <div className={classes.backgroundImageDiv}>
                    <img className={classes.backgroundImageOne} src={require('./bike2.jpg')} alt="OceanDriveBike" />
                    <img className={classes.backgroundImageOne} src={require('./journal.jpg')} alt="Journal" />
                    <img className={classes.backgroundImageOne} src={require('./me.png')} alt="BridgeBike" />
                </div>
                <div className={classes.backgroundImageDiv}>
                    <img className={classes.backgroundImageTwo} src={require('./bath.jpg')} alt="Bath" />
                    <img className={classes.backgroundImageTwo} src={require('./balcony.jpg')} alt="Balcony" />
                </div>
                <div className={classes.backgroundImageDiv}>
                    <img className={classes.backgroundImageThree} src={require('./bangs.png')} alt="Bangs" />
                    <img className={classes.backgroundImageThree} src={require('./chess.png')} alt="Chess" />
                    <img className={classes.backgroundImageThree} src={require('./bridgebike.jpg')} alt="Bike" />
                </div>
                <div className={classes.backgroundImageDiv}>
                    <img className={classes.backgroundImageTwo} src={require('./color.jpg')} alt="Color" />
                    <img className={classes.backgroundImageTwo} src={require('./hollis.jpg')} alt="Books" />
                </div>
                <div className={classes.backgroundImageDiv}>
                    <img className={classes.backgroundImageFour} src={require('./monopoly.jpg')} alt="Bangs" />
                    <img className={classes.backgroundImageFour} src={require('./run.jpg')} alt="Chess" />
                    <img className={classes.backgroundImageFour} src={require('./food.jpg')} alt="Bike" />
                </div>
                <div className={classes.backgroundImageDiv}>
                    <img className={classes.backgroundImageTwo} src={require('./cat.jpg')} alt="Color" />
                    <img className={classes.backgroundImageTwo} src={require('./couch.jpg')} alt="Books" />
                </div>
                {/* <div className={classes.backgroundImageDiv}>
                    <ContactMe />
                </div> */}
            </div>
        );
    }
}

export default withStyles(styles)(MainBackground);