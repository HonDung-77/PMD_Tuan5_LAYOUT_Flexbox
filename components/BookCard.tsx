import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Book } from '../data/data';

interface BookCardProps {
  book: Book;
}

export const BookCard = ({ book }: BookCardProps) => {
  return (
    <View style={styles.card}>
      {/* Ảnh bìa kích thước cố định */}
      <Image source={{ uri: book.image }} style={styles.coverImage} />

      {/* Cột thông tin bên phải */}
      <View style={styles.infoCol}>
        <View>
          <Text style={styles.title} numberOfLines={2}>
            {book.title}
          </Text>
          <Text style={styles.author} numberOfLines={1}>
            {book.author}
          </Text>
        </View>

        {/* Giá tiền căn dưới cùng nhờ justifyContent: 'space-between' */}
        <Text style={styles.price}>{book.price.toLocaleString('vi-VN')} đ</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 12,
    marginVertical: 10,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  coverImage: {
    width: 80,
    height: 110,
    borderRadius: 6,
    backgroundColor: '#cbd5e1',
  },
  infoCol: {
    flex: 1,
    height: 110, // Giữ chiều cao bằng ảnh bìa để justifyContent: 'space-between' hoạt động chuẩn
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginLeft: 14,
    paddingVertical: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  author: {
    fontSize: 13,
    color: '#64748b',
    marginTop: 4,
  },
  price: {
    fontSize: 15,
    fontWeight: '700',
    color: '#dc2626',
  },
});