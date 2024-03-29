import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const FavoriteButtonCard = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handlePress = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View>
        <MaterialIcons
          name={isFavorite ? 'favorite' : 'favorite-border'}
          size={24}
          color={isFavorite ? 'red' : '#828A9B'}
          style={{ marginLeft: 70, marginRight: 10, marginTop: 8 }}
        //   style={{ marginRight: 60, marginTop: 10 }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default FavoriteButtonCard;
