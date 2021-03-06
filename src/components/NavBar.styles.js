export const styles = theme => ({
    navBar: {
        height: "6vh",
        backgroundColor: "rgba(0,0,0,0.9)",
        position: "fixed",
        display: "flex",
        justifyContent: "center"
    },
    main: {
        backgroundColor: 'black'
    },
    aboutMe: {
        backgroundColor: 'black',
        color: 'white',
        display: "flex",
        width: '100%',
        justifyContent: "center",
        paddingTop: '5vh',
        paddingBottom: '5vh',
    },
    titleName: {
        fontFamily: 'Monaco',
    },
    menuIcon: {
        color: "#ffffff"
    },
    backgroundImageDiv: {
        display: "flex",
        width: '100%',
        justifyContent: "center"
    },
    backgroundImageOne: {
        width: "29.8vh",
        marginTop: '1vh',
        marginRight: '10px',
        // flexGrow: 12,
        // position: "absolute",
        // zIndex: "5",
    },
    backgroundImageTwo: {
        height: "19vw",
        marginTop: '1vh',
        marginRight: '10px',
        // flexGrow: 12,
        // position: "absolute",
        // zIndex: "5",
    },
    backgroundImageThree: {
        height: "46vh",
        marginTop: '1vh',
        marginRight: '10px',
    },
    backgroundImageFour: {
        height: "44.3vh",
        marginTop: '1vh',
        marginRight: '10px',
    },
    backgroundImageFive: {
        height: "38vh",
        marginTop: '1vh',
        marginRight: '10px',
    },
    categoryOneImage: {
        width: "18%",
        marginTop: '7vh',
        position: "absolute",
        zIndex: "7",
        cursor: "pointer",
        transition: "all .2s ease-in-out",
        marginLeft: "20vw",
        "&:hover": {
            transform: "scale(1.1)",
        },
    },
    categoryName: {
        fontFamily: "Caveat, cursive",
        marginTop: '16vh',
        fontSize: "36px",
        position: "absolute",
        marginLeft: "22vw",
        zIndex: "10",
        cursor: "pointer",
        transition: "all .2s ease-in-out",
        "&:hover": {
            transform: "scale(1.1)",
            fontSize: "38px",
        },
    },
    categoryTwoImage: {
        width: "22%",
        marginTop: '70vh',
        position: "absolute",
        zIndex: "7",
        cursor: "pointer",
        transition: "all .2s ease-in-out",
        marginLeft: "70vw",
        "&:hover": {
            transform: "scale(1.1)",
        },
    },
    categoryNameTwo: {
        fontFamily: "Caveat, cursive",
        marginTop: '75vh',
        fontSize: "54px",
        position: "absolute",
        marginLeft: "69vw",
        zIndex: "10",
        cursor: "pointer",
        transition: "all .2s ease-in-out",
        "&:hover": {
            transform: "scale(1.1)",
            fontSize: "56px",
        },
    },
    categoryThreeImage: {
        marginTop: '32vh',
        position: "absolute",
        zIndex: "7",
        marginLeft: "70vw",
        width: "10vw"
    },
    categoryFourImage: {
        width: "34vh",
        marginTop: '45vh',
        position: "absolute",
        zIndex: "7",
        marginLeft: "16vw",
        transform: "rotate(-45deg)"
    },
    categoryFiveImage: {
        marginTop: '69vh',
        position: "absolute",
        zIndex: "7",
        marginLeft: "16vw",
        width: "13vh"
    },
    name: {
        fontFamily: "Caveat, cursive",
        marginTop: '44vh',
        fontSize: "90px",
        // position: "absolute",
        // zIndex: "10"
    },
    title: {
        fontFamily: "Open sans",
        marginTop: '54vh',
        fontSize: "30px",
        position: "absolute",
        zIndex: "10",
        marginLeft: "10px",
    },
    spaceFiller: {
        height: "100vh"
    },
    flexContainer: {
        padding: 0,
        margin: 0,
        listStyle: "none",
        display: 'flex',
        justifyContent: "space-around",
    },
    flexItem: {
        // background: "#D8F7FC",
        backgroundImage: "linear-gradient(to right, #D8F7FC, #59def3)",
        padding: "5px",
        width: "300px",
        height: "250px",
        marginBottom: "30px",
        lineHeight: "245px",
        color: "rgba(0,0,0,0.9)",
        fontWeight: "bold",
        fontSize: "3em",
        textAlign: "center",
        fontFamily: "Caveat, cursive",
        justifyContent: "center",
        boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
        cursor: "pointer",
        transition: "all .2s ease-in-out",
        "&:hover": {
            transform: "scale(1.1)",
        },
    },
    iconRow: {
        display: "flex",
        marginTop: '20px',
        bottom: 20,
        width: "200px",
        justifyContent: "space-between"
    },
    icon: {
        color: "rgba(0,0,0)",
        // backgroundImage: "linear-gradient(to right, #e7fcfd, #10cfd5)",
        fontSize: "5vh",
        borderRadius: "5px",
        transition: "all .2s ease-in-out",
        "&:hover": {
            transform: "scale(1.1)",
        },
    }
})