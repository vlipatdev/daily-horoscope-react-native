import React from 'react';
import {
	Image,
	Text,
	Dimensions,
	Alert,
	ToastAndroid,
	AsyncStorage,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Colors } from '../constants/Colors';

export const ZodiacCardItem2 = ({
	zodiacSign,
	date,
	imagePath,
	navigation,
}) => {
	const [fromWelcomeScreen, setFromWelcomeScreen] = React.useState(false);

	const getFromWelcomeScreen = async () => {
		const value = await AsyncStorage.getItem('fromWelcomeScreen');
		if (value !== null) {
			setFromWelcomeScreen(JSON.parse(value));
			console.log(JSON.stringify(value));
		} else {
			setFromWelcomeScreen(true);
		}
	};

	React.useEffect(() => {
		navigation.addListener('focus', () => {
			getFromWelcomeScreen();
		});
	}, []);

	const saveZodiac = async () => {
		await AsyncStorage.setItem('zodiac', zodiacSign);
		await AsyncStorage.setItem('fromWelcomeScreen', JSON.stringify(false));
		if (!fromWelcomeScreen) {
			ToastAndroid.show('Zodiac sign updated', ToastAndroid.SHORT);
		}
	};

	const navigateHome = () => {
		navigation.navigate('Home');
		saveZodiac();
	};

	const navigateBack = () => {
		navigation.navigate('Home');
		saveZodiac();
	};

	const alertWelcome = () => {
		Alert.alert(
			'Set Zodiac',
			`Set ${zodiacSign} as the default zodiac sign?`,
			[
				{
					text: 'Cancel',
					onPress: () => {},
				},
				{ text: 'OK', onPress: navigateHome },
			],
			{ cancelable: true }
		);
	};

	const alertSettings = () => {
		Alert.alert(
			'Set Zodiac',
			`Set ${zodiacSign} as the default zodiac sign?`,
			[
				{
					text: 'Cancel',
					onPress: () => {},
				},
				{ text: 'OK', onPress: navigateBack },
			],
			{ cancelable: true }
		);
	};

	return (
		<TouchableOpacity
			onPress={fromWelcomeScreen ? alertWelcome : alertSettings}
			style={{
				height: 120,
				width: (Dimensions.get('window').width - 32) / 3,
				borderRadius: 8,
				backgroundColor: 'white',
				alignItems: 'center',
				justifyContent: 'center',
				padding: 8,
				marginRight: 8,
				marginBottom: 8,
			}}
		>
			<Image
				source={imagePath}
				style={{ height: 50, width: 50, resizeMode: 'contain' }}
			></Image>
			<Text numberOfLines={1} style={{ fontSize: 16, fontWeight: 'bold' }}>
				{zodiacSign}
			</Text>
			<Text style={{ fontSize: 12, color: Colors.hintText }}>{date}</Text>
		</TouchableOpacity>
	);
};
