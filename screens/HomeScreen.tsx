import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { Header } from '../components/Header';
import { CategoryChips } from '../components/CategoryChips';
import { BookGrid } from '../components/BookGrid';
import { FloatingCartButton } from '../components/FloatingCartButton';

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* 1. Header cố định phía trên (không nằm trong ScrollView) */}
      <Header />

      {/* 2. Phần nội dung cuộn được ở giữa */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <CategoryChips />
        <BookGrid />
      </ScrollView>

      {/* 3. Nút nổi cùng cấp với ScrollView (nằm ngoài để không bị cuộn theo nội dung) */}
      <FloatingCartButton count={3} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8fafc',
    position: 'relative',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 90, // Tránh để nút giỏ hàng che mất sách cuối cùng
  },
});