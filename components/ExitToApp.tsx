import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const ExitApp = () => {
    const [isExit, setIsExit] = useState(false);

    const handlePress = () => {
        setIsExit(!isExit);
        console.log('vou sairrrrrr!');
    //     () => navigation.navigate('Modal')
    
    
};

    return (
        <TouchableOpacity onPress={(handlePress)}>
            <View>
                <MaterialIcons 
                    name={'exit-to-app'}
                    size={24}
                    color={isExit ? '#33EEDD' : '#176E66'   }
                    style={{ marginLeft: 10, marginBottom: 20 }}
                    />
            </View>
        </TouchableOpacity>
    );
};

export default ExitApp;