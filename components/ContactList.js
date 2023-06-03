import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Modal, StyleSheet, Image } from 'react-native';
import call from "../assets/call.png";
import text from "../assets/comment.png";
import video from "../assets/zoom.png"


const data = [
    {
        id: 1,
        name: 'Amit kumar Aich ',
        number: '+91 8340573054',
        email: 'amitkumaraich.in@gmail.com',
    },
    {
        id: 2,
        name: 'Sudipt',
        number: '+91 3215678290',
        email: 'example@gmail.com',
    },
    {
        id: 3,
        name: 'Nilima',
        number: '+91 4389290745',
        email: 'example@gmail.com',
    },
    {
        id: 4,
        name: 'Aditya',
        number: '+91 5319064782',
        email: 'example@gmail.com',
    },
    {
        id: 5,
        name: 'Sanju',
        number: '+91 5378921001',
        email: 'example@gmail.com',
    },
    {
        id: 6,
        name: 'Satya Ranjan',
        number: '+91 1892348904',
        email: 'example@gmail.com',
    },
    {
        id: 7,
        name: 'PROEDGE',
        number: '+91 1234567890',
        email: 'example@gmail.com',
    },
    {
        id: 8,
        name: 'Jhon',
        number: '+1 (435) 12318938',
        email: 'example@gmail.com',
    },
    {
        id: 9,
        name: 'Peter',
        number: '+91 3723890234',
        email: 'example@gmail.com',
    },
    {
        id: 10,
        name: 'IronMan',
        number: '+91 5637197846',
        email: 'ironman@gmail.com',
    },
    {
        id: 11,
        name: 'Arjun',
        number: '+91 2389651048',
        email: 'example@gmail.com',
    },
    {
        id: 12,
        name: 'Arjun Proedge',
        number: '+91 5060241056',
        email: 'arjun@gmail.com',
    },
    {
        id: 13,
        name: 'LPU',
        number: '+91 4189054678',
        email: 'lpu@gmail.com',
    },
    {
        id: 14,
        name: 'Web Developer',
        number: '+91 1234567890',
        email: 'example@gmail.com',
    },
    {
        id: 15,
        name: 'Amit',
        number: '+91 8340573054',
        email: 'example@gmail.com',
    },


];


const ContactList = () => {
    const [contact, setContact] = useState('');
    const [selectContact, setSelectContact] = useState(null);


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
        cont.name.toLowerCase().includes(contact.toLowerCase()),
    );


    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.mainView} onPress={() => pressedContact(item)}>
            <Image source={require('../assets/insideuser.png')} style={styles.userLogo}></Image>
            <View>
                <Text style={styles.userName}>{item.name}</Text>
                <Text style={styles.userName}>{item.number}</Text>
            </View>
        </TouchableOpacity>
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
                    <TextInput style={styles.inputField} placeholder="Search your contact" value={contact} onChangeText={contactSearch} />
                    <Image source={require('../assets/search.png')} style={styles.iconSearch} />
                </View>
                {/* Sowing the list of all saved contacts */}
                <FlatList style={styles.allContacts} data={contactFiltered} renderItem={renderItem} keyExtractor={(item) => item.id.toString()}></FlatList>

                {/* Modal to view the information of selected contact */}
                <Modal visible={!!selectContact}>
                    <View style={styles.popupContent}>
                        <Image source={require('../assets/insideuser.png')} style={styles.insideUserIcon}></Image>
                        <Text style={styles.contactName}>{selectContact?.name}</Text>
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

                        {/* Popup to show the selected contact information. */}
                        <View style={styles.infoCard}>
                            <Text style={styles.phoneNumber}>Phone number : {selectContact?.number}</Text>
                            <Text style={styles.phoneNumber}>Email : {selectContact?.email}</Text>
                        </View>
                        {/* Close button to close the popup and back to main screen. */}
                        <TouchableOpacity style={styles.buttonConatiner}>
                            <Text onPress={popupClose}
                                style={styles.buttontext}
                                title='close'>Close</Text>
                        </TouchableOpacity>

                    </View>

                </Modal>

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
    }

});

export default ContactList;





