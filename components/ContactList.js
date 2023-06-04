import React, { useEffect, useState } from 'react';
import { View, TextInput, FlatList, Text, TouchableOpacity, Modal, StyleSheet, Image } from 'react-native';
import * as Contacts from 'expo-contacts';
import call from "../assets/call.png";
import text from "../assets/comment.png";
import video from "../assets/zoom.png"


const ContactList = () => {
    const [contact, setContact] = useState('');
    const [selectContact, setSelectContact] = useState(null);
    const [data, setData] = useState([]);

    useEffect(() => {
        const loadContacts = async () => {
            const { status } = await Contacts.requestPermissionsAsync();
            if (status === 'granted') {
                const { data } = await Contacts.getContactsAsync({
                    fields: [Contacts.Fields.PhoneNumbers, Contacts.Fields.Emails],
                });
                if (data.length > 0) {
                    setData(data);
                }
            }
        };
        loadContacts();
    }, []);

    const contactSearch = (val) => {
        setContact(val);
    };

    const pressedContact = (cont) => {
        setSelectContact(cont);
    };

    const popupClose = () => {
        setSelectContact(null);
    };

    const contactFiltered = data.filter((cont) =>
        cont.name && cont.name.toLowerCase().includes(contact.toLowerCase()),
    );

    let renderItem = ({ item }) => (
        <TouchableOpacity style={styles.mainView} onPress={() => pressedContact(item)}>
            <Image source={require('../assets/insideuser.png')} style={styles.userLogo}></Image>
            <View>
                <Text style={styles.userName}>{item.name}</Text>
                {item.phoneNumbers && <Text style={styles.userName}>{item.phoneNumbers[0].number}</Text>}
            </View>
        </TouchableOpacity>
    );

    const renderContactDetails = () => (
        <>
        <Modal visible={selectContact !== null} onRequestClose={() => setSelectContact(null)}>
            <View style={styles.popupContent}>
                {selectContact && (
                    <View  style={styles.partNew}>
                        <Image source={require('../assets/insideuser.png')} style={styles.insideUserIcon}></Image>
                        <Text style={styles.contactName}>{selectContact.name}</Text>
                        <View style={styles.iconMain}>
                            <Image source={call} style={styles.demoIcons}></Image>
                            <Image source={text} style={styles.demoIcons}></Image>
                            <Image source={video} style={styles.demoIcons}></Image>
                        </View>
                        <View style={styles.iconNames}>
                            <Text style={styles.textStyle}>call</Text>
                            <Text style={styles.textStyle}>text</Text>
                            <Text style={styles.textStyle}>video</Text>
                        </View>
                        <View style={styles.infoCard}>
                        <Text style={styles.phoneNumber}>Phone Number:   {selectContact.phoneNumbers && selectContact.phoneNumbers[0] ? selectContact.phoneNumbers[0].number : 'No phone number'}</Text>
                        </View>
                        <TouchableOpacity style={styles.buttonConatiner}>
                            <Text style={styles.buttontext} onPress={popupClose}>Close</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </Modal>
     </>
    );

return (
    <>
        <View style={styles.top}>
            <Image source={require('../assets/contactlist.png')} style={styles.List}></Image>
            <Text style={styles.title}>Contacts</Text>
        </View>
        <View style={styles.wrapper}>
            {/* search box to search from the contact list */}
            <View style={styles.searchFix}>
                <TextInput
                    style={styles.inputField}
                    placeholder="Search your contact"
                    value={contact}
                    onChangeText={contactSearch}
                />
                <Image source={require('../assets/search.png')} style={styles.iconSearch} />
            </View>
            {/* Showing the list of all saved contacts */}
            <FlatList
                style={styles.allContacts}
                data={contactFiltered}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />

            {renderContactDetails()}

        </View>
    </>
);
}


const styles = StyleSheet.create({
    wrapper: {
        flex: 2,
        paddingLeft: 10,
        paddingRight: 20,
        fontSize: 20,
    },
    inputField: {
        height: 45,
        width: 380,
        borderRadius: 20,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 40,
        marginLeft: 13,
        marginTop: -2,
    },
    mainView: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 20,
        paddingLeft: 40,
        fontWeight: 'bold',
        gap: 30,
    },
    popupContent: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 40,
        color: 'white',
        height: 900
    },
    userLogo: {
        height: 40,
        width: 40,
        marginTop: 15,
    },
    userName: {
        fontFamily: 'sans-serif',
        fontSize: 20,
        marginTop: 7,
    },
    iconSearch: {
        height: 20,
        width: 20,
        marginTop: -50,
        marginLeft: 20,
    },
    searchFix: {
        backgroundColor: 'white',
        marginTop: 40,
        height: 50,
    },
    insideUserIcon: {
        height: 100,
        width: 100,

    },
    demoIcons: {
        height: 50,
        width: 50,

    },
    iconMain: {
        flex: 0.1,
        flexDirection: "row",
        gap: 80,
        marginTop: 70,
        justifyContent: "center",
        height: 20,
        width: 400,
    },
    iconNames: {
        flex: 0.18,
        flexDirection: "row",
        justifyContent: "center",
        gap: 100,
        marginLeft: 13,
        marginTop: 19
    },
    textStyle: {
        fontFamily: "sans-serif",
        fontWeight: "bold",
        fontSize: 17,
    },
    contactName: {
        fontFamily: "sans-serif",
        fontWeight: "bold",
        fontSize: 30,
        marginTop: 20,
    },
    phoneNumber: {
        fontFamily: "sans-serif",
        fontWeight: "bold",
        fontSize: 20,
        marginTop: 30,
        marginLeft: 40,
        color: "#383637",
        textAlign: "center"
    },
    infoCard: {
        flex: 0.4,
        backgroundColor: "#f5ebf0",
        borderRadius: 10,
        width: 400,
        justifyContent: "flex-start",
        gap: 0,

    },
    buttonConatiner: {
        elevation: 8,
        backgroundColor: "#f52c6c",
        borderRadius: 20,
        paddingVertical: 6,
        paddingHorizontal: 28,
        marginTop: 50,
    },
    buttontext: {
        fontSize: 30,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
    title: {
        fontFamily: "sans-serif",
        fontSize: 40,
        textAlign: "center",
        color: "#1e4670",
        fontWeight: 'bold'
    },
    top: {
        flex: 0,
        flexDirection: 'row',
        marginTop: 50,
        justifyContent: 'center',
        gap: 10
    },
    List: {
        height: 45,
        width: 45,
    },
    partNew : {
        flex : 0.8,
        alignItems : 'center',
    }

});

export default ContactList;