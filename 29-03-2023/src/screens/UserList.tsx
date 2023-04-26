//USER GETS NAVIGATED TO THIS SCREEN WHEN TAP ON FIRST SCREEN BUTTON

import { StyleSheet, Text, View, FlatList, ListRenderItemInfo } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import Namecard from '../components/Namecard'
import FlatListLoader from '../components/FlatListLoader';
import useUserData from '../hooks/useUserData';
import { useSelector } from 'react-redux';


export default function UserList(props: { navigation: { navigate: (arg0: string) => void } }) {

    type userItem = {
        firstName: String,
        lastName: String,
        picture: string,
        title: string,
        id: string
    }

    const [page, setpage] = useState(1)

    const [bodyStyle, setbodyStyle] = useState(styles.bodydark)
    const theme = useSelector((state: { ThemeReducer: string }) => (state.ThemeReducer))

    let users = useUserData(page);
    useLayoutEffect(() => {
        if (theme == 'light') {
            setbodyStyle(styles.bodylight)
        }
    }, [theme])
    return (
        <View style={bodyStyle}>
            {
                <FlatList
                    data={users}
                    renderItem={({ item }: ListRenderItemInfo<userItem>) =>
                        // Functional Component which display name and status as a card
                        <Namecard
                            name={item.firstName + " " + item.lastName}
                            email={''}
                            image={item.picture}
                            id={item.id}
                            title={item.title}
                            props={props}
                        />
                    }
                    onEndReached={() => { setpage(page + 1) }}
                />
            }
            <FlatListLoader />
        </View>
    )
}

const styles = StyleSheet.create({
    bodydark: {
        backgroundColor: '#1d4a5d',
        height: "100%",
        flex: 1
    },
    bodylight: {
        backgroundColor: '#fcfafa',
        height: "100%",
        flex: 1
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