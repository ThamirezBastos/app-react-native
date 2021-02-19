import React from 'react';
import { View, Text, ImageBackground, TextInput, Button } from 'react-native';

import Fundo from '../../../assets/fundo.jpg';

import styles from './styles';

function Home({ navigation }) {

    return (
        <View style={styles.caixa}>
            <ImageBackground source={Fundo} style={styles.fundo}>


                
                <Text style={styles.titulo}>A sua Lista de Materiais de 2021,{"\n"}
                        já está disponível.
                </Text>
                <Text style={styles.subtitulo}>Preparado para voltar as aulas ?!</Text>


                <Button
                    title="Acessar"
                    onPress={() => navigation.navigate('Login')}
                />

            </ImageBackground>

        </View >
    )
}


export default Home;