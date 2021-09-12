import * as React from 'react';
import { FlatList } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import { ZodiacCardItem2 } from '../components/ZodiacCardItem2';
import { data } from '../data';

export const ZodiacsScreen = ({ navigation }) => {
	return (
		<>
			<FlatList
				contentContainerStyle={{
					marginLeft: 8,
					marginTop: 8,
					paddingBottom: 16,
					paddingRight: 16,
				}}
				numColumns={3}
				data={data}
				showsVerticalScrollIndicator={false}
				renderItem={({ item }) => {
					const { zodiacSign, date, imagePath } = item;

					return (
						<ZodiacCardItem2
							zodiacSign={zodiacSign}
							date={date}
							imagePath={imagePath}
							navigation={navigation}
						/>
					);
				}}
				keyExtractor={(item) => item.zodiacSign}
			/>
			<StatusBar style="dark" />
		</>
	);
};
