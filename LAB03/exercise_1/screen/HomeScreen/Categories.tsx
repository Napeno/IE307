import React, { useState, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import styles from '../../styles/categories';

const TabHeader = ({ selectedTab, setSelectedTab }) => {
  return (
    <View style={styles.tabContainer}>
      <TouchableOpacity
        style={[styles.tab, selectedTab === 'Tab1' && styles.activeTab]}
        onPress={() => setSelectedTab('Tab1')}
      >
        <Text style={[styles.tabText, selectedTab === 'Tab1' && styles.activeTabText]}>
          Categories1
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, selectedTab === 'Tab2' && styles.activeTab]}
        onPress={() => setSelectedTab('Tab2')}
      >
        <Text style={[styles.tabText, selectedTab === 'Tab2' && styles.activeTabText]}>
          Categories2
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, selectedTab === 'Tab3' && styles.activeTab]}
        onPress={() => setSelectedTab('Tab3')}
      >
        <Text style={[styles.tabText, selectedTab === 'Tab3' && styles.activeTabText]}>
          Categories3
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const TabContent = ({ selectedTab }) => {
  if (selectedTab === 'Tab1') {
    return <Text style={styles.content}>Content for Tab 1</Text>;
  }
  else if (selectedTab === 'Tab2') {
    return <Text style={styles.content}>Content for Tab 2</Text>;
  } else {
    return <Text style={styles.content}>Content for Tab 3</Text>;
  }
};

export const Categories = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState('Tab1');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,  
      header: () => <TabHeader selectedTab={selectedTab} setSelectedTab={setSelectedTab} />,
    });
  }, [navigation, selectedTab]);

  return (
    <View style={styles.container}>
      <TabContent selectedTab={selectedTab} />
    </View>
  );
};
