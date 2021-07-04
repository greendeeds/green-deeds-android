// TYPOGRAPHY

import Colors from './colors';

const Typography = {
  defaultText: {
    fontSize: 14,
    fontFamily: 'sans-serif',
    color: Colors.BLACK,
  },

  // login screen - title
  greenDeedsText: {
    fontSize: 36,
    fontFamily: 'sans-serif-medium',
    color: Colors.PRIMARY,
  },

  // login screen - turn trash into Gold!
  catchPhraseText: {
    fontSize: 22,
    fontFamily: "sans-serif",
    color: Colors.SECONDARY, 
  },

  // home screen
  headerText: {
    color: Colors.BLACK,
    fontSize: 36,
    fontFamily: "sans-serif-medium", 
    textAlign: "center",
    marginTop: "15%",
    marginBottom: "10%",
  },

  // underlines clickable text
  linkText: {
    fontSize: 14,
    fontFamily: 'sans-serif',
    color: Colors.BLACK,
    textDecorationLine: 'underline',
  },

  logInOutButtonText: {
    fontSize: 16,
    fontFamily: "sans-serif", 
    color: Colors.WHITE,
  },

  roundButtonText: {
    color: Colors.BLACK,
    fontSize: 16,
    fontFamily: "sans-serif",
  },

// VECTOR ICONS
  // styles the Entypo vector icons on the log in and out buttons
  logInOutEntypo: {
    fontSize: 18,
    color: Colors.WHITE,
  },

  roundButtonEntypo: {
    fontSize: 24,
    color: Colors.SECONDARY,
  },


};

export default Typography

