import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, Dimensions, ActivityIndicator, Button, View, Text } from 'react-native';
import Header from '../../components/header';
import GameItem from '../../components/GameItem';
import { styles } from '../../styles/GlobalStyles';
import { fetchData } from '../../utils/api';

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedTeam, setSelectedTeam] = useState('');
  const [sortOrder, setSortOrder] = useState('closest');
  const [numColumns, setNumColumns] = useState(1);

  useEffect(() => {
    fetchData(setLoading, setError, setData);
    adjustColumns();

    // Subscribe to dimension changes
    const subscription = Dimensions.addEventListener('change', adjustColumns);

    // Cleanup on unmount
    return () => {
      subscription?.remove(); // Use the remove method on the subscription object
    };
  }, []);

  const adjustColumns = () => {
    const { width } = Dimensions.get('window');
    if (width < 600) {
      setNumColumns(1);
    } else if (width < 900) {
      setNumColumns(2);
    } else {
      setNumColumns(3);
    }
  };

  const sortData = (data) => {
    const now = new Date();
    return data.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      if (sortOrder === 'closest') {
        return Math.abs(dateA - now) - Math.abs(dateB - now);
      } else if (sortOrder === 'farthest') {
        return Math.abs(dateB - now) - Math.abs(dateA - now);
      } else if (sortOrder === 'oldest') {
        return dateA - dateB;
      }
      return 0;
    });
  };

  const filteredData = sortData(data.filter((item) => {
    return selectedTeam ? item.game.toLowerCase().includes(selectedTeam.toLowerCase()) : true;
  }));

  if (loading) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Text>Error fetching data: {error.message}</Text>
          <Button title="Retry" onPress={() => fetchData(setLoading, setError, setData)} />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.containerheader}>
        <Header 
          selectedTeam={selectedTeam}
          setSelectedTeam={setSelectedTeam}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />
      </View>
      <ScrollView contentContainerStyle={styles.grid}>
        {filteredData.map((item) => (
          <GameItem key={item.id} item={item} numColumns={numColumns} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
