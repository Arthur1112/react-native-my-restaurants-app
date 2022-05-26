import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container: {
        marginVertical: 50,
        flex: 1,
        width:'100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    restaurantCard: {
        width: '100%',
        marginVertical: 16,
        backgroundColor: '#fff',
        color: '#444', 
    },
    text: {
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    restaurantsName: {
        fontSize: 30,
        // fontWeight: 'bold',
        marginVertical: 15,
    }
    });