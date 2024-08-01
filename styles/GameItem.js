import { StyleSheet, Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

export const styles = StyleSheet.create({
  dateContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
  date: {
    marginHorizontal: 5,
    fontSize: 18,
    color: '#555',
  },
  time: {
    justifyContent: 'center',
    fontSize: 18,
    color: '#555',
  },
  gameColumn: {
    flexDirection: 'column',
    alignItems: 'center', // Centraliza o conteúdo horizontalmente
    marginTop: 10,
  },
  centeredWrapper: {
    position: 'relative',
    width: '100%', // Garante que o wrapper ocupe toda a largura disponível
    alignItems: 'center', // Centraliza o conteúdo do wrapper horizontalmente
  },
  winnerteam: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#444',
    textAlign: 'center',
    position: 'absolute',
  },
  lottie: {
    height: 50,
    width: 50,
    position: 'absolute', // Posiciona o Lottie em relação ao contêiner pai
    left: 30,
    marginRight: '10%',
    transform: [{ translateY: -15 }], // Ajusta para o centro verticalmente (metade da altura do Lottie)
  },
  winner: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#444',
    textAlign: 'center',
    width: '100%', // Garante que o texto ocupe toda a largura disponível
  },
  analysis: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
    marginTop: 50,
  },
  gameContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    padding: 10,
    marginBottom: 20,
    flexGrow: 1,
    marginHorizontal: 5,
  },
});