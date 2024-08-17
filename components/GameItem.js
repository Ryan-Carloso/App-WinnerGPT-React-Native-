import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { styles as globalStyles } from '../styles/GlobalStyles'; // Renomeando para globalStyles
import { parseISO, isPast } from 'date-fns';
import { styles } from '../styles/GameItem';
import LottieAnimation from './LottieAnimation';
import { useLanguage } from './globalize/context'; // Ajuste o caminho conforme necessário


// Função auxiliar para verificar se a data já passou
const isDatePast = (dateString) => {
  const gameDate = parseISO(dateString); // Converte a string ISO para um objeto Date
  return isPast(gameDate); // Verifica se a data já passou
};

const GameItem = ({ item, numColumns }) => {
  const { translate } = useLanguage();
  const router = useRouter();

  const homeTeam = item.home_team_name;
  const awayTeam = item.away_team_name;
  const prediction = item.gpt_prediction;
  const analysis = item.gpt_reason;
  const date = item.fixture_date.slice(0, 10); // Extrair a data no formato AAAA-MM-DD
  const time = item.fixture_date.slice(11, 16); // Extrair a hora no formato HH:MM

  // Função para lidar com o clique no time
  const handlePressTeam = (gameData) => {
    router.push({
      pathname: `/team/${gameData.home_team_id}`,
      params: { gameData: JSON.stringify(gameData) }, // Passando os dados do jogo
    });
  };

  return (
    <TouchableOpacity onPress={() => handlePressTeam(item)}>
    <View style={[styles.gameContainer, { flexBasis: `${100 / numColumns}%` }]}>
      <Text style={globalStyles.title}>{homeTeam} vs {awayTeam}</Text>

      <View style={styles.dateContainer}>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
      <View style={styles.gameColumn}>
      <Text style={styles.winner}>{translate('byAI')}</Text>
        <View style={styles.centeredWrapper}>
          <Text style={styles.winnerteam}>{prediction}</Text>
          <LottieAnimation/>
        </View>
      </View>
      <Text style={styles.analysis}>{analysis}</Text>
    </View>
    </TouchableOpacity>
  );
};

export default GameItem;