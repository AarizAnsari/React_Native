import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import Namecard from '../components/Namecard'


const users = [
    {
        name: "Alex",
        status: "Online"
    },
    {
        name: "Mia",
        status: "Online"
    },
    {
        name: "Harry",
        status: "Offline"
    },
    {
        name: "Anita",
        status: "Online"
    },
    {
        name: "Mike",
        status: "Offline"
    },
    {
        name: "Joe",
        status: "Online"
    },
    {
        name: "Sam",
        status: "Online"
    },
    {
        name: "Mia",
        status: "Online"
    },
    {
        name: "Harry",
        status: "Offline"
    },
    {
        name: "Anita",
        status: "Online"
    },
    {
        name: "Mike",
        status: "Offline"
    },
    {
        name: "Joe",
        status: "Online"
    },
    {
        name: "Sam",
        status: "Online"
    },
]


export default function UserList() {
    return (
        <View style={styles.body}>
            <FlatList
                data={users}
                renderItem={({ item }) =>
                    <Namecard
                    name = {item.name}
                    status= {item.status}
                    />
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#1d4a5d',
        height: "100%",
    },
    card: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "white",
        width: "80%",
        marginLeft: "10%",
        margin: 8,
        borderRadius: 5,
        alignItems: "center",
    },
    cardName: {
        fontSize: 26,
        padding: 8,
        color: "black"
    },
    statusbar: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center"
    }
})