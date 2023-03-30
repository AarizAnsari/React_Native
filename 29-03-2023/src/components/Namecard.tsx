import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'

type PropType = {
    name: string,
    status: string
}

export default function Namecard(props: PropType) {
    let statusColor = "#00CC00";
    if (props.status == "Offline") {
        statusColor = "grey";
    }
    return (
        <View style={styles.card}>
            <Text style={styles.cardName}>{props.name}</Text>
            <View style={styles.statusbar}>
                <Text>
                    {props.status}
                </Text>
                <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: statusColor, margin: 10 }}></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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