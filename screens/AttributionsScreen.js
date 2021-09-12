import * as React from 'react';
import { Text, View } from 'react-native';

import * as Linking from 'expo-linking';
import { StatusBar } from 'expo-status-bar';

import { Colors } from '../constants/Colors';

export const AttributionsScreen = () => {
	const openBqlqn = () => {
		Linking.openURL('https://www.flaticon.com/authors/bqlqn');
	};

	const openFlatIcons = () => {
		Linking.openURL('https://www.flaticon.com');
	};

	const openFeatherIcons = () => {
		Linking.openURL('https://feathericons.com/');
	};

	const openManyPixels = () => {
		Linking.openURL('https://www.manypixels.co/');
	};

	return (
		<View
			style={{
				backgroundColor: 'white',
				height: '100%',
				paddingHorizontal: 16,
			}}
		>
			<Text
				style={{
					fontSize: 16,
					marginTop: 20,
					marginBottom: 10,
					lineHeight: 20,
				}}
			>
				Zodiac icons made by{' '}
				<Text style={{ color: Colors.linkColor }} onPress={openBqlqn}>
					bqlqn
				</Text>{' '}
				from{' '}
				<Text style={{ color: Colors.linkColor }} onPress={openFlatIcons}>
					www.flaticon.com
				</Text>
			</Text>
			<Text style={{ fontSize: 16, marginVertical: 10 }}>
				Other icons from{' '}
				<Text style={{ color: Colors.linkColor }} onPress={openFeatherIcons}>
					Feather
				</Text>
			</Text>
			<Text style={{ fontSize: 16, marginVertical: 10 }}>
				Illustrations from{' '}
				<Text style={{ color: Colors.linkColor }} onPress={openManyPixels}>
					ManyPixels
				</Text>
			</Text>
			<StatusBar style="dark" />
		</View>
	);
};
