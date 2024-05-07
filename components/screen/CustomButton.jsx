import { TouchableOpacity, Text } from 'react-native';
import React from 'react';

export default function CustomButton({ label, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: '#006400',
        padding: 20,
        borderRadius: 20,
        marginBottom: 30
      }}
    >
      <Text style={{ color: '#fff', fontWeight: '700', textAlign: 'center' }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}
