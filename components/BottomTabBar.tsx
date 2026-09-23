import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const TABS = [
  { id: 'Home', title: 'Trang chủ', icon: '🏠' },
  { id: 'Category', title: 'Danh mục', icon: '📚' },
  { id: 'Cart', title: 'Giỏ hàng', icon: '🛒' },
  { id: 'Account', title: 'Tài khoản', icon: '👤' },
];

interface BottomTabBarProps {
  activeTab?: string;
  onSelectTab?: (tabId: string) => void;
}

export const BottomTabBar = ({
  activeTab = 'Home',
  onSelectTab,
}: BottomTabBarProps) => {
  return (
    <View style={styles.tabBar}>
      {TABS.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <Pressable
            key={tab.id}
            style={styles.tabItem}
            onPress={() => onSelectTab && onSelectTab(tab.id)}
          >
            <Text style={styles.tabIcon}>{tab.icon}</Text>
            <Text style={[styles.tabLabel, isActive && styles.activeTabLabel]}>
              {tab.title}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: 60,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderColor: '#e2e8f0',
  },
  tabItem: {
    flex: 1, // Chia đều không gian 4 phần bằng nhau
    flexDirection: 'column', // Icon trên, chữ dưới
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabIcon: {
    fontSize: 18,
    marginBottom: 2,
  },
  tabLabel: {
    fontSize: 11,
    color: '#64748b',
  },
  activeTabLabel: {
    color: '#4338ca',
    fontWeight: 'bold',
  },
});