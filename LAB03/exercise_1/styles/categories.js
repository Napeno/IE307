import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,  
      },
      tabContainer: {
        flexDirection: 'row',
        backgroundColor: '#f5f5f5',
        paddingVertical: 5,
        justifyContent: 'space-around',
      },
      tab: {
        paddingHorizontal: 25,
        paddingVertical: 10,
        borderRadius: 5,
      },
      activeTab: {
        borderBottomWidth: 2,
        borderBottomColor: '#2295ed',
      },
      tabText: {
        fontWeight: 'bold',
        color: '#BDBDBD',
      },
      activeTabText: {
        color: 'black',
      },
      content: {
        fontSize: 18,
        marginTop: 20,
        textAlign: 'center',
      },

});

export default styles;
