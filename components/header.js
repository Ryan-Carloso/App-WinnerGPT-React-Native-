import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, useWindowDimensions, Image } from 'react-native';

const Header = ({ selectedTeam, setSelectedTeam, sortOrder, setSortOrder }) => {
  const [showFilters, setShowFilters] = useState(false);
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <View style={styles.container}>
  <View style={styles.containerImage}>
  <Text style={styles.text}>Winner GPT</Text>
    <Image
      style={styles.tinyLogo}
      source={require('../assets/icon.png')}
    />
  </View>
      <View style={styles.topBar}>
        <TextInput
          style={styles.input}
          placeholder="Enter team name"
          value={selectedTeam}
          onChangeText={setSelectedTeam}
        />
        <TouchableOpacity onPress={toggleFilters} style={styles.filterButton}>
          <Text style={styles.filterButtonText}>Filters ▼</Text>
        </TouchableOpacity>
      </View>
      {showFilters && (
        <View style={styles.sortButtons}>
          <Text style={styles.filterHeader}>Sort Options</Text>
          <TouchableOpacity onPress={() => setSortOrder('closest')} style={styles.filterOption}>
            <Text>Closest</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSortOrder('farthest')} style={styles.filterOption}>
            <Text>Farthest</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSortOrder('oldest')} style={styles.filterOption}>
            <Text>Oldest</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    position: 'relative',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  tinyLogo: {
    width: 70,
    height: 70,
  },
  containerImage: {
    flexDirection: 'row',
    alignItems: 'center', 
    margin: 'auto'

  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    width: '70%',
    maxWidth: 300,
    borderRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    fontSize: 20,

  },
  filterButton: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    marginLeft: 20,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  filterButtonText: {
    color: '#333',
    
  },
  sortButtons: {
    position: 'absolute',
    top: '100%',
    right: 0,
    backgroundColor: '#fff',
    zIndex: 10000,
    padding: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
  },
  filterHeader: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  filterOption: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
});

export default Header;