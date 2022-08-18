import React from "react"
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
import { ItemType } from "../utils/type";
import { tempItems } from "../utils/tempData";

import CartItem from "../components/CartItem";
enum WorkType {
    Inc = 'inc',
    Dec = 'dec',
}
const Home = () => {
    const [items, setItems] = React.useState<ItemType[]>(tempItems);

    const [validCount, setValidCount] = React.useState<number>(0);

    const handleCount = (id: number, type: WorkType) => {
        setItems(items.map(item => {
            if (item.id === id) {
                type === WorkType.Inc ?
                    item.count++ :
                    //item count will not be less than 0
                    item.count <= 0 ?
                        item.count : item.count--;
                item.isValidCount = item.count > 0 ?
                    true : false;
            }
            return item;
        }));
        setValidCount((items.filter(item => item.isValidCount)).length);
    }

    const handleRemove = (id: number) => {
        setItems(items.filter(item => item.id !== id));
        setValidCount((items.filter(item => item.isValidCount)).length);
    }

    const handleRefresh = () => {
        setItems(items.map(item => {
            item.count = 0;
            item.isValidCount = false;
            return item;
        }));
        setValidCount(0);
    }

    const handleRecyle = () => {
        setItems([] as ItemType[]);
        setValidCount(0);
    }

    const handleAddNewItem = () => {
        setItems([...items, { id: items.length + 1, count: 0, isValidCount: false }]);
    }

    return (
        <View style={styles.root}>
            <View style={styles.header}>
                <Image
                    source={require("../../assets/cart.png")}
                    style={styles.img}
                />
                <Text style={styles.text}>
                    {validCount}
                </Text>
                <Text style={[styles.text, styles.textHardCoded]}>
                    Items
                </Text>
            </View>

            <View style={[styles.header, { marginBottom: 15 }]}>
                <TouchableOpacity
                    style={[styles.button, { backgroundColor: '#47b33d' }]}
                    onPress={handleRefresh}
                >
                    <Image
                        source={require("../../assets/refresh.png")}
                        style={{ width: 30, height: 30 }}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, { backgroundColor: '#4287f5' }]}
                    onPress={handleRecyle}
                >
                    <Image
                        source={require("../../assets/recycle.png")}
                        style={{ width: 30, height: 30 }}
                    />
                </TouchableOpacity>
            </View>

            <FlatList
                data={items}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <CartItem
                        count={item.count}
                        onIncrement={() => { handleCount(item.id, WorkType.Inc) }}
                        onDecrement={() => { handleCount(item.id, WorkType.Dec) }}
                        onRemove={() => { handleRemove(item.id) }}
                    />
                )}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                ListEmptyComponent={() => <Text style={styles.emptytext}> No Items In the Cart </Text>}
            />

            <TouchableOpacity
                style={[styles.button, { backgroundColor: '#b4b4b4', width: 200, height: 40 }]}
                onPress={handleAddNewItem}
            >
                <Text style={{ fontSize: 20, color: "black" }}> Add new Item </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        margin: 10,
        alignItems: "center"
    },
    separator: {
        backgroundColor: "#b4b4b4",
        height: 1,
        display: 'flex',
        marginTop: 5,
        marginBottom: 5,
    },
    text: {
        display: "flex",
        fontSize: 40,
        margin: 10,
        marginTop: 0,
        width: 100,
        borderColor: 'blue',
        textAlign: 'center',
        borderWidth: 1,
        borderRadius: 20,
    },
    img: {
        width: 50,
        height: 45,
        marginRight: 5
    },
    textHardCoded: {
        borderWidth: 0,
        fontSize: 30,
        marginLeft: -10
    },
    header: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        marginBottom: 25,
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
        width: 70,
        height: 55,
        alignItems: 'center',
        justifyContent: "center"
    },
    emptytext: {
        fontSize: 25,
        marginTop: 50,
        textAlign: 'center',
        color: 'gray'
    }
});