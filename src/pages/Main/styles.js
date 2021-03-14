import { StyleSheet, Dimensions } from 'react-native';

const { width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 16
  },

  containerTitle: {
    width: '100%',
    height: 54,
    justifyContent: 'flex-end'
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold'
  },

  containerImg: {
    flex: 2,
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },

  image: {
    width: 250,
    height: 250,
    resizeMode: 'stretch',
  },

  containerInput: {
    flex: 1,
    marginTop: 20,
    justifyContent: 'flex-end',
    width: '100%'
  },

  inputTask: {
    borderWidth: 0.5,
    borderRadius: 10,
    fontSize: 16
  },

  containerButton: {
    flex: 1,
    marginTop: 20,
    width: '100%'
  },

  button: {
    height: 54,
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#00008b',

    alignItems: 'center',
    justifyContent: 'center'
  },

  textButton: {
    fontSize: 16,
    color: '#FFF'
  }

});

export default styles;
