import { StyleSheet, Image } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ola Mariana Q.</Text>

      <Text style={styles.usernameTopQuestion}>O que voce procura hoje?</Text>

      <Image source={ require('../assets/images/image_1.png') } style={styles.carrouselFirstImage}></Image>

      <Text >Bunker Down</Text>
      <Text >Alien Workshop * 2019 * 37 min</Text>

      <Text>Lancamentos</Text>
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
    fontSize: 20,
    fontWeight: 'bold',
  },
  usernameTopQuestion:{
    // position: 'absolute',
    // width: '168px',
    // height: '18px',
    fontFamily: 'Quicksand',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 18,
    color: '#313131',
    opacity: 0.5,
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
