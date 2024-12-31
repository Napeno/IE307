import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    viewContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
    },

    innerContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 16,
        spaceY: 12,
      },
      textIn: {
        fontSize: 24,
        fontWeight: "bold",
      },
      logOutText: {
        color: "blue",
        fontSize: 18,
        marginTop: 10,
      },
      button: {
        paddingVertical: 12,
        paddingHorizontal: 28,
        backgroundColor: "#2295ed", 
        marginVertical: 16,
        borderRadius: 10
      },
      buttonText: {
        fontSize: 18,
        textAlign: "center",
        color: "white",
      },
});

export default styles;
