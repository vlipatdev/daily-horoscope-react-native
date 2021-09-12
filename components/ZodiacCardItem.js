import React from 'react';
import { Text, Image, View } from 'react-native';

import { Colors } from '../constants/Colors';

export const ZodiacCardItem = ({ zodiacSign, date, imagePath }) => {
	return (
		<View
			style={{
				height: 120,
				width: 120,
				borderRadius: 8,
				backgroundColor: 'white',
				alignItems: 'center',
				justifyContent: 'center',
				padding: 16,
				marginRight: 16,
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
		</View>
	);
};
