//USER GETS NAVIGATED TO THIS SCREEN WHEN TAP ON FIRST SCREEN BUTTON

import { StyleSheet, Text, View, FlatList, ListRenderItemInfo } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import Namecard from '../components/Namecard'
import FlatListLoader from '../components/FlatListLoader';
import Services from '../services/apiServices';


export default function UserList(props: { navigation: { navigate: (arg0: string) => void } }) {

    type userItem = {
        firstName: String,
        lastName: String,
        picture: string,
        title:string,
        id:string
    }
    
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [loader, setLoader] = useState(true)

    const getData = async (page: number) => {
        if (page <= 4) {
            let res = await Services.getAllUsers(page);
            setLoader(true);
            setUsers(users.concat(res?.data.data))
        }
        else {setLoader(true)}
    }

    useLayoutEffect(() => {
        getData(page);
    }, []);

    return (
        <View style={styles.body}>
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
                    onEndReached={() => { setLoader(false), setPage(page + 1), getData(page) }}
                />
            }

            <FlatListLoader
                hidden={loader}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#1d4a5d',
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