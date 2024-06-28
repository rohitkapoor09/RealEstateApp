import React, {useContext} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {AppContext} from '../context/AppContext';
import homesData from '../homesData.json'
const HomeListScreen = ({navigation}) => {
  const {isHomeUnlocked} = useContext(AppContext);

  const navigateToDetails = home => {
    navigation.navigate('Home Details', {home});
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={homesData}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigateToDetails(item)}
            style={styles.container}>
            <View style={styles.homeItemContainer}>
              <Image source={{uri: item.image}} style={styles.homeImage} />
              <View style={styles.homeDetails}>
                <Text style={styles.homeAddress}>{item.address}</Text>
                <Text style={styles.homeDescription}>{item.description}</Text>
                {isHomeUnlocked(item.id) && (
                  <Text style={styles.unlockedText}>Unlocked</Text>
                )}
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  homeItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 20,
    paddingHorizontal: 10,
  },
  homeImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  homeDetails: {
    flex: 1,
  },
  homeAddress: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  homeDescription: {
    fontSize: 14,
    color: '#666',
  },
  unlockedText: {
    fontSize: 12,
    color: 'green',
    marginTop: 5,
  },
});

export default HomeListScreen;
