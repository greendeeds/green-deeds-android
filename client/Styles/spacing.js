// S P A C I N G 

import { color } from 'react-native-reanimated';
import Colors from './colors';

const Spacing = {
    
// parent for everything on the screen
    backgroundContainer: {
        backgroundColor: Colors.WHITE,
        justifyContent: "flex-end",
        alignItems: "center",
        flex: 1,
    },

    
//////////////////////////////
// HOME //
//////////////////////////////
  bannerContainer: {
    height: "90%",
    width: "100%",
    backgroundColor: Colors.WHITE,
    justifyContent: "space-evenly",
    alignItems: "center", 
  },   

  //first header and banners
  sectionOne: {
    height: "50%",
    width: "100%",
    backgroundColor: Colors.WHITE,
    marginTop: "5%",
  },

  //second header and banner
  sectionTwo: {
    height: "20%",
    width: "100%",
    backgroundColor: Colors.WHITE,
   },

  //third header and banner
  sectionThree: {
    height: "20%",
    width: "100%",
    backgroundColor: Colors.WHITE,
  },

  celoLogo: {
    height: 40,
    width: 40,
  },

/////////////////////////
// | RECYCLE | COMPOST //
/////////////////////////

//top of screen logo
  topLogo: {
    height: "25%",
    width: "100%",
    backgroundColor: Colors.WHITE,
    justifyContent: "center",
    alignItems: "center",
  },



//top of screen click to scan receipt
  sectionOneScan: {
    height: "20%",
    width: "100%",
    backgroundColor: Colors.WHITE,
    
  },

// header plus scan results
  sectionTwoScan: {
    height: "20%",
    width: "100%",
    backgroundColor: Colors.WHITE,
    //justifyContent: "center",
  },

  scanResults: {
    height: 75,
    width: 375,
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 2.5,
    marginVertical: 2,
    backgroundColor: Colors.SECONDARYlite,
    elevation: 4,
    //margin: 5.6, 
  },

  sectionThreeScan: {
    height: "20%",
    width: "100%",
    backgroundColor: Colors.WHITE,
    justifyContent: "center",
    paddingBottom: "5%",
  },



/////////////////////////
// LOGIN SCREEN CONTAINERS
    // top of screen/logo
    logoContainer: {
        height: "60%",
        width: "100%",
        backgroundColor: Colors.WHITE,
        alignItems: "center",
        justifyContent: "space-evenly", 
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

///////////////////////////
// HOME SCREEN V1.0
///////////////////////////
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
    
// THE LESSER CHILDREN
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

///////////////////////////////
  // ABOUT SCREEN
///////////////////////////////
  // holds text  
  topTextContainer: {
    height: "30%",
    width: "100%",
    backgroundColor: Colors.WHITE, 
  },

    // holds logo
  midContainer: {
    height: "60%",
    width: "100%",
    backgroundColor: Colors.WHITE, 
    flexDirection: "row",
    justifyContent: "center",
  }, 

//////////////////////////////
// REGISTER SCREEN
//////////////////////////////
    
  regLogoContainer: {
    height: "35%",
    width: "100%",
    backgroundColor: Colors.WHITE,
    alignItems: "center",
    justifyContent: "center",
  },

  headingContainer: {
    height: "10%",
    width: "100%",
    backgroundColor: Colors.WHITE,
    justifyContent: "flex-end",
    alignItems: "center",
  },  

    registerContainer: {
    height: "45%",
    width: "100%",
    backgroundColor: Colors.WHITE,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: "2%",
  },


};

export default Spacing


