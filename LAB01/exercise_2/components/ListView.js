import React, { useState } from 'react';
import {
    View,
    Text,
    FlatList,
    SectionList,
    Button, Image,
    TouchableOpacity
} from 'react-native';
import styles from '../styles/style';
import { workouts, fruits_vegetables } from '../constants/data';

const ListView = () => {
    const [selectedWorkouts, setSelectedWorkouts] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);

    const toggleWorkout = (item) => {
        setSelectedWorkouts((prev) => prev.includes(item)
            ? prev.filter((i) => i !== item)
            : [...prev, item]
        );
    };

    const toggleItem = (item) => {
        setSelectedItems((prev) => prev.includes(item)
            ? prev.filter((i) => i !== item)
            : [...prev, item]
        );
    };

    const renderWorkoutItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.type}</Text>
            <Button
                title={selectedWorkouts.includes(item.type) ? 'DESELECT' : 'SELECT'}
                onPress={() => toggleWorkout(item.type)} />
        </View>
    );

    const renderSectionItem = ({ item }) => (
        <TouchableOpacity onPress={() => toggleItem(item)}>
            <Text
                style={[
                    styles.sectionItem,
                    selectedItems.includes(item) && styles.selectedItem,
                ]}
            >
                {item}
            </Text>
        </TouchableOpacity>
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
            <FlatList
                data={workouts}
                renderItem={renderWorkoutItem}
                keyExtractor={(item) => item.id}
                style={styles.list} />

            <Text style={styles.title}>Fruits & Vegetables</Text>
            <SectionList
                sections={fruits_vegetables}
                renderItem={renderSectionItem}
                renderSectionHeader={renderSectionHeader}
                keyExtractor={(item, index) => item + index}
                style={styles.list} />

            <View style={styles.selectedContainer}>
                <Text style={styles.selectedTitle}>
                    Selected Items:
                </Text>
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
