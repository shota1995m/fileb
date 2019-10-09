import Constants from 'expo-constants';

export default {
  Wrap: {
    backgroundColor: "#fff",
  },
  StatusBar: {
    height: Constants.statusBarHeight,
  },
  Inner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80,
    paddingTop: 8,
    paddingBottom: 8,
    paddingHorizontal: 24,
  },
  Text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  Left: {
    flex: 1
  },
  Center: {
    flex: 3,
    alignItems: 'center'
  },
  Right: {
    flex: 1,
    alignItems: 'flex-end'
  }
}
