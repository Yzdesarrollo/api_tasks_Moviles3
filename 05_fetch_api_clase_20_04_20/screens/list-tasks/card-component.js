import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function CardComponent(){

    return(
        <View style={styles.container}>
            <Text>card view</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      borderColor: 'black',
      borderRadius: 10,
      borderWidth: 1,
      padding: 20,
      marginTop: 10
    },
  });

export default CardComponent;