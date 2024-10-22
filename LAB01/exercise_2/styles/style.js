import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 10,
      },
      list: {
      },
      itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
      },
      itemText: {
        fontSize: 18,
      },
      sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#eee',
      },
      headerImage: {
        width: 30,
        height: 30,
        marginRight: 10,
      },
      headerText: {
        fontSize: 20,
        fontWeight: 'bold',
      },
      imageBackground: {
        height: 200,
        marginVertical: 10,
      },
      imageBackgroundS: {
        height: 320,
        marginVertical: 10,
      },
      selectedContainer: {
        marginTop: 5,
      },
      selectedTitle: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      selectedText: {
        fontSize: 16,
        marginVertical: 5,
      },
    });