import { useState, useEffect } from 'react';
import { TouchableOpacity, Text, Image, View, StyleSheet, Alert, GestureResponderEvent } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { MaterialIcons } from '@expo/vector-icons';

export default function ImagePickerExample() {
  const [image, setImage] = useState<string | null>(null);
  const [cameraPermission, requestCameraPermission] = ImagePicker.useCameraPermissions();

  useEffect(() => {
    (async () => {
      if (!cameraPermission?.granted) {
        const { status } = await requestCameraPermission();
        if (status !== 'granted') {
          Alert.alert('Permission Denied', 'The app accesses your camera to let you take photos.');
        }
      }
    })();
  }, [cameraPermission]);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(JSON.stringify(result, null, 2));

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  async function useCam(event: GestureResponderEvent): Promise<void> {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Denied', 'The app needs camera permissions to take photos.');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri); // Update the state with the image URI
    }
  }

  return (
    <View style={styles.container}>
      {!image && (
        <>
          <TouchableOpacity style={styles.button} onPress={useCam}>
            <MaterialIcons name="camera-alt" size={20} color="#FFFFFF" />
            {/* <Text style={styles.buttonText}>Open camera</Text> */}
          </TouchableOpacity>
          <TouchableOpacity style={styles.innerButton} onPress={pickImage}>
            <MaterialIcons name="photo-library" size={20} color="#FFFFFF" />
            {/* <Text style={styles.innerButtonText}>Pick an image from camera roll</Text> */}
          </TouchableOpacity>
        </>
      )}

      {image && <Image source={{ uri: image }} style={styles.image} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  innerButton: {
    backgroundColor: '#28A745',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  innerButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  image: {
    position: "relative",
    height: 90,
    width: 90,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50
  },
});