import React, { useContext } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { AppContext } from '../context/AppContext';

const UnlockedHomesScreen = ({navigation}) => {
  const { getUnlockedHomes } = useContext(AppContext);
  const homesData = [
    {
      id: '1',
      address: '123 DLF Phase 1, Gurgaon',
      image: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_640.jpg',
      description: 'Beautiful 3-bedroom house with a spacious backyard.',
      latitude: 28.4595,
      longitude: 77.0266,
    },
    {
      id: '2',
      address: '456 Saket, New Delhi',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYgt7zJ13tGAZfpZFs0o2RrMI2jU9eqRul6g&s',
      description: 'Cozy 2-bedroom apartment in a quiet neighborhood.',
      latitude: 28.5245,
      longitude: 77.2066,
    },
    {
      id: '3',
      address: '789 Connaught Place, New Delhi',
      image: 'https://www.shutterstock.com/image-photo/perfect-neighbourhood-houses-suburb-summer-260nw-1937913955.jpg',
      description: 'Modern loft with city views and rooftop access.',
      latitude: 28.6315,
      longitude: 77.2167,
    },
    {
      id: '4',
      address: '101 Sector 15, Noida',
      image: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8fA%3D%3D',
      description: 'Charming cottage surrounded by nature trails.',
      latitude: 28.5785,
      longitude: 77.3300,
    },
    {
      id: '5',
      address: '222 Golf Course Road, Gurgaon',
      image: 'https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_640.jpg',
      description: 'Luxurious penthouse with panoramic skyline views.',
      latitude: 28.4670,
      longitude: 77.0880,
    },
    {
      id: '6',
      address: '333 Sector 50, Noida',
      image: 'https://thumbs.dreamstime.com/b/housing-estate-6045486.jpg',
      description: 'Spacious townhouse with a private garden.',
      latitude: 28.5832,
      longitude: 77.3597,
    },
    {
      id: '7',
      address: '444 Hauz Khas, New Delhi',
      image: 'https://cdn.pixabay.com/photo/2017/02/24/18/19/new-home-2095832_640.jpg',
      description: 'Historic mansion with ornate architecture and gardens.',
      latitude: 28.5494,
      longitude: 77.2001,
    },
    {
      id: '8',
      address: '555 South City, Gurgaon',
      image: 'https://media.istockphoto.com/id/1755445620/photo/row-of-single-story-homes.webp?b=1&s=170667a&w=0&k=20&c=ucHfhJRJfC6gDsSwM3AyALxw2bKStJeAUx0k8luskWw=',
      description: 'Elegant duplex with modern interior design.',
      latitude: 28.4370,
      longitude: 77.0320,
    },
    {
      id: '9',
      address: '666 Sector 62, Noida',
      image: 'https://media.istockphoto.com/id/856794670/photo/beautiful-luxury-home-exterior-with-green-grass-and-landscaped-yard.webp?b=1&s=170667a&w=0&k=20&c=YqUNJIl6fbaAU61b1mWTng6HNlTn2fB4QisyW25x63A=',
      description: 'Contemporary apartment in a trendy urban neighborhood.',
      latitude: 28.6300,
      longitude: 77.3700,
    },
    {
      id: '10',
      address: '777 Greater Kailash, New Delhi',
      image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?cs=srgb&dl=pexels-pixabay-259588.jpg&fm=jpg',
      description: 'Rustic cabin retreat nestled in the mountains.',
      latitude: 28.5417,
      longitude: 77.2432,
    },
  ];
  const unlockedHomes = getUnlockedHomes(homesData);

  const navigateToDetails = (home) => {
    navigation.navigate('Home Details', { home });
  };

  const renderHomeItem = ({ item }) => (
    <TouchableOpacity style={styles.homeContainer} onPress={() => navigateToDetails(item)}>
      <Image source={{ uri: item.image }} style={styles.homeImage} />
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
