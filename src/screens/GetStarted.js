import {
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

const GetStarted = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.topView}>
        <Animatable.Image
          animation={'zoomInUp'}
          duration={2000}
          source={require('../assets/homePin.png')}
          style={styles.logo}
        />
        <Animatable.Text
          animation={'zoomInUp'}
          duration={2000}
          style={styles.logoText}>
          Real Estate App
        </Animatable.Text>
      </View>
      <Animatable.View
        style={styles.bottomView}
        animation={'fadeInUpBig'}
        duration={2000}>
        <Text style={styles.bottomText}>Find your dream home today!</Text>
        <Text style={styles.bottomSubText}>
          Finding a house is now at your fingertips. Start your search for your
          dream home today.
        </Text>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('Home List')}>
          <Text style={styles.buttonText}>{`Get Started >`}</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

const screenHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B4870',
  },
  topView: {
    flex: screenHeight < 550 ? 2 : 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomView: {
    flex: 1,
    backgroundColor: 'white',
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
    padding: 20,
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  logoText: {
    color: '#ffffff',
    marginTop: 20,
    fontSize: 34,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  bottomText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 20,
  },
  bottomSubText: {
    color: 'gray',
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'left',
    marginTop: 10,
  },
  buttonContainer: {
    marginVertical: 20,
    padding: 15,
    borderRadius: 30,
    width: '50%',
    alignSelf: 'flex-end',
    alignItems: 'center',
    // flexDirection:"row",
    // justifyContent:'space-around',
    backgroundColor: '#0B4870',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#ffffff',
  },
});

export default GetStarted;
