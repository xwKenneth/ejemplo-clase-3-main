import React from 'react';
import { View, StyleSheet, Text, FlatList, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import data from '../data/data'; // Asegúrate de que 'data' incluya los nuevos apartados y tarjetas
import Boton from '../components/Boton';

const Pantalla1 = ({ navigation }) => {
    // Divide la información en los apartados requeridos
    const coloresAcuosos = data.filter(item => item.category === 'Colores Acuosos');
    const naturalColors = data.filter(item => item.category === 'Natural Colors');
    const otherColors1 = data.filter(item => item.category === 'Other Colors 1');
    const otherColors2 = data.filter(item => item.category === 'Other Colors 2');

    const irPantalla2 = async () => {
        navigation.navigate('Pantalla2');
    };

    // Renderiza cada apartado con su propio FlatList
    return (
        <View style={styles.container}>
            <Section title="Colores Acuosos" data={coloresAcuosos} />
            <Section title="Natural Colors" data={naturalColors} />
            <Section title="Other Colors 1" data={otherColors1} />
            <Section title="Other Colors 2" data={otherColors2} />

            <Boton textoBoton='Ir a créditos' accionBoton={irPantalla2} />
        </View>
    );
};

// Componente para renderizar cada sección
const Section = ({ title, data }) => (
    <View style={styles.sectionContainer}>
        <Text style={styles.title}>{title}</Text>
        <FlatList
            data={data}
            numColumns={3}
            renderItem={({ item }) => (
                <View style={[styles.cardContainer, { backgroundColor: item.colorCode }]}>
                    <Image source={item.src} style={styles.image} />
                    <Text style={styles.cardTitle}>{item.title}</Text>
                </View>
            )}
            keyExtractor={(item) => item.id}
        />
    </View>
);

export default Pantalla1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        marginTop: StatusBar.currentHeight || 20,
    },
    sectionContainer: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 0,
    },
    flatListContainer: {
        height: 360,
        marginHorizontal: 5
    },
    cardContainer: {
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        marginHorizontal: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems: 'center'
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#34495e',  
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFF',  
    },
    texto: {
        marginHorizontal: 15
    }
});
