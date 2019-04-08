import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';

const Card = (props) => {
    return (
    <ImageBackground source={require('../../src/img/appback.jpg')} style={styles.backimage}>
        <View style={styles.containerStyle}>
        { props.children }
        </View>
    </ImageBackground>
    ); 
};
 
const styles = StyleSheet.create({
    containerStyle: {
       marginTop: 80
    },
    backimage: {
        flex: 1
    }

});

export { Card };
