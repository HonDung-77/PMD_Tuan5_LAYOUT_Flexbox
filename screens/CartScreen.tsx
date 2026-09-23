import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Pressable,
} from 'react-native';
import { BOOKS } from '../data/data';
import { BottomTabBar } from '../components/BottomTabBar';

interface CartScreenProps {
  onSelectTab?: (tabId: string) => void;
}

export const CartScreen = ({ onSelectTab }: CartScreenProps) => {
  // Lấy 3 cuốn sách đầu tiên làm danh sách mẫu trong giỏ hàng
  const cartItems = BOOKS.slice(0, 3);
  const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <SafeAreaView style={styles.container}>
      {/* Tiêu đề trang Giỏ hàng */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Giỏ Hàng Của Bạn</Text>
      </View>

      {/* VÙNG 1: Danh sách các món hàng cuộn được (flex: 1) */}
      <ScrollView
        style={styles.scrollList}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      >
        {cartItems.map((item) => (
          <View key={item.id} style={styles.cartRow}>
            <Image source={{ uri: item.image }} style={styles.cartThumb} />
            <View style={styles.cartInfo}>
              <Text style={styles.bookTitle} numberOfLines={1}>
                {item.title}
              </Text>
              <Text style={styles.quantityText}>Số lượng: 1</Text>
            </View>
            <Text style={styles.itemPrice}>
              {item.price.toLocaleString('vi-VN')} đ
            </Text>
          </View>
        ))}
      </ScrollView>

      {/* VÙNG 2: Khối tổng tiền & nút thanh toán cố định */}
      <View style={styles.checkoutBar}>
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Tổng tiền thanh toán:</Text>
          <Text style={styles.totalValue}>
            {totalAmount.toLocaleString('vi-VN')} đ
          </Text>
        </View>
        <Pressable style={styles.checkoutBtn}>
          <Text style={styles.checkoutText}>Thanh Toán Ngay</Text>
        </Pressable>
      </View>

      {/* VÙNG 3: Thanh Tab Bar cố định dưới đáy */}
      <BottomTabBar activeTab="Cart" onSelectTab={onSelectTab} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    height: 52,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#e2e8f0',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  scrollList: {
    flex: 1, // Chiếm trọn không gian ở giữa, cho phép danh sách cuộn
  },
  listContent: {
    padding: 14,
  },
  cartRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  cartThumb: {
    width: 50,
    height: 70,
    borderRadius: 4,
    backgroundColor: '#cbd5e1',
  },
  cartInfo: {
    flex: 1,
    marginLeft: 12,
    marginRight: 8,
  },
  bookTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1e293b',
  },
  quantityText: {
    fontSize: 13,
    color: '#64748b',
    marginTop: 6,
  },
  itemPrice: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#16a34a',
  },
  checkoutBar: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderTopWidth: 1,
    borderColor: '#e2e8f0',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  totalLabel: {
    fontSize: 15,
    color: '#475569',
  },
  totalValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dc2626',
  },
  checkoutBtn: {
    backgroundColor: '#4338ca',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  checkoutText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});