import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, Image, View } from 'react-native'

import Swiper from 'react-native-swiper'
import FavoriteButton from './FavoriteButton'

const styles = StyleSheet.create({
  wrapper: {
    height: 250,
    marginLeft: -14,
    marginRight: 0,
    paddingRight: 0
    //marginRight: -3, //por enquanto isso cria o efeito de mostrar a borda do proximo card..
  },
  slideContainer: {
    flex: 1,
    flexDirection: 'row', // Arrange slides horizontally
    justifyContent: 'space-between', // Distribute space evenly between slides
    //marginLeft: -4
  },
  slide: {
    flex: 1,
    marginRight: 0,
    paddingLeft: -26,
    // justifyContent: 'flex-start',
    // alignItems: 'center',
    //width: 340
  },
  dotStyle: {
    color: 'tintColorLight'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
    carrouselFirstImage: {
    height: 150,
    width: 340,
    position: "relative",
    borderRadius: 15,
    // width: '80%',
  },
    flexDirection:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 26, 
    marginRight: 16
  },
    bunkerDown:{
    fontFamily: 'quicksand-bold',
    fontSize: 16,
    lineHeight: 20,
    marginTop: 10,
    marginBottom: 8,
  },
    videoInfo:{
    fontFamily: 'quicksand-regular',
    fontSize: 14,
    margin: 0,
    paddingLeft: 26
  },
})

export default class SwiperComponent extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={false} autoplay={false} activeDotColor='tintColorLight'  dotColor='#176E66'>
         {/* <View style={styles.slideContainer}> */}
          <View style={styles.slide}>
              <Image source={ require('../assets/images/image_1.png') } style={styles.carrouselFirstImage}></Image>
              <View style={styles.flexDirection}>
                <Text style={styles.bunkerDown}>Bunker Down</Text>
                <FavoriteButton/>
              </View>
              <Text style={styles.videoInfo}>Alien Workshop * 2019 * 37 min</Text>
          </View>
          <View style={styles.slide}>
              <Image source={ require('../assets/images/quasi-mother.jpg') } style={styles.carrouselFirstImage}></Image>
              <View style={styles.flexDirection}>
                <Text style={styles.bunkerDown}>Mother</Text>
                <FavoriteButton/>
              </View>
              <Text style={styles.videoInfo}>Quasi * 2019 * 37 min</Text>
          </View>
          <View style={styles.slide} >
              <Image source={ require('../assets/images/image_1.png') } style={styles.carrouselFirstImage}></Image>
              <View style={styles.flexDirection}>
                <Text style={styles.bunkerDown}>Bunker Down</Text>
                <FavoriteButton/>
              </View>
              <Text style={styles.videoInfo}>Alien Workshop * 2019 * 37 min</Text>
          </View>
         {/* </View> */}
      </Swiper>
    )
  }
}

AppRegistry.registerComponent('myproject', () => SwiperComponent)