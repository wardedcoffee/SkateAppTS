import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const FavoriteButton = () => {
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
          style={{ marginRight: 60, marginTop: 10 }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default FavoriteButton;