import { View, Image, Text } from "react-native";


interface UserThumbnailProps {
	img: string;
	alt: string;
	url: string;
}

function UserThumbnail({ img, alt, url }: UserThumbnailProps) {
	return (
		<View>
			<Image source={{ uri: img }} style={{ position: "relative",
				height: 90,
				width: 90,
				borderBottomLeftRadius: 50,
				borderBottomRightRadius: 50,
				borderTopLeftRadius: 50,
				borderTopRightRadius: 50 }} />
			<Text>{alt}</Text>
		</View>
	);
}

export default UserThumbnail;