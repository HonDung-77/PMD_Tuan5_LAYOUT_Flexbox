import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface BookCoverWithBadgeProps {
  imageUri: string;
  discount?: string | null;
}

export const BookCoverWithBadge = ({ imageUri, discount }: BookCoverWithBadgeProps) => {
  return (
    <View style={styles.coverWrapper}>
      <Image source={{ uri: imageUri }} style={styles.image} />
      {discount && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{discount}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  coverWrapper: {
    position: 'relative',
    width: '100%',
    aspectRatio: 3 / 4,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 6,
    backgroundColor: '#cbd5e1',
  },
  badge: {
    position: 'absolute',
    top: 6,
    left: 6,
    backgroundColor: '#ef4444',
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 4,
  },
  badgeText: {
    color: '#ffffff',
    fontSize: 11,
    fontWeight: 'bold',
  },
});