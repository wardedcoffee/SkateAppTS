import React from "react";
import { StyleSheet, Image } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import { MaterialIcons } from '@expo/vector-icons';
import { Text, View } from '../components/Themed';
import FavoriteButtonCard from "./FavoriteButtonCard";

export default function CardShadow () {
    return (
        <View style={{ marginLeft: 16, marginBottom: 16 }}>
            <Shadow distance={ 12 } >
                <View style={{ flexDirection: 'row',  width: 320, borderTopLeftRadius: 8, borderBottomLeftRadius: 8, justifyContent: 'space-between', }}>
                    <Image source={ require('../assets/images/image_4.png') } style={styles.cardMenorImage}></Image>
                    <View style={{ flexDirection: 'column', marginLeft: 16 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.bunkerDown}>Cover Version</Text>
                                <FavoriteButtonCard />
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
            </Shadow>
        </View>
    );
}


const styles = StyleSheet.create({
    cardMenorImage: {
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8, 
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
      },
    videoTags:{
        fontFamily: 'quicksand-regular',
        textAlign: 'center',
        fontSize: 12,
        margin: 0,
        color: '#000',
        backgroundColor: '#E5E5E5',
        width: 'auto',
        // padding: 6,
        paddingTop: 4,
        paddingRight: 8,
        paddingLeft: 8,
        paddingBottom: 6,
        marginRight: 13,
        borderRadius: 20,
    }  
});


