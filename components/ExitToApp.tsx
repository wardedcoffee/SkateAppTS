import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ExitApp = () => {
    const [isExit, setIsExit] = useState(false);
    const navigation = useNavigation();
    const handlePress = () => {
        setIsExit(!isExit);
        console.log('vou sairrrrrr!');
         navigation.navigate('Login')    
    };

    return (
        <TouchableOpacity onPress={(handlePress)}>
            <View>
                <MaterialIcons 
                    name={'exit-to-app'}
                    size={24}
                    color={isExit ? 'tintColorLight' : '#176E66'   }
                    style={{ marginLeft: 10, marginBottom: 20 }}
                    />
            </View>
        </TouchableOpacity>
    );
};

export default ExitApp;