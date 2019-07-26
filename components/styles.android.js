import { StyleSheet, Dimensions } from 'react-native';
const {width, height} = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    padding: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    backgroundColor: 'yellow',
    width: width/2,
    height: height / 3,
    position: 'absolute',
    top: 20,
    left: 30,
    borderRadius: 15,
  },
  text: {
    color: 'white',
    fontSize: 34,
    fontFamily: 'arial',
    fontWeight: '600'
  }
})