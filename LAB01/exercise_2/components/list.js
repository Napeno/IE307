import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  SectionList,
  Button,
  Image,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import styles from '../styles/style';
import { workouts, fruits_vegetables } from '../constants/data';
import { ScrollView } from 'react-native-virtualized-view'

const ListView = () => {
  const [selectedWorkouts, setSelectedWorkouts] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleWorkout = (item) => {
    setSelectedWorkouts((prev) =>
      prev.includes(item)
        ? prev.filter((i) => i !== item)
        : [...prev, item]
    );
  };

  const toggleItem = (item) => {
    setSelectedItems((prev) =>
      prev.includes(item)
        ? prev.filter((i) => i !== item)
        : [...prev, item]
    );
  };

  const renderWorkoutItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.type}</Text>
      <Button
        title={selectedWorkouts.includes(item.type) ? 'DESELECT' : 'SELECT'}
        onPress={() => toggleWorkout(item.type)}
      />
    </View>
  );

  const renderSectionItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item}</Text>
      <Button
        title={selectedItems.includes(item) ? 'DESELECT' : 'SELECT'}
        onPress={() => toggleItem(item)}
      />
    </View>
  );

  const renderSectionHeader = ({ section: { title, url } }) => (
    <View style={styles.sectionHeader}>
      <Image source={{ uri: url }} style={styles.headerImage} />
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );

  return (
        <View style={styles.container}>
        <Text style={styles.title}>Workouts</Text>
        <ImageBackground
            source={{ uri: 'https://www.mensjournal.com/.image/t_share/MTk2MTM3MzY2MDc0NjMxNjg1/fitness-model-showing-off-abs-and-arms.jpg' }}
            style={styles.imageBackground}
        >
            <FlatList
            data={workouts}
            renderItem={renderWorkoutItem}
            keyExtractor={(item) => item.id}
            style={styles.list}
            />
        </ImageBackground>

        <Text style={styles.title}>Fruits & Vegetables</Text>
        <ImageBackground
            source={{ uri: 'https://img.freepik.com/premium-photo/flat-lay-composition-with-citrus-fruits-leaves-flowers-white-background-copy-space_370312-150.jpg' }}
            style={styles.imageBackgroundS}
        >
            <SectionList
                sections={fruits_vegetables}
                renderItem={renderSectionItem}
                renderSectionHeader={renderSectionHeader}
                keyExtractor={(item, index) => item + index}
                style={styles.list}
            />
        </ImageBackground>

        <View style={styles.selectedContainer}>
            <Text style={styles.selectedTitle}>Selected Items:</Text>
            <Text style={styles.selectedText}>
            {selectedWorkouts.join(', ')}
            </Text>
            <Text style={styles.selectedText}>
            {selectedItems.join(', ')}
            </Text>
        </View>
        </View>

  );
};

export default ListView;
