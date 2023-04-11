import React, { useState } from 'react';
import { StyleSheet, Image, ScrollView } from 'react-native';
// import { MaterialIcons } from '@expo/vector-icons';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import FavoriteButton from '../components/FavoriteButton';

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
            <FavoriteButton/>
          </View>
          <Text style={styles.videoInfo}>Alien Workshop * 2019 * 37 min</Text>
        </View>

        <View style={styles.containerTabsText}>
          <Text style={styles.tabSelected}>Lancamentos</Text>
          <Text style={styles.tabNotSelected}>Trilhas sonoras</Text>
          <Text style={styles.tabNotSelected}>Destaque</Text>
        </View>

        <View style={{ flexDirection: 'row',  width: 320, borderTopLeftRadius: 8, borderBottomLeftRadius: 8, justifyContent: 'space-between', }}>
            <Image source={ require('../assets/images/image_4.png') } style={styles.cardMenorImage}></Image>
            <View style={{ flexDirection: 'column', marginLeft: 36 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.bunkerDown}>Cover Version</Text>
                    <FavoriteButton/>
                </View>
                <View style={{ flexDirection: 'column', marginBottom: 8 }}>
                    <Text style={styles.videoInfo}>Alien Workshop * 2019 * 37 min</Text>
                    <View style={{ flexDirection:'row', marginTop: 10 }}>
                        <Text style={styles.videoTags}>Trilha sonora</Text>
                        <Text style={styles.videoTags}>Defon</Text>
                    </View>
                </View>
            </View>
        </View>
        <View style={{ flexDirection: 'row',  width: 320, borderTopLeftRadius: 8, borderBottomLeftRadius: 8, justifyContent: 'space-between', }}>
            <Image source={ require('../assets/images/image_4.png') } style={styles.cardMenorImage}></Image>
            <View style={{ flexDirection: 'column', marginLeft: 16 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.bunkerDown}>Cover Version</Text>
                    <FavoriteButton/>
                </View>
                <View style={{ flexDirection: 'column', marginBottom: 8 }}>
                    <Text style={styles.videoInfo}>Alien Workshop * 2019 * 37 min</Text>
                    <View style={{ flexDirection:'row', marginTop: 10 }}>
                        <Text style={styles.videoTags}>Trilha sonora</Text>
                        <Text style={styles.videoTags}>Defon</Text>
                    </View>
                </View>
            </View>
        </View>
        <View style={{ flexDirection: 'row',  width: 320, borderTopLeftRadius: 8, borderBottomLeftRadius: 8, justifyContent: 'space-between', }}>
            <Image source={ require('../assets/images/image_4.png') } style={styles.cardMenorImage}></Image>
            <View style={{ flexDirection: 'column', marginLeft: 16 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.bunkerDown}>Cover Version</Text>
                    <FavoriteButton/>
                </View>
                <View style={{ flexDirection: 'column', marginBottom: 8 }}>
                    <Text style={styles.videoInfo}>Alien Workshop * 2019 * 37 min</Text>
                    <View style={{ flexDirection:'row', marginTop: 10 }}>
                        <Text style={styles.videoTags}>Trilha sonora</Text>
                        <Text style={styles.videoTags}>Defon</Text>
                    </View>
                </View>
            </View>
        </View>
        <View style={{ flexDirection: 'row',  width: 320, borderTopLeftRadius: 8, borderBottomLeftRadius: 8, justifyContent: 'space-between', }}>
            <Image source={ require('../assets/images/image_4.png') } style={styles.cardMenorImage}></Image>
            <View style={{ flexDirection: 'column', marginLeft: 16 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.bunkerDown}>Cover Version</Text>
                    <FavoriteButton/>
                </View>
                <View style={{ flexDirection: 'column', marginBottom: 8 }}>
                    <Text style={styles.videoInfo}>Alien Workshop * 2019 * 37 min</Text>
                    <View style={{ flexDirection:'row', marginTop: 10 }}>
                        <Text style={styles.videoTags}>Trilha sonora</Text>
                        <Text style={styles.videoTags}>Defon</Text>
                    </View>
                </View>
            </View>
        </View>

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
  videoTags:{
    fontFamily: 'quicksand-regular',
    textAlign: 'center',
    fontSize: 12,
    margin: 0,
    backgroundColor: '#E5E5E5',
    width: 'auto',
    // padding: 6,
    paddingTop: 4,
    paddingRight: 8,
    paddingLeft: 8,
    paddingBottom: 6,
    marginRight: 13,
    borderRadius: 20,
  },
   decIncButton: {
    backgroundColor: '#fff',
    padding: 5,
    paddingHorizontal: 12,
    borderRadius: 4,
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
    marginLeft: 16
  },
});
