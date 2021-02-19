import React from 'react';
import { View, Text, ImageBackground, ScrollView } from 'react-native';
import Fundo from '../../../assets/fundo.jpg';
import styles from './styles';

const lista = [
    {
        nome: "Caixa de lápis de cor, 24 cores",
        qtd: "1"
    },
    {
        nome: "Agenda 2021",
        qtd: "1"
    },
    {
        nome: "Caderno brochura grande de capa dura",
        qtd: "1"
    },
    {
        nome: "Caneta esferográfica azul ou preta",
        qtd: "2"
    },
    {
        nome: "Caneta marca texto – amarela;",
        qtd: "1"
    },
    {
        nome: "Cola líquida branca 110 g",
        qtd: "1"
    },
    {
        nome: "Lápis pretos",
        qtd: "3"
    },
    {
        nome: "Pacote de massinha de modelar 50 g",
        qtd: "1"
    },
    {
        nome: "Caixa de giz de cera, 12 cores",
        qtd: "1"
    },
    {
        nome: "Calculadora simples ",
        qtd: "1"
    },


]

function Lista() {
    return (
        <ScrollView style={styles.caixa}>
            
                <ImageBackground source={Fundo} style={styles.fundo}>
                    <View style={styles.fundo}>
                        <View style={styles.cardlist}>
                            {
                                lista.map((lista, index) =>
                                    <Text style={styles.lista} key={index}>{lista.nome}{"\n"}quant: {lista.qtd}</Text>
                                )
                            }
                        </View>
                    </View>
                </ImageBackground>
            
        </ScrollView>
    )
}

export default Lista;