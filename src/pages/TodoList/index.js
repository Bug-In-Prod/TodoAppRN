import * as React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';

const TodoList = props => {

  return (
    <View style={styles.container}>
      <Text style={styles.todoName}>Todo List</Text>
    </View>
  );
};

const mapStateToProps = state => ({
  todoName: state.Main.todoName
});

const mapStateToDispatch = {

}

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(TodoList);
