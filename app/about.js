import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking, TouchableOpacity } from 'react-native';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { styles } from '../styles/GlobalStyles';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function AboutScreen() {
  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.containerAbout}>
      <SafeAreaView>
      <Text style={styles.title}>About WinnerGPT</Text>
      <Text style={styles.description}>
        WinnerGPT uses advanced GPT technology to predict upcoming Premier League games. It analyzes historical data, team performance, and other factors to give predictions and insights for entertainment purposes.
      </Text>
      <Text style={styles.sectionTitle}>Features:</Text>
      <Text style={styles.description}>
        - Predictions based on GPT analysis
        {'\n'}- Team performance and match stats
        {'\n'}- Easy-to-use interface
        {'\n'}- Regular updates
      </Text>
      <Text style={styles.sectionTitle}>Creators:</Text>
      <Text style={styles.description}>
        Developed by a team of football enthusiasts and tech experts, WinnerGPT aims to blend cutting-edge technology with football analysis.
      </Text>
      <Text style={styles.sectionTitle}>Contact Us:</Text>
      <Text style={styles.description}>
        For support, email us at: support@makedbyryan.tech
      </Text>
      <Text style={styles.sectionTitle}>Disclaimer:</Text>
      <Text style={styles.disclaimer}>
        Predictions are based on analysis but are not guaranteed to be accurate. The app is for entertainment only. We are not responsible for any outcomes or losses.
      </Text>
      <View style={styles.socialContainer}>
        <TouchableOpacity onPress={() => openLink('https://www.linkedin.com/in/ryancarlos/')}>
        <AntDesign name="linkedin-square" size={24} color="black" />
                </TouchableOpacity>
        <TouchableOpacity onPress={() => openLink('https://instagram.com/make4ryan')}>
        <AntDesign name="instagram" size={24} color="black" />
                </TouchableOpacity>
        <TouchableOpacity onPress={() => openLink('https://www.tiktok.com/@madebryan')}>
        <FontAwesome5 name="tiktok" size={24} color="black" />
                </TouchableOpacity>
      </View>
      </SafeAreaView>
    </ScrollView>
  );
}

