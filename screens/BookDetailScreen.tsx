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
import { Book } from '../data/data';

interface BookDetailScreenProps {
  book: Book;
}

export const BookDetailScreen = ({ book }: BookDetailScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* 1. Phần nội dung cuộn ở giữa */}
      <ScrollView style={styles.scrollBody} contentContainerStyle={styles.scrollContent}>
        {/* Ảnh bìa lớn căn giữa độc lập bằng alignSelf */}
        <Image source={{ uri: book.image }} style={styles.largeCover} />

        <View style={styles.detailCard}>
          <Text style={styles.title}>{book.title}</Text>
          <Text style={styles.author}>Tác giả: {book.author}</Text>
          <Text style={styles.price}>{book.price.toLocaleString('vi-VN')} đ</Text>

          <View style={styles.divider} />

          <Text style={styles.descHeading}>Mô tả cuốn sách</Text>
          <Text style={styles.description}>{book.description}</Text>
          <Text style={styles.description}>
            {/* Lặp lại văn bản giả lập đoạn mô tả dài cần cuộn */}
            {book.description} Cuốn sách mang lại nhiều bài học giá trị sâu sắc, đúc kết qua nhiều trải nghiệm thực tế giúp người đọc có cái nhìn rộng mở hơn về cuộc sống và cách ứng xử.
          </Text>
        </View>
      </ScrollView>

      {/* 2. Thanh nút bấm cố định dưới đáy (nằm ngoài ScrollView) */}
      <View style={styles.bottomBar}>
        <View>
          <Text style={styles.bottomBarLabel}>Tạm tính</Text>
          <Text style={styles.bottomBarPrice}>
            {book.price.toLocaleString('vi-VN')} đ
          </Text>
        </View>
        <Pressable style={styles.addToCartBtn}>
          <Text style={styles.addToCartText}>+ Thêm vào giỏ</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollBody: {
    flex: 1, // Chiếm trọn không gian ở giữa
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 24,
  },
  largeCover: {
    width: 200,
    aspectRatio: 3 / 4, // Giữ tỷ lệ khung hình bìa sách chuẩn
    borderRadius: 8,
    alignSelf: 'center', // Căn giữa ảnh độc lập
    marginVertical: 14,
    backgroundColor: '#cbd5e1',
  },
  detailCard: {
    marginTop: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  author: {
    fontSize: 15,
    color: '#64748b',
    marginTop: 4,
  },
  price: {
    fontSize: 20,
    fontWeight: '700',
    color: '#dc2626',
    marginVertical: 10,
  },
  divider: {
    height: 1,
    backgroundColor: '#e2e8f0',
    marginVertical: 12,
  },
  descHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    lineHeight: 22,
    color: '#334155',
    marginBottom: 10,
  },
  bottomBar: {
    height: 70,
    borderTopWidth: 1,
    borderColor: '#e2e8f0',
    backgroundColor: '#ffffff',
    flexDirection: 'row', // Xếp ngang
    justifyContent: 'space-between', // Đẩy giá sang trái, nút sang phải
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  bottomBarLabel: {
    fontSize: 12,
    color: '#64748b',
  },
  bottomBarPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dc2626',
  },
  addToCartBtn: {
    backgroundColor: '#4338ca',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  addToCartText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 15,
  },
});