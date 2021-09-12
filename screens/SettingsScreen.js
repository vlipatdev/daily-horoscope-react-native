import * as React from 'react';
import { Text, View, Share } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import * as Linking from 'expo-linking';
import { Feather } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

import { Colors } from '../constants/Colors';

export const SettingsScreen = ({ navigation }) => {
	const navigateZodiacs = () => {
		navigation.navigate('Select Zodiac');
	};

	const navigateAttributions = () => {
		navigation.navigate('Attributions');
	};

	const rate = () => {
		Linking.openURL(
			'https://play.google.com/store/apps/details?id=com.iridiumlab.dailyhoroscope'
		);
	};

	const share = () => {
		Share.share({
			message:
				'https://play.google.com/store/apps/details?id=com.iridiumlab.dailyhoroscope',
		});
	};

	return (
		<View style={{ backgroundColor: 'white', height: '100%' }}>
			<View style={{ flex: 1 }}>
				<TouchableOpacity onPress={navigateZodiacs}>
					<View
						style={{
							height: 50,
							marginTop: 8,
							marginHorizontal: 16,
							flexDirection: 'row',
							alignItems: 'center',
						}}
					>
						<Feather
							name="edit"
							size={18}
							color={Colors.hintText}
							style={{ marginRight: 16 }}
						/>
						<Text style={{ fontSize: 16 }}>My zodiac sign</Text>
					</View>
				</TouchableOpacity>
				<View
					style={{
						backgroundColor: Colors.divider,
						height: 1,
						marginVertical: 12,
					}}
				></View>
				<TouchableOpacity onPress={() => rate()}>
					<View
						style={{
							height: 50,
							marginHorizontal: 16,
							flexDirection: 'row',
							alignItems: 'center',
						}}
					>
						<Feather
							name="star"
							size={18}
							color={Colors.hintText}
							style={{ marginRight: 16 }}
						/>
						<Text style={{ fontSize: 16 }}>Rate this app</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={share}>
					<View
						style={{
							height: 50,
							marginHorizontal: 16,
							flexDirection: 'row',
							alignItems: 'center',
						}}
					>
						<Feather
							name="share-2"
							size={18}
							color={Colors.hintText}
							style={{ marginRight: 16 }}
						/>
						<Text style={{ fontSize: 16 }}>Share this app</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={navigateAttributions}>
					<View
						style={{
							height: 50,
							marginHorizontal: 16,
							flexDirection: 'row',
							alignItems: 'center',
						}}
					>
						<Feather
							name="info"
							size={18}
							color={Colors.hintText}
							style={{ marginRight: 16 }}
						/>
						<Text style={{ fontSize: 16 }}>Attributions</Text>
					</View>
				</TouchableOpacity>
			</View>
			<Text
				style={{
					fontSize: 12,
					textAlign: 'center',
					color: Colors.hintText,
					padding: 16,
				}}
			>
				version 1.0.0
			</Text>
			<StatusBar style="dark" />
		</View>
	);
};
