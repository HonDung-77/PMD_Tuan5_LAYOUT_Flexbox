import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.logoText}>BookStore</Text>
      <View style={styles.rightIcons}>
        <View style={styles.iconBtn}>
          <Text style={styles.iconText}>🔍 Tìm</Text>
        </View>
        <View style={styles.iconBtn}>
          <Text style={styles.iconText}>🛒 Giỏ hàng</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 56,
    backgroundColor: '#1e1b4b',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  logoText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  rightIcons: {
    flexDirection: 'row',
    gap: 10,
  },
  iconBtn: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 6,
  },
  iconText: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '500',
  },
});