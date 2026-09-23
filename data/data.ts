export interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  discount?: string | null;
  image: string;
  description: string;
}

export const CATEGORIES: string[] = [
  'Văn học',
  'Kinh tế',
  'Thiếu nhi',
  'Kỹ năng sống',
  'Truyện tranh',
  'Ngoại ngữ',
  'Lịch sử',
];

export const BOOKS: Book[] = [
  {
    id: 1,
    title: 'Đắc Nhân Tâm',
    author: 'Dale Carnegie',
    price: 86000,
    discount: '-20%',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400',
    description:
      'Cuốn sách đưa ra các lời khuyên về cách thức cư xử, ứng xử và giao tiếp với mọi người để đạt được thành công trong cuộc sống.',
  },
  {
    id: 2,
    title: 'Nhà Giả Kim',
    author: 'Paulo Coelho',
    price: 79000,
    discount: '-15%',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400',
    description:
      'Tất cả những trải nghiệm trong chuyến phiêu lưu theo đuổi vận mệnh của mình đã giúp Santiago thấu hiểu được ý nghĩa sâu xa nhất của hạnh phúc.',
  },
  {
    id: 3,
    title: 'Tuổi Trẻ Đáng Giá Bao Nhiêu',
    author: 'Rosie Nguyễn',
    price: 95000,
    discount: null,
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400',
    description:
      'Một cuốn sách không chỉ dành cho những người trẻ đang chênh vênh giữa dòng đời mà còn dành cho bất kỳ ai muốn sống trọn vẹn từng khoảnh khắc.',
  },
  {
    id: 4,
    title: 'Sapiens: Lược Sử Loài Người',
    author: 'Yuval Noah Harari',
    price: 185000,
    discount: '-30%',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400',
    description:
      'Dưới cái nhìn sắc sảo của tác giả, lịch sử loài người hiện ra vô cùng hấp dẫn và đầy bất ngờ.',
  },
];