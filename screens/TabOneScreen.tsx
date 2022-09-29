import { StyleSheet, Image } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ola Mariana Q.</Text>

      <Text style={styles.usernameTopQuestion}>O que voce procura hoje?</Text>

      <Image source={ require('../assets/images/image_1.png') } style={styles.carrouselFirstImage}></Image>

      <Text style={styles.bunkerDown}>Bunker Down</Text>
      <Text >Alien Workshop * 2019 * 37 min</Text>

      <Text >Lancamentos</Text>
      <Text>Trilhas sonoras</Text>
      <Text>Destaque</Text>

      <View style={styles.container}>
        <Image source={ require('../assets/images/image_4.png') } style={styles.cardMenorImage}></Image>
        <Text>Cover Version</Text>
        <Text>Alien Workshop * 2019 * 37 min</Text>
        <Text>Trilha sonora</Text>
        <Text>Defon</Text>
      </View>
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      {/* <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 14,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontFamily: 'quicksand-bold',
    fontSize: 22,
    marginBottom: 3,
  },
  usernameTopQuestion:{
    fontFamily: 'quicksand-regular',
    fontSize: 14,
    lineHeight: 18,
    color: '#313131',
    opacity: 0.5,
    marginBottom: 24,
  },
  bunkerDown:{
    fontFamily: 'quicksand-bold',
    fontSize: 16,
    lineHeight: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  carrouselFirstImage: {
    position: "relative",
    borderRadius: 15,
    width: '80%',
  },
  cardMenorImage: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8, 
  },
});
