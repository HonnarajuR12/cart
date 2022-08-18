import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const IncrementIcon = require("../../assets/increment.png");
const DecrementIcon = require("../../assets/decrement.png");
const RemoveIcon = require("../../assets/remove.png");

type Props = {
    count: number;
    onIncrement: () => void;
    onDecrement: () => void;
    onRemove: () => void;
}

const CartItem = ({ count, onIncrement, onDecrement, onRemove }: Props) => {
    return (
        <View style={styles.root}>
            <Text style={[
                styles.text,
                {
                    backgroundColor: count && count > 0 ? "blue" : "yellow",
                    color: count && count > 0 ? "white" : "black"
                }]}
            >
                {count && count > 0 ? count : "Zero"}
            </Text>
            <TouchableOpacity style={[styles.button, { backgroundColor: "#6dc926" }]} onPress={onIncrement}>
                <Image
                    source={IncrementIcon}
                    style={{ width: 40, height: 40 }}
                />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { backgroundColor: "#8dbccc" }]} onPress={onDecrement}>
                <Image
                    source={DecrementIcon}
                    style={{ width: 45, height: 45, marginTop: 1 }}
                />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { backgroundColor: 'red' }]} onPress={onRemove}>
                <Image
                    source={RemoveIcon}
                    style={{ width: 25, height: 25 }}
                />
            </TouchableOpacity>

        </View>
    );

}

export default CartItem;

const styles = StyleSheet.create({
    root: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-evenly',
        maxHeight: 50,
        maxWidth: 350
    },
    imgButton: {
        borderRadius: 10,
        width: 78,
        height: 80,
        backgroundColor: 'red',
    },
    text: {
        display: "flex",
        fontSize: 40,
        width: 110,
        borderColor: 'green',
        textAlign: 'center',
        borderWidth: 1,
        borderRadius: 10,
    },
    button: {
        borderColor: "#b4b4b4",
        borderWidth: 2,
        marginLeft: 10,
        borderRadius: 10,
        shadowColor: '#303838',
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 10,
        shadowOpacity: 0.35,
        width: 65,
        alignItems: 'center',
        justifyContent: "center"
    },
    buttonText: {
        backgroundColor: '#95d645',
        width: 55,
        borderWidth: 0,
        borderRadius: 7
    }


});