import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BOOKS } from '../data/data';
import { BookCoverWithBadge } from './BookCoverWithBadge';

export const BookGrid = () => {
  return (
    <View style={styles.gridContainer}>
      {BOOKS.map((book) => (
        <View key={book.id} style={styles.gridItem}>
          <BookCoverWithBadge imageUri={book.image} discount={book.discount} />
          <View style={styles.gridInfo}>
            <Text style={styles.gridTitle} numberOfLines={2}>
              {book.title}
            </Text>
            <Text style={styles.gridPrice}>
              {book.price.toLocaleString('vi-VN')} đ
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },
  gridItem: {
    width: '48%',
    marginBottom: 14,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    overflow: 'hidden',
  },
  gridInfo: {
    padding: 8,
  },
  gridTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    minHeight: 36,
  },
  gridPrice: {
    fontSize: 14,
    fontWeight: '700',
    color: '#dc2626',
    marginTop: 4,
  },
});