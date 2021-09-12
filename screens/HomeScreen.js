import * as React from 'react';
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	Image,
	Dimensions,
	Share,
	AsyncStorage,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';

import { Colors } from '../constants/Colors';

import axios from 'axios';
import moment from 'moment';

export const HomeScreen = ({ navigation }) => {
	const [data, setData] = React.useState({});
	const [selectedZodiac, setSelectedZodiac] = React.useState('Aries');
	const [selectedDay, setSelectedDay] = React.useState('Today');
	const [hasLoaded, setHasLoaded] = React.useState(false);

	const date = moment().dayOfYear();

	const fetchData = () => {
		axios
			.get(`https://iridiumlab.herokuapp.com/horoscope/?date=${date}`)
			.then((response) => {
				setData(response.data.data[0]);
				setHasLoaded(true);
			})
			.catch((err) => alert('Something went wrong. Please try again later.'));
	};

	React.useEffect(() => {
		fetchData();
	}, []);

	const getZodiac = async () => {
		const value = await AsyncStorage.getItem('zodiac');
		if (value !== null) {
			setSelectedZodiac(value);
		}
	};

	React.useEffect(() => {
		navigation.addListener('focus', () => {
			getZodiac();
		});
	}, [data]);

	// React.useEffect(() => {}, [selectedZodiac]);
	const ref = React.createRef();
	const scrollToTop = () => {
		ref.current.scrollTo({ x: 0, y: 0, animated: true });
	};

	// set initial path
	let imagePath = require('../assets/zodiacs/aries.png');
	switch (selectedZodiac) {
		case 'Aries':
			imagePath = require('../assets/zodiacs/aries.png');
			break;
		case 'Taurus':
			imagePath = require('../assets/zodiacs/taurus.png');
			break;
		case 'Gemini':
			imagePath = require('../assets/zodiacs/gemini.png');
			break;
		case 'Cancer':
			imagePath = require('../assets/zodiacs/cancer.png');
			break;
		case 'Leo':
			imagePath = require('../assets/zodiacs/leo.png');
			break;
		case 'Virgo':
			imagePath = require('../assets/zodiacs/virgo.png');
			break;
		case 'Libra':
			imagePath = require('../assets/zodiacs/libra.png');
			break;
		case 'Scorpio':
			imagePath = require('../assets/zodiacs/scorpio.png');
			break;
		case 'Sagittarius':
			imagePath = require('../assets/zodiacs/sagittarius.png');
			break;
		case 'Capricorn':
			imagePath = require('../assets/zodiacs/capricorn.png');
			break;
		case 'Aquarius':
			imagePath = require('../assets/zodiacs/aquarius.png');
			break;
		case 'Pisces':
			imagePath = require('../assets/zodiacs/pisces.png');
			break;
	}

	const navigateSettings = () => navigation.navigate('Settings');
	const share = () => {
		Share.share({
			message: `${selectedZodiac} Daily Horoscope \n\n\n${
				data[selectedDay.toLowerCase()][selectedZodiac.toLowerCase()].horoscope
			}\n\n\nMood: ${
				data[selectedDay.toLowerCase()][selectedZodiac.toLowerCase()].mood
			}\nLucky Number: ${
				data[selectedDay.toLowerCase()][selectedZodiac.toLowerCase()].number
			}\nLucky Time: ${
				data[selectedDay.toLowerCase()][selectedZodiac.toLowerCase()].time
			}\nLucky Color: ${
				data[selectedDay.toLowerCase()][selectedZodiac.toLowerCase()].color
			}`,
		});
	};

	return (
		<ScrollView ref={ref} style={styles.container}>
			<LinearGradient
				colors={[Colors.darkTintColor, Colors.tintColor]}
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					right: 0,
					height: 300,
				}}
			/>
			<TouchableOpacity
				onPress={navigateSettings}
				style={{
					height: 50,
					width: 50,
					marginTop: Constants.statusBarHeight,
					marginHorizontal: 8,
					alignItems: 'flex-start',
					justifyContent: 'center',
					padding: 13,
				}}
			>
				<View
					style={{
						height: 4,
						width: 25,
						backgroundColor: 'white',
						marginBottom: 5,
						borderRadius: 10,
					}}
				></View>
				<View
					style={{
						height: 4,
						width: 15,
						backgroundColor: 'white',
						borderRadius: 10,
					}}
				></View>
			</TouchableOpacity>
			<View
				style={{
					marginHorizontal: 24,
					marginBottom: 10,
					alignItems: 'center',
				}}
			>
				<View
					style={{
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Text
						style={{
							color: 'white',
							fontSize: 24,
							fontWeight: 'bold',
						}}
					>
						{selectedZodiac}
					</Text>
					<Image
						style={{
							height: 75,
							width: 75,
						}}
						resizeMode="contain"
						source={imagePath}
					/>
				</View>
			</View>
			<View
				style={{
					alignSelf: 'center',
					marginBottom: 0,
					marginBottom: 10,
					flexDirection: 'row',
					justifyContent: 'space-around',
				}}
			>
				<TouchableOpacity
					onPress={() => setSelectedDay('Yesterday')}
					style={{
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Text
						style={[
							{
								color: Colors.transparentText,
								borderRadius: 4,
								padding: 8,
								width: 100,
								textAlign: 'center',
								fontSize: 12,
							},
							selectedDay === 'Yesterday' ? styles.selected : null,
						]}
					>
						Yesterday
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => setSelectedDay('Today')}
					style={{
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Text
						style={[
							{
								color: Colors.transparentText,
								fontSize: 12,
								borderRadius: 4,
								padding: 8,
								width: 100,
								textAlign: 'center',
							},
							selectedDay === 'Today' ? styles.selected : null,
						]}
					>
						Today
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => setSelectedDay('Tomorrow')}
					style={{
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Text
						style={[
							{
								color: Colors.transparentText,
								fontSize: 12,
								borderRadius: 4,
								padding: 8,
								width: 100,
								textAlign: 'center',
							},
							selectedDay === 'Tomorrow' ? styles.selected : null,
						]}
					>
						Tomorrow
					</Text>
				</TouchableOpacity>
			</View>
			<View
				style={{
					marginHorizontal: 24,
					marginBottom: 24,
					minHeight: 100,
					padding: 16,
					borderRadius: 8,
					backgroundColor: 'white',
					marginBottom: 40,
				}}
			>
				<Text style={{ fontSize: 16, lineHeight: 25 }}>
					{hasLoaded
						? data[selectedDay.toLowerCase()][selectedZodiac.toLowerCase()]
								.horoscope
						: null}
				</Text>
			</View>
			<View
				style={{
					marginHorizontal: 24,
				}}
			>
				<View
					style={{
						height: 80,
						backgroundColor: 'white',
						borderRadius: 8,
						borderBottomRightRadius: 100,
						borderTopRightRadius: 100,
						justifyContent: 'center',
						padding: 16,
						marginBottom: 16,
						width: Dimensions.get('window').width - 100,
					}}
				>
					<Image
						style={{
							resizeMode: 'contain',
							width: 80,
							height: 80,
							position: 'absolute',
							right: -40,
						}}
						source={require('../assets/illustrations/focused_working_monochromatic.png')}
					/>
					<Text
						style={{
							fontSize: 20,
							fontWeight: 'bold',
						}}
					>
						{hasLoaded
							? data[selectedDay.toLowerCase()][selectedZodiac.toLowerCase()]
									.mood
							: null}
					</Text>
					<Text
						style={{ color: Colors.hintText }}
					>{`${selectedDay}'s Mood`}</Text>
				</View>
				<View
					style={{
						height: 80,
						width: Dimensions.get('window').width - 100,
						backgroundColor: 'white',
						borderRadius: 8,
						borderBottomRightRadius: 100,
						borderTopRightRadius: 100,
						justifyContent: 'center',
						padding: 16,
						marginBottom: 16,
					}}
				>
					<Image
						style={{
							resizeMode: 'contain',
							width: 80,
							height: 80,
							position: 'absolute',
							right: -40,
						}}
						source={require('../assets/illustrations/banker_monochromatic.png')}
					/>
					<Text
						style={{
							fontSize: 20,
							fontWeight: 'bold',
						}}
					>
						{hasLoaded
							? data[selectedDay.toLowerCase()][selectedZodiac.toLowerCase()]
									.number
							: null}
					</Text>
					<Text
						style={{ color: Colors.hintText }}
					>{`${selectedDay}'s Lucky Number`}</Text>
				</View>

				<View
					style={{
						height: 80,
						width: Dimensions.get('window').width - 100,
						backgroundColor: 'white',
						borderRadius: 8,
						borderBottomRightRadius: 100,
						borderTopRightRadius: 100,
						justifyContent: 'flex-end',
						padding: 16,
						marginBottom: 16,
					}}
				>
					<Image
						style={{
							resizeMode: 'contain',
							width: 60,
							height: 60,
							position: 'absolute',
							top: 10,
							bottom: 10,
							right: -30,
						}}
						source={require('../assets/illustrations/time_monochromatic.png')}
					/>
					<Text
						style={{
							fontSize: 20,
							fontWeight: 'bold',
						}}
					>
						{hasLoaded
							? data[selectedDay.toLowerCase()][selectedZodiac.toLowerCase()]
									.time
							: null}
					</Text>
					<Text
						style={{ color: Colors.hintText }}
					>{`${selectedDay}'s Lucky Time`}</Text>
				</View>

				<View
					style={{
						height: 80,
						width: Dimensions.get('window').width - 100,
						backgroundColor: 'white',
						borderRadius: 8,
						borderBottomRightRadius: 100,
						borderTopRightRadius: 100,
						justifyContent: 'flex-end',
						padding: 16,
						marginBottom: 30,
					}}
				>
					<Image
						style={{
							resizeMode: 'contain',
							width: 80,
							height: 80,
							position: 'absolute',
							right: -40,
						}}
						source={require('../assets/illustrations/creative_process__monochromatic.png')}
					/>
					<Text
						style={{
							fontSize: 20,
							fontWeight: 'bold',
						}}
					>
						{hasLoaded
							? data[selectedDay.toLowerCase()][selectedZodiac.toLowerCase()]
									.color
							: null}
					</Text>
					<Text
						style={{ color: Colors.hintText }}
					>{`${selectedDay}'s Lucky Color`}</Text>
				</View>
			</View>
			{hasLoaded ? (
				<TouchableOpacity
					onPress={share}
					style={{
						alignSelf: 'center',
						height: 50,
						width: 250,
						alignItems: 'center',
						justifyContent: 'center',
						backgroundColor: Colors.tintColor,
						borderRadius: 16,
						marginTop: 30,
						marginBottom: 60,
					}}
				>
					<Text style={{ color: 'white' }}>Share horoscope</Text>
				</TouchableOpacity>
			) : null}
			<StatusBar style="light" />
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.background,
	},
	selected: {
		color: 'white',
		fontSize: 14,
	},
});
