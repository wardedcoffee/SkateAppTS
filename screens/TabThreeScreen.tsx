import { StyleSheet, Image } from "react-native";

import { Text, View } from "../components/Themed";


export default function TabThreeScreen() {
    return (
        <View style={styles.container}>
             <Image style={styles.perfil} source={ require('../assets/images/Ellipse.png') }></Image>
            <Text style={styles.title}>Mariana Q.</Text>
            <Text>33 videos assistidos</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1" />
            <Text>Informacoes pessoais</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1" />
            <Text>Nome</Text>
            <Text>Mariana Quaresma</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1" />
            {/* <EditScreenInfo path="/screens/TabThreeScreen.tsx" /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 14,
        backgroundColor: '#FAFAFA',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
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