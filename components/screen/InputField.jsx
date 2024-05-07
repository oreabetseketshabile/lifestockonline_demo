import { View, Text,TouchableOpacity,TextInput} from 'react-native'
import React from 'react'
import { InnerConatainer, PageTitle, StyledContainer, PageLogo, SubTitle, StyledFormArea, LeftIcon, StyledInputLabel, StyledTextInput, RightIcon, Colors } from '../../styles/search';
import { Octicons } from '@expo/vector-icons';
export default function InputField({ label, icon, inputType, keyboardType, fieldButtonLabel, fieldButtonFunction,value,onChangeText, }) {
  return (
    <View style={{
      flexDirection: 'row',
      borderBottomColor: '#ccc',
      borderBottomWidth: 1,
      paddingBottom: 8,
      marginBottom: 25
    }}>

      {icon}

      {inputType == 'password' ? (
        <TextInput
          placeholder={label}
          keyboardType={keyboardType}
          style={{
            flex: 1,
            paddingVertical: 0
          }}
          secureTextEntry={true}
          value={value}
           onChangeText={onChangeText}
        />
      ) : (
        <TextInput
          placeholder={label}
          keyboardType={keyboardType}
          style={{
            flex: 1,
            paddingVertical: 0
          }}
        />
      )}

      <TouchableOpacity onPress={fieldButtonFunction}>
        <Text style={{ color: '#006400', fontWeight: '700' }}> {fieldButtonLabel} </Text>
      </TouchableOpacity>

    </View>
  );
}

