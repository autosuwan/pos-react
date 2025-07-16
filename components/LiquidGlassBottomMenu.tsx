import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const menuItems = [
  { label: 'Home', icon: <Ionicons name="home-outline" size={24} color="white" /> },
  { label: 'Settings', icon: <Ionicons name="settings-outline" size={24} color="white" /> },
  { label: 'Profile', icon: <Ionicons name="person-outline" size={24} color="white" /> },
];

export default function LiquidGlassBottomMenu({ onItemPress }: { onItemPress: (index: number) => void }) {
  return (
    <View style={styles.outerContainer}>
      <BlurView intensity={95} tint="systemUltraThinMaterialDark" style={styles.blurContainer}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            activeOpacity={0.7}
            onPress={() => onItemPress(index)}
          >
            {item.icon}
            <Text style={styles.menuText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </BlurView>
      <LinearGradient
        colors={['rgba(255,255,255,0.2)', 'transparent', 'transparent', 'rgba(255,255,255,0.1)']}
        locations={[0, 0.4, 0.6, 1]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.glossOverlay}
      />
      <LinearGradient
        colors={['rgba(255,255,255,0.2)', 'rgba(255,255,255,0.05)']} 
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }} 
        style={styles.topLightBorder}
      />
      <LinearGradient
        colors={['rgba(255,255,255,0.05)', 'rgba(255,255,255,0.2)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }} 
        style={styles.bottomLightBorder}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
    height: 65,
    borderRadius: 35,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
  },
  blurContainer: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(255, 255, 255, 0.15)',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  glossOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 35,
    pointerEvents: 'none',
  },
  topLightBorder: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 1, 
    borderRadius: 35, 
    pointerEvents: 'none',
  },
  bottomLightBorder: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 1, 
    borderRadius: 35, 
    pointerEvents: 'none',
  },
  menuItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  menuText: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: 10,
    marginTop: 4,
    fontWeight: '500',
  },
});