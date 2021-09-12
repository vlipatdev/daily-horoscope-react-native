import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, View, AsyncStorage } from 'react-native';

import useCachedResources from './hooks/useCachedResources';

import { HomeScreen } from './screens/HomeScreen';
import { SettingsScreen } from './screens/SettingsScreen';
import { WelcomeScreen } from './screens/WelcomeScreen';
import { ZodiacsScreen } from './screens/ZodiacsScreen';
import { AttributionsScreen } from './screens/AttributionsScreen';

const Stack = createStackNavigator();

export default function App() {
	const [skipWelcomeScreen, setSkipWelcomeScreen] = React.useState(false);
	const [hasLoaded, setHasLoaded] = React.useState(false);

	const getSkipWelcomeScreen = async () => {
		const value = await AsyncStorage.getItem('fromWelcomeScreen');
		if (value !== null) {
			setSkipWelcomeScreen(!JSON.parse(value));
		}
		setHasLoaded(true);
	};

	getSkipWelcomeScreen();

	const isLoadingComplete = useCachedResources();

	if (!isLoadingComplete || !hasLoaded) {
		return null;
	} else {
		return (
			<View style={styles.container}>
				<NavigationContainer>
					<Stack.Navigator>
						{skipWelcomeScreen ? null : (
							<Stack.Screen
								options={{ headerShown: false }}
								name="Welcome"
								component={WelcomeScreen}
							/>
						)}
						<Stack.Screen
							options={{ headerShown: false }}
							name="Home"
							component={HomeScreen}
						/>
						<Stack.Screen name="Select Zodiac" component={ZodiacsScreen} />
						<Stack.Screen name="Settings" component={SettingsScreen} />
						<Stack.Screen name="Attributions" component={AttributionsScreen} />
					</Stack.Navigator>
				</NavigationContainer>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
});
