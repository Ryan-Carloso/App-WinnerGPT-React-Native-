import React from 'react';
import { View, Text } from 'react-native';
import { styles as globalStyles } from '../styles/GlobalStyles'; // Renomeando para globalStyles
import { parseISO, isPast } from 'date-fns';
import LottieView from 'lottie-react-native';
import { styles } from '../styles/GameItem';
import LottieAnimation from './LottieAnimation'


// Função auxiliar para verificar se a data já passou
const isDatePast = (dateString) => {
  const gameDate = parseISO(dateString); // Converte a string ISO para um objeto Date
  return isPast(gameDate); // Verifica se a data já passou
};

const GameItem = ({ item, numColumns }) => {


  return (
  <View style={[styles.gameContainer, { flexBasis: `${100 / numColumns}%` }]}>
    <Text style={globalStyles.title}>{item.game}</Text>
    <View style={styles.dateContainer}>
      <Text style={styles.date}>{item.date}</Text>
      <Text style={styles.time}>{item.time ? item.time.slice(0, 5) : ''}</Text>
    </View>
    <View style={styles.gameColumn}>
      <Text style={styles.winner}>Forecasted by AI:</Text>
      
      <View style={styles.centeredWrapper}>

        <Text style={styles.winnerteam}>{item.winnerteam}</Text>
        <LottieAnimation/>
      </View>
    </View>
    <Text style={styles.analysis}>{item.analysis}</Text>
  </View>
  );
};

export default GameItem;

