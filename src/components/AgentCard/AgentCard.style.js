import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        margin: 10,
        borderWidth: 1,
        borderColor: '#00000e0',
        borderRadius: 10,
        backgroundColor: '#0D1A25'
    },
    image: {
        width: '100%',
        height: Dimensions.get('screen').height / 4, // Adjust the height as needed
        resizeMode: 'contain', // Preserve the aspect ratio
        borderRadius: 8, // Add some border radius for a rounded look
    },
    body: {
        backgroundColor: '#EBE8E1',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        padding:8
    },
    title: {
        fontSize: 27,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#CF3F4C',
        borderRadius: 10,
    },
    descbody:{
        backgroundColor: '#EBE8E1',
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
    },
    description:{
        fontSize:15,
        padding:5,
        margin:5,
    }
});
