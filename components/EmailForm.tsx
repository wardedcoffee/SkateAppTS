import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import * as FileSystem from 'expo-file-system';

export default function EmailForm() {
  const [email, setEmail] = useState('');

  
  
  
  const saveEmail = async () => {
      try {
          const fileInfo = await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'email.json');
          let data: string[] = [];
          
          if (!fileInfo.exists) {
              await FileSystem.writeAsStringAsync(FileSystem.documentDirectory + 'email.json', JSON.stringify(data));
            } else {
                const fileContents = await FileSystem.readAsStringAsync(FileSystem.documentDirectory + 'email.json');
                data = JSON.parse(fileContents);
            }
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            function validateEmail(email: string) {
              return emailRegex.test(email);
            }
            
            console.log(validateEmail('example@mail.com')); // true
            console.log(validateEmail('example@mail.')); // false
            console.log(validateEmail('example@mail.c')); // false
            console.log('print JSON' + data );

            if (emailRegex.test(email) == true) {
                console.log(email)
                data.push(email);
                await FileSystem.writeAsStringAsync(FileSystem.documentDirectory + 'email.json', JSON.stringify(data));
                setEmail('');
            } else {
                console.log('verifique o email digitado, tente algo como "example@mail.com" ')
            }
            
            


    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Enter email address"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        autoComplete="email"
        autoCorrect={false}
        style={{ borderWidth: 1, borderColor: 'gray', padding: 10 }}
      />
      <Button title="Save" onPress={saveEmail} />
    </View>
  );
}
