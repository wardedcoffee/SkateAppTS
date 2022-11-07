import { StyleSheet, Image, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

import CardShadow  from '../components/CardShadow';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>

      <View style={{ marginLeft: 16 }}>
        <Text style={styles.title}>Ola Mariana Q.</Text>
        <Text style={styles.usernameTopQuestion}>O que voce procura hoje?</Text>
      </View>
      <ScrollView>
        <View style={styles.card}>
          <Image source={ require('../assets/images/image_1.png') } style={styles.carrouselFirstImage}></Image>
          <View style={styles.flexDirection}>
            <Text style={styles.bunkerDown}>Bunker Down</Text>
            <MaterialIcons
                  name="favorite-border"
                  size={24}
                  // color={Colors[colorScheme].text}
                  style={{ marginRight: 60, marginTop: 10 }}
                />
            {/* <Image style={styles.favoriteBorder} source={ require('../assets/icons/favorite_border.png')}></Image> */}
          </View>
          <Text style={styles.videoInfo}>Alien Workshop * 2019 * 37 min</Text>
        </View>


        <View style={styles.containerTabsText}>
          <Text style={styles.tabSelected}>Lancamentos</Text>
          <Text style={styles.tabNotSelected}>Trilhas sonoras</Text>
          <Text style={styles.tabNotSelected}>Destaque</Text>
        </View>

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
    // marginLeft: 14,
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: '#red'
  },
  card:{
    marginBottom: 48,
    marginLeft: 16,
    maxWidth: 350, 
  },
  flexDirection:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  containerTabsText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 16,
    marginBottom: 16,
    // justifyContent: 'center'
  },
  tabSelected: {
    fontFamily: 'quicksand-bold',
    fontSize: 16,
    color: '#313131',
    marginRight: 22,
    marginBottom: 0,
  },
  tabNotSelected: {
    fontFamily: 'quicksand-bold',
    fontSize: 16,
    color: '#313131',
    marginRight: 22,
    marginBottom: 0,
    opacity: 0.4,
  },
  cardMenor: {
    marginLeft: 16,
    // marginTop: 16,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    width: 328,
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
    marginBottom: 8,
  },
  favoriteBorder: {
    height: 16,
    width: 16,
    marginTop: 10,
    marginRight: 68
  },
  videoInfo:{
    fontFamily: 'quicksand-regular',
    fontSize: 14,
    margin: 0,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  carrouselFirstImage: {
    // position: "relative",
    borderRadius: 15,
    // width: '80%',
  },
  cardMenorImage: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8, 
  },
});
