import React, {useContext} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {AppContext} from '../context/AppContext';
import homesData from '../homesData.json';

const UnlockedHomesScreen = ({navigation}) => {
  const {getUnlockedHomes} = useContext(AppContext);
  const unlockedHomes = getUnlockedHomes(homesData);

  const navigateToDetails = home => {
    navigation.navigate('Home Details', {home});
  };

  const renderHomeItem = ({item}) => (
    <TouchableOpacity
      style={styles.homeContainer}
      onPress={() => navigateToDetails(item)}>
      <Image source={{uri: item.image}} style={styles.homeImage} />
      <Text style={styles.homeAddress}>{item.address}</Text>
      <Text style={styles.homeDescription}>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {unlockedHomes.length > 0 ? (
        <FlatList
          data={unlockedHomes}
          renderItem={renderHomeItem}
          keyExtractor={item => item.id.toString()}
        />
      ) : (
        <Text style={styles.noHomesText}>No unlocked homes to display.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  homeContainer: {
    marginBottom: 20,
  },
  homeImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
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
  noHomesText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 50,
  },
});

export default UnlockedHomesScreen;
