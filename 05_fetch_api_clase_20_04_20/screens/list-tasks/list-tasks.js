import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableHighlight, FlatList } from 'react-native-gesture-handler';
import CardComponent from './card-component';
function ListTasks({ navigation }) {
    const [tasks, setTasks] = useState([]);
    /* Data for the flatlist */
    const fetchTasks = async () =>{
        let response = await fetch('http://192.168.1.4/taskapp_api_php/api/listtasks');
        let jsonResponse = await response.json();
        setTasks(jsonResponse.tasks);
        console.log(jsonResponse);
    }
    useEffect(()=>{
        fetchTasks();
    },[]);

    return (
        <View style={styles.container}>
            <TouchableHighlight style={styles.createTaskButton} onPress={() => navigation.navigate('Create')}>
                <Text style={styles.buttonTextStyle}>Create Task</Text>
            </TouchableHighlight>

            <FlatList
                data={tasks}
                renderItem={({ item }) => <CardComponent/>}
                keyExtractor={item => item.id}
            >
            </FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    createTaskButton: {
        backgroundColor: 'purple',
        padding: 20,
        alignItems: 'center'
    },
    buttonTextStyle: {
        color: 'white'
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});

export default ListTasks;