import { StyleSheet, Image } from "react-native";

import { Text, View } from "../components/Themed";
import EmailForm from "../components/EmailForm";

import { ScrollView } from "react-native";


export default function TabThreeScreen() {
    return (
      <View style={styles.container}>
          <ScrollView>
             <Image style={styles.perfil} source={ require('../assets/images/Ellipse.png') }></Image>
            <Text style={styles.title}>Mariana Q.</Text>
            <Text style={styles.videoInfo}>33 videos assistidos</Text>
            {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1" /> */}
            <Text>Informacoes pessoais</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1" />
            <Text>Nome</Text>
            <Text>Mariana Quaresma</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1" />

            <EmailForm />
            {/* <EmailForm777></EmailForm777> */}
            {/* <KeyboardAvoidingComponent></KeyboardAvoidingComponent> */}
            {/* <EditScreenInfo path="/screens/TabThreeScreen.tsx" /> */}
        </ScrollView>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 14,
        // backgroundColor: '#FAFAFA',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    inner: {
        padding: 24,
        flex: 1,
        justifyContent: 'space-around',
      },
      header: {
        fontSize: 36,
        marginBottom: 48,
      },
      textInput: {
        height: 40,
        borderColor: '#000000',
        borderBottomWidth: 1,
        marginBottom: 36,
      },
      btnContainer: {
        backgroundColor: 'white',
        marginTop: 12,
      },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        // color: 'black'
    },
    videoInfo:{
      fontFamily: 'quicksand-regular',
      fontSize: 14,
      margin: 0,
      // color: 'black'
    },
    separator: {
        marginVertical:30,
        height: 1,
        width: '80%',
    },
    perfil: {
        position: "relative",
        // width:'50px',
    },
});