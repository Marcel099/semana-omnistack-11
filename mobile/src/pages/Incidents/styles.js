import { StyleSheet } from 'react-native'
import Constants from  'expo-constants'     

export default StyleSheet.create({
    container: {
        flex: 1,  // Faz ocupar o tamanho inteiro
        paddingHorizontal: 24,      // O mesmo que padding: 0 24 na web
        paddingTop: Constants.statusBarHeight + 20,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    headerText: {
        fontSize: 15,
        color: '#737380',
    },
    
    headerTextBold: {
        fontWeight: 'bold',
    },

    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: '#13131a',
        fontWeight: 'bold',
    },

    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#737380',  
    },

    incidentList: {
        marginTop: 32,
    },

    incident: {
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
    },

    incidentDetails: {
      paddingBottom: 32,
      paddingHorizontal: 24,
    },

    incidentProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
        marginTop: 24,
    },

    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        color: '#737380',
    },

    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 58,
        paddingHorizontal: 24,
        borderTopWidth: 1,
        borderTopColor: '#F0F0F5',
    },

    detailsButtonText: {
        color: '#e02041',
        fontSize: 15,
        fontWeight: 'bold',
    },
})