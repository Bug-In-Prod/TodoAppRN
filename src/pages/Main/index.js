import * as React from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';
import { connect } from 'react-redux';
import { setTodoName } from '~/store/main/actions';

import styles from './styles';

const Main = ({navigation}) => {

  const handleGoList = () => {
    navigation.navigate('TodoList')
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.instructions, styles.fileName]}>Olá Todo App</Text>
      <Button title='Go List' onPress={handleGoList} />
    </View>
  );
};

const mapStateToProps = state => ({
  todoName: state.Main.todoName
});

const mapStateToDispatch = {
  setTodoName
}

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(Main);
