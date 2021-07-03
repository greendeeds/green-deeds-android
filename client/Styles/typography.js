// TYPOGRAPHY

import Colors from './colors';

const Typography = {
  defaultText: {
    fontSize: 14,
    fontFamily: 'sans-serif',
    color: Colors.BLACK,
  },

  greenDeedsText: {
    fontSize: 36,
    fontFamily: 'sans-serif-medium',
    color: Colors.PRIMARY,
  },

  // turn trash into GoOoOoOold!!!!!!!!!!!!!!
  catchPhraseText: {
    fontSize: 22,
    fontFamily: "sans-serif",
    color: Colors.SECONDARY, 
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

// VECTOR ICONS
  // styles the Entypo vector icons on the log in and out buttons
  logInOutEntypo: {
    fontSize: 18,
    color: Colors.WHITE,
  },


};

export default Typography

