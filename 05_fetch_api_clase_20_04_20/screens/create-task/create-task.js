import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Alert } from 'react-native';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';

function CreateTask({navigation}) {
    const [taskName, setTaskName] = useState("");
    const [taskDate, setTaskDate] = useState("");
    const createTask = async () => {
        try {
            const response = await fetch('http://192.168.1.4:3000/api/addtask', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    task: taskName,
                    date: taskDate,
                }),
            });
            const json = await response.json();
            Alert.alert("Task created successfuly");
            navigation.navigate('Tasks');
        } catch (error) {

        }
    }
    return (
        <View style={styles.container}>
            <TextInput style={styles.textInput} placeholder="task description" onChangeText={text => setTaskName(text)} />
            <TextInput style={styles.textInput} placeholder="task date" onChangeText={text => setTaskDate(text)} />
            <TouchableHighlight style={styles.createTaskButton} onPress={createTask}>
                <Text style={styles.textStyleButton}>Create Task</Text>
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    textInput: {
        padding: 20,
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 1,
        marginTop: 10,
        width: Dimensions.get('screen').width * 0.9
    },
    createTaskButton: {
        marginTop: 10,
        padding: 15,
        backgroundColor: 'purple',
        borderRadius: 5,
        width: Dimensions.get('screen').width * 0.9,
        alignItems: 'center'
    },
    textStyleButton: {
        color: 'white',
        fontSize: 16
    }
});
export default CreateTask;