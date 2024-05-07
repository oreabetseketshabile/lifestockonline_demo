

import React, { useState } from 'react';
import { View, Text, SafeAreaView, TextInput, TouchableOpacity,ScrollView } from 'react-native';
import { icons } from '../../constants';
import { ScreenHeaderBtn } from '..';
import InputField from './InputField';
import CustomButton from './CustomButton';

const Messages = (props) => {

  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleClearMessages = () => {
    setMessages([]);
  };

  const handleSendMessage = () => {
    if (username.trim() === '') {
      alert('Please enter your name.');
      return;
    }

    if (message.trim() === '') {
      alert('Please enter your message.');
      return;
    }

    setMessages([...messages, { username, message }]);
    setMessage('');
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ textAlign: 'center', fontSize: 24, marginBottom: 10 }}>
        Chat
      </Text>
      <CustomButton label="Clear" color="red" onPress={handleClearMessages} />
      <TextInput
        style={{ borderWidth: 1, borderColor: 'gray', marginBottom: 20, padding: 10 }}
        placeholder="Enter name..."
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <View style={{  }}>
        <Text></Text>
      </View>
      <ScrollView style={{ borderWidth: 1, borderColor: 'gray', marginBottom: 20, padding: 50, maxHeight: 300 }}>
        {messages.map((msg, index) => (
          <View key={index} style={{ marginBottom: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>{msg.username}</Text>
            <Text>{msg.message}</Text>
          </View>
        ))}
      </ScrollView>

      <TextInput
        style={{ borderWidth: 1, borderColor: 'gray', marginBottom: 20, padding: 20 }}
        placeholder="Enter message..."
        value={message}
        onChangeText={text => setMessage(text)}
      />
      <CustomButton label="Send Message" onPress={handleSendMessage} />
    </View>
  );
};

export default Messages;
