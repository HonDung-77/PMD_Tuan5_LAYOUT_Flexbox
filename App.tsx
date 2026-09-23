import React, { useState } from 'react';
import { View, StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import { HomeScreen } from './screens/HomeScreen';
import { BookDetailScreen } from './screens/BookDetailScreen';
import { CartScreen } from './screens/CartScreen';
import { BottomTabBar } from './components/BottomTabBar';
import { BOOKS } from './data/data';

export default function App() {
  // State quản lý tab hiện tại đang được chọn (Home, Category, Cart, Account)
  const [currentTab, setCurrentTab] = useState<string>('Home');

  return (
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar barStyle="light-content" backgroundColor="#1e1b4b" />

      {/* VÙNG CHỨA MÀN HÌNH CHÍNH (flex: 1 để giãn đầy không gian phía trên) */}
      <View style={styles.screenArea}>
        {/* 1. Tab Trang chủ: Ghép Header, Chips, Grid và FAB */}
        {currentTab === 'Home' && <HomeScreen />}

        {/* 2. Tab Danh mục: Xem màn hình chi tiết cuốn sách đầu tiên */}
        {currentTab === 'Category' && <BookDetailScreen book={BOOKS[0]} />}

        {/* 3. Tab Giỏ hàng: Màn hình Cart cuộn danh sách & thanh toán */}
        {currentTab === 'Cart' && <CartScreen onSelectTab={setCurrentTab} />}

        {/* 4. Tab Tài khoản: Xem màn hình chi tiết cuốn sách thứ hai */}
        {currentTab === 'Account' && <BookDetailScreen book={BOOKS[1]} />}
      </View>

      {/* THANH ĐIỀU HƯỚNG DÙNG CHUNG Ở ĐÁY (Ẩn khi ở màn Cart vì CartScreen đã có TabBar riêng) */}
      {currentTab !== 'Cart' && (
        <BottomTabBar activeTab={currentTab} onSelectTab={setCurrentTab} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#1e1b4b', // Khớp màu nền thanh trạng thái trên cùng
  },
  screenArea: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
});