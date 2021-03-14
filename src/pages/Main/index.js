import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { setTodoName } from '~/store/main/actions';

import styles from './styles';

const Main = ({navigation}) => {
  const [task, setTask] = useState('');

  const handleGoList = () => {
    navigation.navigate('TodoList', { taskObject: {"id": 3, "taskName": task} })
  }

  const tdcImage = '../../assets/logo-tdc.png';

  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text testID='titleHome' style={styles.title} testID='title'>TDC Tasks</Text>
      </View>

      <View style={styles.containerImg}>
        <Image
          style={styles.image}
          source={require(tdcImage)}
        />
      </View>

      <View style={styles.containerInput}>
        <TextInput
          style={styles.inputTask}
          testID='inputTask'
          placeholder="Preencha o nome da tarefa"
          onChangeText={text => setTask(text)}
        />
      </View>

      <View style={styles.containerButton}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleGoList}
          testID='buttonAddtask'
        >
          <Text style={styles.textButton}>Adicionar tarefa</Text>
        </TouchableOpacity>
      </View>
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
