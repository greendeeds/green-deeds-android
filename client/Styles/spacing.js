// S P A C I N G 

import Colors from './colors';

const Spacing = {
    
    // parent for everything on the screen
    backgroundContainer: {
        backgroundColor: Colors.WHITE,
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },

// LOGIN SCREEN CONTAINERS
    // top of screen/logo
    logoContainer: {
        height: "60%",
        width: "100%",
        backgroundColor: Colors.WHITE,
        justifyContent: "space-evenly", 
        alignItems: "center",
        paddingTop: "15%",
    },

    // parent for set of text inputs (username/pw) and login button
    loginContainer: {
        height: "30%",
        width: "100%",
        backgroundColor: Colors.WHITE,
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: "5%",
    },

    // parent for links at bottom of the screen
    bottomNavContainer: {
        height: "10%",
        width: "100%",
        backgroundColor: Colors.PRIMARY,
        justifyContent: "center",
    },


// HOME SCREEN
    topContainer: {
      height: "30%",
      width: "100%",
      backgroundColor: Colors.WHITE,
      justifyContent: "space-evenly",
      alignItems: "center",
    },

    childToptext: {
        height: "20%",
        backgroundColor: Colors.WHITE,
        alignItems: "center", 
        justifyContent: "center",
        paddingBottom: "8%",
        
    },    

    childTopbuttons: {
        height: "15%",
        backgroundColor: Colors.WHITE,
        flexDirection: "row",
        alignItems: "center", 
        justifyContent: "center",
      },

      childCelo: {
        height: "10%",
        width: "100%",
        backgroundColor: Colors.WHITE,
        justifyContent: "center",
       
      },
    
      childCeloButton: {
        height: "15%",
        width: "100%",
        backgroundColor: Colors.WHITE,
        flexDirection: "row",
        alignItems: "center", 
        justifyContent: "center",
      },
    
      childDifference: {
        height: "10%",
        width: "100%",
        backgroundColor: Colors.WHITE,
        justifyContent: "center",
        alignItems: "center",
       
      }, 
    
      childDifferenceButton: {
        height: "15%",
        width: "100%",
        backgroundColor: Colors.WHITE,
        flexDirection: "row",
        alignItems: "center", 
        justifyContent: "center",
      },
    
      childLogout: {
        height: "10%",
        width: "100%",
        backgroundColor: Colors.WHITE,
        alignItems: "center", 
        justifyContent: "flex-end",
        //paddingBottom: "5%",
      },
    

////////////////////////////////////
// THE LESSER CHILDREN
////////////////////////////////////
    // lines up text and clickables in bottomNavContainer
    bottomTextContainer: {
        flexDirection: "row",
        justifyContent: "center",
    },

    // makes a pretty box to accept username/pw info
    textInputContainer: {
        width: 290,
        height: 35,
        backgroundColor: Colors.WHITE,
        borderColor: Colors.TERTIARYdark,
        borderBottomStartRadius: 2,
        borderWidth: .75,
        borderRadius: 3,
        margin: 5,
        paddingHorizontal: 7,
        paddingTop: 2,
    },

  
};

export default Spacing


