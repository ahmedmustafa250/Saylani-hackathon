import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function AppButton(props) {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={props.navigate}>
            <View style={style.cover(props)}>
                <Text style={style.text(props)}> {props.text} </Text>
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({

    cover: props => ({
        borderRadius: 50,
        paddingLeft: props.paddingLeft,
        paddingRight: props.paddingRight,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: props.backgroundColor,

    }),
    text: props => ({
        color: props.color,
        fontSize: props.fontSize,
        textAlign:'center'
    })
})