import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { AppContext } from '../context/AppContext';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';
import PushNotification from 'react-native-push-notification';

const HomeDetailsScreen = ({ route, navigation }) => {
  const { home } = route.params;
  const { unlockHome, isHomeUnlocked } = useContext(AppContext);
  const [isNearby, setIsNearby] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const requestLocationPermission = async () => {
      try {
        const result = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
        if (result !== RESULTS.GRANTED) {
          const requestResult = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
          if (requestResult !== RESULTS.GRANTED) {
            Alert.alert('Permission denied', 'Location permission is required to use this feature.');
            return;
          }
        }
        getCurrentLocation();
      } catch (error) {
        console.error(error);
      }
    };

    const getCurrentLocation = () => {
      setIsLoading(true)
      Geolocation.getCurrentPosition(
        (position) => {
          const distance = calculateDistance(
            position.coords.latitude,
            position.coords.longitude,
            home.latitude,
            home.longitude
          );
          setIsNearby(distance <= 30);
          setIsLoading(false)
        },
        (error) => {
          Alert.alert('Error', 'Failed to get current location.');
          setIsLoading(false)
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    };

    requestLocationPermission();
  }, [home]);

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const toRad = (value) => (value * Math.PI) / 180;
    const R = 6371e3; // Radius of Earth in meters
    const φ1 = toRad(lat1);
    const φ2 = toRad(lat2);
    const Δφ = toRad(lat2 - lat1);
    const Δλ = toRad(lon2 - lon1);

    const a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c; // in meters
  };

  const handleUnlock = async () => {
    setIsLoading(true)
    try {
      const message = await unlockHome(home.id, isNearby); // Pass home id and isNearby to unlockHome function
      setIsLoading(false)
      Alert.alert('Success', message);
      PushNotification.localNotification({
        channelId: "0123456789", 
        title: 'Home Unlocked',
        message: 'Your home has been successfully unlocked!',
      });
    } catch (error) {
      setIsLoading(false)
      Alert.alert('Error', error);
    }
  };

  const handleGoToUnlockedHomes = () => {
    navigation.navigate('Unlocked Homes');
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: home.image }} style={styles.homeImage} />
      <Text style={styles.homeAddress}>{home.address}</Text>
      <Text style={styles.homeDescription}>{home.description}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={(isHomeUnlocked(home.id) || isLoading) ? null : handleUnlock} style={[styles.button, isHomeUnlocked(home.id) && styles.buttonDisabled]}>
          {isLoading ? <ActivityIndicator color={'#fff'} size={30} style={styles.loader}/>:<Text style={styles.buttonTitle}>{isHomeUnlocked(home.id) ? 'Unlocked' : 'Unlock Now'}</Text>}
        </TouchableOpacity>
      <TouchableOpacity onPress={handleGoToUnlockedHomes} style={styles.button}>
        <Text style={styles.buttonTitle}>Go to Unlocked Homes</Text>
      </TouchableOpacity>
      </View>
      {isLoading && <Text style={styles.homeDescription}>{'Please wait while we are fetching location.'}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  homeImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  homeAddress: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  homeDescription: {
    fontSize: 16,
    color: '#666',
  },
  button: {
    marginVertical: 15,
    backgroundColor: 'green',
    padding: 10,
    marginHorizontal:10,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonTitle: {
    color: '#fff',
    fontWeight: '400',
    fontSize: 18,
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonContainer:{
    flexDirection:'row',
    justifyContent:'space-around'
  },
  loader:{
    paddingHorizontal:30
  }
});

export default HomeDetailsScreen;
