import React from 'react';
import { View, StyleSheet } from 'react-native';

const CardSection = (props) => {
    return (
        <View style={styles.subcontainerStyle}>
        { props.children }
        </View>
    ); 
};
 
const styles = StyleSheet.create({
    subcontainerStyle: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        width: 250,
        height: 45,
        marginBottom: 15,
        marginLeft: 70,
        flexDirection: 'row',
        alignItems: 'center'
    }
   

});

export { CardSection };
