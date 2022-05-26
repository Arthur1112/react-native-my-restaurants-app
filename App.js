import { StatusBar } from 'expo-status-bar';
import {Text, View, ActivityIndicator, ImageBackground, ScrollView} from 'react-native';
import { useEffect, useState } from 'react';
import RestaurantCard from './src/components/RestaurantCard';
import styles from './src/styles';
import { SafeAreaView } from 'react-native';

const bgImage = {uri: 'https://png.pngtree.com/background/20210709/original/pngtree-food-western-food-steak-tomato-picture-image_941801.jpg'}

export default function App() {
  const [allRestaurants, setAllRestaurants] = useState()
  
  useEffect(() => {
    fetch('https://my-first-firestore-as.web.app/restaurants')
      .then(response => response.json())
      .then(setAllRestaurants)
      .then(data => setAllRestaurants(data))
      .catch(console.error)
  }, [])

  return (
    
    <View style={styles.container}>
      <ImageBackground resizeMode='cover' source={bgImage} style={styles.container}>
      <SafeAreaView style={styles.container}>
        <ScrollView>
        { !allRestaurants 
            ? <ActivityIndicator size='large' color='red' />
            : allRestaurants.map(singleRest => (
              <RestaurantCard key={singleRest.id} singleRest={singleRest}/>
        ))
      }
      </ScrollView>
      </SafeAreaView>
        <Text style={styles.text}>Arthurs Restaurants</Text>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}
