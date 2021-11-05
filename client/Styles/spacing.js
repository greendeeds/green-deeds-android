// S P A C I N G

import { color } from "react-native-reanimated";
import { paddingTop } from "styled-system";
import Colors from "./colors";

const Spacing = {
  // Kiva
  kivaContainer: {
    backgroundColor: Colors.WHITE,
    width: "100%",
    height: "100%",
  },
  kivaInvestMoreContainer: {
    backgroundColor: Colors.WHITE,
    width: "50%",
    height: "50%",
  },
  bottomNavKiva: {
    backgroundColor: Colors.PRIMARY,
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
  },
  imgKiva: {
    width: 225,
    height: 120,
  },
  containerKiva: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  itemKiva: {
    width: "50%",
    paddingBottom: "7%",
  },
  iconsKiva: {
    width: 150,
    height: 150,
  },

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

  kivaLogo: {
    height: 40,
    width: 70,
  },

  greenDeedLogo: {
    height: 45,
    width: 45,
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
  },

  scanResults: {
    height: 75,
    width: 375,
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 2.5,
    marginVertical: 2,
    backgroundColor: Colors.WHITE,
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

  // makes a pretty box to accept username/pw info
  textInputContainer: {
    width: 290,
    height: 35,
    backgroundColor: Colors.WHITE,
    borderColor: Colors.TERTIARYdark,
    borderBottomStartRadius: 2,
    borderWidth: 0.75,
    borderRadius: 3,
    margin: 5,
    paddingHorizontal: 7,
    paddingTop: 2,
    elevation: 2,
  },

  /////////////////////////////////////////
  ////// FOOTER //////////////////////////
  ////////////////////////////////
  // parent for links at bottom of the screen
  bottomNavContainer: {
    height: "10%",
    width: "100%",
    backgroundColor: Colors.PRIMARY,
    justifyContent: "center",
  },

  // lines up text and clickables in bottomNavContainer
  bottomTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },

  ///////////////////////////////
  // ABOUT SCREEN
  ///////////////////////////////
  // holds text
  topTextContainer: {
    height: "30%",
    width: "100%",
    backgroundColor: Colors.WHITE,
    justifyContent: "center",
    alignItems: "center",
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

  ///////////////////////////////////////
  // CELO GREEN (DEEDS) SCREEN ///////////
  ///////////////////////////////////////
  container: {
    height: "90%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.WHITE,
  },

  celoLogoContainer: {
    height: "30%",
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: Colors.WHITE,
    paddingBottom: "5%",
  },

  celoLogoFull: {
    height: 100,
    width: 310,
  },

  attentionContainer: {
    height: "12%",
    width: "90%",
    backgroundColor: Colors.WHITE,
    borderColor: "red",
    borderWidth: 2,
    justifyContent: "center",
    paddingLeft: 15,
    marginTop: "4%",
  },

  celoLoginContainer: {
    height: "20%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    margin: "5%",
  },

  downloadContainer: {
    height: "20%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "8%",
  },
};

export default Spacing;
