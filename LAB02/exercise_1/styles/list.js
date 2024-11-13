import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    scrollViewContainer: {
        backgroundColor: '#f8f6f7'
    },
    titleFavorite: {
        color: 'white',
        backgroundColor: '#3598DB',
        fontSize: 24,
        padding: 20,
        textAlign: 'center',
        fontFamily: 'Quicksand_700Bold'
    },

    cardWrap: {
        borderRadius: 12,
        paddingHorizontal: 10,
        paddingVertical: 20,
        backgroundColor: 'white'
    },

    cardWrapMain: {
        width: '100%',
        paddingHorizontal: 20,
        marginVertical: 10
    },

    img_main: {
        width: '100%',
        height: 200,
        borderRadius: 12,
        marginBottom: '3%'
    },

    profile_wrap: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: '3%'
    },

    avatar_img: {
        width: 50,
        height: 50,
        borderRadius: 12,
    },

    user_name: {
        width: 230,
        fontSize: 21,
        marginLeft: '5%',
        fontFamily: 'Quicksand_600SemiBold'
    },

    title: {
        width: 230,
        fontSize: 18,
        fontFamily: 'Quicksand_600SemiBold'
    },

    content: {
        width: '100%',
        fontSize: 16,
        fontFamily: 'Quicksand_600SemiBold',
        marginBottom: '3%'
    },



    divider: {
        height: 3,
        color: '#939393',
        marginVertical: 10,

    },

    interact_wrap: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-around'
    },

    interact_text: {
        fontFamily: 'Quicksand_500Medium',
        fontSize: 16,
        color: '#939393',
    },

    interact_btn: {
        fontFamily: 'Quicksand_600SemiBold',
        fontSize: 18,
        color: 'black'
    },

    interact_btn_pressed: {
        fontFamily: 'Quicksand_600SemiBold',
        fontSize: 18,
        color: 'blue'
    },

    interact_wrap_btn: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-around',
        gap: '8%'
    }


});