import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button = ({ onPress, children }) => {
    const { buttonStyle, textStyle } = styles;
    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
        <Text style={textStyle}> {children} </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
      },
      buttonStyle: {
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 100,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#007aff',
        backgroundColor: '#007aff'
      }
});

export { Button };
