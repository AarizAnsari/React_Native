import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

type PropType = {
    name: string,
    email: string,
    image: string,
    title: string,
    id: string,
    props: { navigation: { navigate: (arg0: string, { }) => void } }
}

export default function Namecard(args: PropType) {
    
    return (
        <TouchableOpacity
            onPress={() => args.props.navigation.navigate('Profile', {
                name: args.name,
                image: args.image,
                title: args.title,
                id: args.id,
                email: args.email
            })
              }>

            <View style={styles.card}>
                <Image
                    style={styles.avatar}
                    source={
                        { uri: args.image }
                    }
                />
                <View style={styles.profiledata}>
                    <Text style={styles.cardName}>{args.name}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "white",
        width: "90%",
        margin: 8,
        borderRadius: 5,
        alignItems: "center",
        alignSelf: "center",
        elevation: 5,
        shadowColor: "black"
    },
    cardName: {
        fontSize: 20,
        padding: 5,
        color: "black",
    },
    profile: {
        flex: 1,
        flexDirection: "row"
    },
    avatar: {
        height: 50,
        width: 50,
        borderRadius: 100,
        margin: 3
    },
    profiledata: {
        flex: 1,
        alignItems: "center",
        width: "100%"
    }
})