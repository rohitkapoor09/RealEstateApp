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

const HomeListScreen = ({navigation}) => {
  const {isHomeUnlocked} = useContext(AppContext);

  const homesData = [
    {
      id: '1',
      address: '123 DLF Phase 1, Gurgaon',
      image:
        'https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_640.jpg',
      description: 'Beautiful 3-bedroom house with a spacious backyard.',
      latitude: 28.4595,
      longitude: 77.0266,
    },
    {
      id: '2',
      address: '456 Saket, New Delhi',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYgt7zJ13tGAZfpZFs0o2RrMI2jU9eqRul6g&s',
      description: 'Cozy 2-bedroom apartment in a quiet neighborhood.',
      latitude: 28.5245,
      longitude: 77.2066,
    },
    {
      id: '3',
      address: '789 Connaught Place, New Delhi',
      image:
        'https://www.shutterstock.com/image-photo/perfect-neighbourhood-houses-suburb-summer-260nw-1937913955.jpg',
      description: 'Modern loft with city views and rooftop access.',
      latitude: 28.6315,
      longitude: 77.2167,
    },
    {
      id: '4',
      address: '101 Sector 15, Noida',
      image:
        'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8fA%3D%3D',
      description: 'Charming cottage surrounded by nature trails.',
      latitude: 28.5785,
      longitude: 77.33,
    },
    {
      id: '5',
      address: '222 Golf Course Road, Gurgaon',
      image:
        'https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_640.jpg',
      description: 'Luxurious penthouse with panoramic skyline views.',
      latitude: 28.467,
      longitude: 77.088,
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
      image:
        'https://cdn.pixabay.com/photo/2017/02/24/18/19/new-home-2095832_640.jpg',
      description: 'Historic mansion with ornate architecture and gardens.',
      latitude: 28.5494,
      longitude: 77.2001,
    },
    {
      id: '8',
      address: '555 South City, Gurgaon',
      image:
        'https://media.istockphoto.com/id/1755445620/photo/row-of-single-story-homes.webp?b=1&s=170667a&w=0&k=20&c=ucHfhJRJfC6gDsSwM3AyALxw2bKStJeAUx0k8luskWw=',
      description: 'Elegant duplex with modern interior design.',
      latitude: 28.437,
      longitude: 77.032,
    },
    {
      id: '9',
      address: '666 Sector 62, Noida',
      image:
        'https://media.istockphoto.com/id/856794670/photo/beautiful-luxury-home-exterior-with-green-grass-and-landscaped-yard.webp?b=1&s=170667a&w=0&k=20&c=YqUNJIl6fbaAU61b1mWTng6HNlTn2fB4QisyW25x63A=',
      description: 'Contemporary apartment in a trendy urban neighborhood.',
      latitude: 28.63,
      longitude: 77.37,
    },
    {
      id: '10',
      address: '777 Greater Kailash, New Delhi',
      image:
        'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?cs=srgb&dl=pexels-pixabay-259588.jpg&fm=jpg',
      description: 'Rustic cabin retreat nestled in the mountains.',
      latitude: 28.5417,
      longitude: 77.2432,
    },
    {
      id: '11',
      address: 'Sector 51 Noida',
      image:
        'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?cs=srgb&dl=pexels-pixabay-259588.jpg&fm=jpg',
      description: 'Rustic cabin retreat nestled in the mountains.',
      latitude: 28.5840, 
      longitude: 77.3752,
    },
    {
      id: '12',
      address: 'Unitech Cyber Park',
      image:
        'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?cs=srgb&dl=pexels-pixabay-259588.jpg&fm=jpg',
      description: 'A Beautiful Property to stay in gurugram',
      latitude: 28.4439,
      longitude:  77.0567,
    },
  ];

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
