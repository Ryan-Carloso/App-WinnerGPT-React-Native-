// components/header.js
import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Picker, useWindowDimensions, Image } from 'react-native';
import { Picker as RNPicker } from '@react-native-picker/picker'; // Importa o Picker

const Header = ({ selectedTeam, setSelectedTeam, sortOrder, setSortOrder, selectedLeague, setSelectedLeague }) => {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;
  const [isPickerVisible, setIsPickerVisible] = useState(false);

  const togglePickerVisibility = () => {
    setIsPickerVisible(prevState => !prevState);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.containerImage}>
          <Text style={styles.text}>Winner GPT</Text>
          <Image
            style={styles.tinyLogo}
            source={require('../assets/icon.png')}
          />
        </View>
        <TouchableOpacity onPress={togglePickerVisibility} style={styles.button}>
          <Text style={styles.buttonText}>Select League</Text>
        </TouchableOpacity>
      </View>
      {isPickerVisible && (
        <View style={styles.pickerContainer}>
          <RNPicker
            selectedValue={selectedLeague}
            style={styles.picker}
            onValueChange={(itemValue) => setSelectedLeague(itemValue)}
          >
            <RNPicker.Item label="All Leagues" value="all" />
            <RNPicker.Item label="Premier League" value="premierleague" />
            <RNPicker.Item label="Champions League" value="championsleague" />
            <RNPicker.Item label="Liga Portugal" value="ligaportugal" />
          </RNPicker>
        </View>
      )}
      <View style={styles.topBar}>
        <TextInput
          style={styles.input}
          placeholder="Enter team name"
          value={selectedTeam}
          onChangeText={setSelectedTeam}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  containerImage: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  tinyLogo: {
    width: 70,
    height: 70,
  },
  pickerContainer: {
    marginVertical: 10,
    maxWidth: 200,
  },
  picker: {
    height: 40,
    width: '100%',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    width: '100%',
    maxWidth: 300,
    borderRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    fontSize: 20,
  },
  button: {
    padding: 10,
    backgroundColor: 'gray',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Header;