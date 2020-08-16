import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ColorCounter from "../components/ColorCounter"

const COLOR_INC = 15

export default function ColorAdjuster() {
    const[red, setRed] = useState(0)
    const[green, setGreen] = useState(0)
    const[blue, setBlue] = useState(0)

    const setColor = (color, change) => {
        //color === red, green, blue
        //change === + 15, - 15

        switch(color){
            case "red":
                red + change > 225 || red + change < 0 ? null : setRed(red + change);
                return;
            case "green":
                green + change > 225 || green + change < 0 ? null : setGreen(geen+ change);
                return;
            case "blue":
                blue + change > 225 || blue + change < 0 ? null : setBlue(blue + change);
                return;
            default:
                return;
        }
    }

    return (
        <View>
            <ColorCounter
                onIncrementar = {() => setColor("red", COLOR_INC)}
                onDisminuir = {() => setColor("red", -1 * COLOR_INC)}
                color = "Red"/>
            <ColorCounter
                onIncrementar = {() => setColor("blue", COLOR_INC)}
                onDisminuir = {() => setColor("blue" , -1 * COLOR_INC)}
                color = "Blue"/>
            <ColorCounter
                onIncrementar = {() => setColor("green", COLOR_INC)}
                onDisminuir = {() => setColor("green", -1 * COLOR_INC)}
                color = "Green"/>
            <View style = {{
                height: 200,
                width:200,
                backgroundColor: `rgb(${red},${green},${blue})`}}/>
        </View>
    )
}

const styles = StyleSheet.create({})
