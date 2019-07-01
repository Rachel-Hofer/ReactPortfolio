export const styles = theme => ({
    navBar: {
        height: "6vh",
        backgroundColor: "rgba(0,0,0,0.9)",
        position: "fixed",
        display: "flex",
        justifyContent: "center"
    },
    menuIcon: {
        color: "#ffffff"
    },
    backgroundImage: {
        width: "50%",
        marginTop: '20vh',
        position: "absolute",
        zIndex: "5",
        cursor: "pointer",
        transition: "all .2s ease-in-out",
        "&:hover": {
            transform: "scale(1.1)",
        },
    },
    backgroundImageDiv: {
        display: "flex",
        justifyContent: "center"
    },
    name: {
        fontFamily: "Caveat, cursive",
        marginTop: '46vh',
        fontSize: "90px",
        position: "absolute",
        zIndex: "10"
    },
    title: {
        fontFamily: "Open sans",
        marginTop: '56vh',
        fontSize: "30px",
        position: "absolute",
        zIndex: "10",
        marginLeft: "10px"
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
    }
})