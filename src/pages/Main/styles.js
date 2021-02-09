import { StyleSheet, Dimensions } from 'react-native';

const { width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#FFF'
  },
  fileName: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  instructions: {
    color: '#333',
    fontSize: 14,
    marginTop: 20,
    textAlign: 'center',
  }

});

export default styles;
