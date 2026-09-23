import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface FloatingCartButtonProps {
  count?: number;
}

export const FloatingCartButton = ({ count = 4 }: FloatingCartButtonProps) => {
  return (
    <View style={styles.fabContainer}>
      <Text style={styles.fabIcon}>🛒</Text>

      {/* Badge số lượng ở góc trên-phải của nút tròn */}
      {count > 0 && (
        <View style={styles.countBadge}>
          <Text style={styles.countText}>{count}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  fabContainer: {
    position: 'absolute', // Định vị nổi theo màn hình
    bottom: 24,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30, // Tạo hình tròn chuẩn (bán kính = width / 2)
    backgroundColor: '#4338ca',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  fabIcon: {
    fontSize: 24,
  },
  countBadge: {
    position: 'absolute', // Định vị theo góc nút tròn
    top: -4,
    right: -4,
    backgroundColor: '#ef4444',
    minWidth: 22,
    height: 22,
    borderRadius: 11,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  countText: {
    color: '#ffffff',
    fontSize: 11,
    fontWeight: 'bold',
  },
});