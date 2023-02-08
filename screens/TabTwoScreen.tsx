import { StyleSheet, ScrollView } from 'react-native';

import { View } from '../components/Themed';

import CardShadow  from '../components/CardShadow';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <CardShadow></CardShadow>
        <CardShadow></CardShadow>
        <CardShadow></CardShadow>
        <CardShadow></CardShadow>
        <CardShadow></CardShadow>
        <CardShadow></CardShadow>
        <CardShadow></CardShadow>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
