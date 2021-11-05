// TYPOGRAPHY

import Colors from './colors'

const Typography = {
  defaultText: {
    fontSize: 14,
    fontFamily: 'sans-serif',
    color: Colors.BLACK,
  },

  // kiva
  kivaheaderText: {
    color: '#5f5c5c',
    fontSize: 20,
    fontFamily: 'sans-serif-medium',
    textAlign: 'center',
    marginLeft: '5%',
    textTransform: 'uppercase',
    lineHeight: 30,
    paddingBottom: '10%',
  },

  // login screen title - GREEN DEEDS
  greenDeedsText: {
    fontSize: 36,
    fontFamily: 'sans-serif-medium',
    color: Colors.PRIMARY,
  },

  // login screen - turn trash into Gold!
  catchPhraseText: {
    fontSize: 22,
    fontFamily: 'sans-serif-medium',
    color: Colors.SECONDARY,
  },

  // register screen
  registerHeaderText: {
    color: Colors.BLACK,
    fontSize: 18,
    fontFamily: 'sans-serif',
    textAlign: 'center',
    marginHorizontal: '4%',
    marginBottom: '2%',
  },

  // home | recycle | compost
  headerText: {
    color: Colors.BLACK,
    fontSize: 22,
    fontFamily: 'sans-serif-medium',
    textAlign: 'center',
    marginLeft: '5%',
  },

  // adds underlines to clickables in footer
  linkText: {
    fontSize: 14,
    fontFamily: 'sans-serif',
    color: Colors.WHITE,
    textDecorationLine: 'underline',
  },

  footerText: {
    fontSize: 14,
    fontFamily: 'sans-serif',
    color: Colors.WHITE,
  },

  logInOutButtonText: {
    fontSize: 16,
    fontFamily: 'sans-serif',
    color: Colors.WHITE,
  },

  roundButtonText: {
    color: Colors.BLACK,
    fontSize: 16,
    fontFamily: 'sans-serif',
  },

  // About Screen
  generalText: {
    fontSize: 18,
    fontFamily: 'sans-serif',
    color: Colors.BLACK,
  },

  topText: {
    color: Colors.BLACK,
    fontSize: 24,
    fontFamily: 'sans-serif',
    textAlign: 'center',
  },

  blackLinkText: {
    fontSize: 18,
    fontFamily: 'sans-serif',
    color: Colors.BLACK,
    textDecorationLine: 'underline',
  },

  // Recycle & Compost Screens
  quantityText: {
    fontSize: 18,
    fontFamily: 'sans-serif',
    color: Colors.BLACK,
    marginLeft: '5%',
  },

  // VECTOR ICONS
  // styles the Entypo vector icons on the log in and out buttons
  logInOutEntypo: {
    fontSize: 18,
    color: Colors.WHITE,
  },

  roundButtonEntypo: {
    fontSize: 25,
    color: Colors.PRIMARY,
  },

  //{<Entypo name="tree" style={Typography.roundButtonEntypo}
  cameraEntypo: {
    fontSize: 45,
    color: Colors.PRIMARY,
  },

  // CELO SCREEN
  attention: {
    fontSize: 16,
    fontFamily: 'sans-serif-medium',
    color: 'red',
    textAlign: 'left',
  },

  headlineText: {
    color: Colors.BLACK,
    fontSize: 22,
    fontFamily: 'sans-serif-medium',
    textAlign: 'center',
    padding: 4,
  },
}

export default Typography
