import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function TeamDetail() {
  const { teamId, gameData } = useLocalSearchParams();  // Acessa os parâmetros 'teamId' e 'gameData'

  const game = gameData ? JSON.parse(gameData) : null;

  if (!teamId || !game) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Time ou Jogo não encontrado</Text>
      </View>
    );
  }

  const formatRecentForm = (form) => {
    return form.split('').map((char, index) => {
      let color;
      switch (char) {
        case 'W':
          color = 'green';
          break;
        case 'D':
          color = 'gray';
          break;
        case 'L':
          color = 'red';
          break;
        default:
          color = 'black';
      }
      return <Text key={index} style={[styles.formText, { color }]}>{char}</Text>;
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{game.home_team_name} vs {game.away_team_name}</Text>
        <Text style={styles.date}>{new Date(game.fixture_date).toLocaleString()}</Text>
        <Text style={styles.prediction}>Previsão: {game.gpt_prediction}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subTitle}>Análise:</Text>
        <Text style={styles.analysis}>{game.gpt_reason}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subTitle}>Dados das Equipes:</Text>
        <Text style={styles.detail}>Time que joga em casa: {game.home_team_name}</Text>

        <Text style={styles.detail}>% de Vitórias {game.home_team_name} em casa: <Text style={styles.bold}>{game.home_team_win_percentage}%</Text></Text>
        <Text style={styles.detail}>% de Vitórias {game.away_team_name} fora de casa: <Text style={styles.bold}>{game.away_team_win_percentage}%</Text></Text>
        <Text style={styles.detail}>Clean Sheets {game.home_team_name}: <Text style={styles.bold}>{game.home_team_clean_sheets}</Text></Text>
        <Text style={styles.detail}>Clean Sheets {game.away_team_name}: <Text style={styles.bold}>{game.away_team_clean_sheets}</Text></Text>
        <Text style={styles.detail}>Fracasso em Marcar {game.home_team_name}: <Text style={styles.bold}>{game.home_team_failed_to_score}</Text></Text>
        <Text style={styles.detail}>Fracasso em Marcar {game.away_team_name}: <Text style={styles.bold}>{game.away_team_failed_to_score}</Text></Text>
        <Text style={styles.detail}>Forma Recente {game.home_team_name}:</Text>
        <View style={styles.formContainer}>
          {formatRecentForm(game.home_team_recent_form || 'Não disponível')}
        </View>
        <Text style={styles.detail}>Forma Recente {game.away_team_name}:</Text>
        <View style={styles.formContainer}>
          {formatRecentForm(game.away_team_recent_form)}
        </View>
        <Text style={styles.detail}>Maior Sequência de Vitórias do {game.home_team_name} <Text style={styles.bold}>{game.home_team_biggest_winning_streak}</Text></Text>
        <Text style={styles.detail}>Maior Sequência de Vitórias do {game.away_team_name}: <Text style={styles.bold}>{game.away_team_biggest_winning_streak}</Text></Text>
        <Text style={styles.detail}>Maior Sequência de Derrotas do {game.home_team_name} <Text style={styles.bold}>{game.home_team_biggest_losing_streak}</Text></Text>
        <Text style={styles.detail}>Maior Sequência de Derrotas do {game.away_team_name} : <Text style={styles.bold}>{game.away_team_biggest_losing_streak}</Text></Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  header: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  date: {
    fontSize: 16,
    color: '#666',
    marginVertical: 5,
  },
  prediction: {
    fontSize: 16,
    color: '#007BFF',
    fontWeight: 'bold',
  },
  section: {
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  detail: {
    fontSize: 16,
    color: '#555',
    marginVertical: 4,
  },
  analysis: {
    fontSize: 16,
    color: '#333',
    marginVertical: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
  errorText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
  formContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  formText: {
    fontSize: 16,
    marginRight: 2,
  },
});