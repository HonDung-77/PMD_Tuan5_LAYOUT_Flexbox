import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CATEGORIES } from '../data/data';

export const CategoryChips = () => {
  return (
    <View style={styles.chipContainer}>
      {CATEGORIES.map((cat, index) => (
        <View key={index} style={styles.chip}>
          <Text style={styles.chipText}>{cat}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    padding: 12,
    alignContent: 'flex-start',
  },
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#4338ca',
    backgroundColor: '#eef2ff',
  },
  chipText: {
    color: '#4338ca',
    fontSize: 13,
    fontWeight: '500',
  },
});