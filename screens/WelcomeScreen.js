import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';

import { Colors } from '../constants/Colors';

export const WelcomeScreen = ({ navigation }) => {
	const navigateZodiacs = () => {
		navigation.navigate('Select Zodiac');
	};

	return (
		<View
			style={{
				backgroundColor: Colors.darkTintColor,
				height: '100%',
				alignItems: 'center',
				justifyContent: 'center',
				paddingHorizontal: 24,
			}}
		>
			<Image
				source={require('../assets/illustrations/dream_monochromatic.png')}
				style={{
					height: 250,
					width: 250,
					resizeMode: 'contain',
					marginBottom: 20,
				}}
			></Image>
			<Text
				style={{
					fontSize: 20,
					textAlign: 'center',
					color: 'white',
					fontWeight: 'bold',
					marginBottom: 4,
				}}
			>
				Welcome to Daily Horoscope
			</Text>
			<Text
				style={{
					color: Colors.semiTransparentText,
					fontSize: 16,
					textAlign: 'center',
					marginBottom: 40,
				}}
			>
				To get started, select your zodiac sign on the next screen.
			</Text>
			<TouchableOpacity
				onPress={navigateZodiacs}
				style={{
					borderRadius: 32,
					height: 50,
					width: 200,
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Text
					style={{
						color: 'white',
						fontSize: 18,
						textDecorationLine: 'underline',
					}}
				>
					Let's go!
				</Text>
			</TouchableOpacity>
			<StatusBar style="light" />
		</View>
	);
};
