import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator, ImageBackground, ScrollView, Image,} from 'react-native';
import { useEffect, useState } from 'react';
import { Button } from "@rneui/themed";

const image = {uri: 'https://png.pngtree.com/background/20210709/original/pngtree-food-western-food-steak-tomato-picture-image_941801.jpg'}
export default function App() {
  const [allRestaurants, setAllRestaurants] = useState()


  useEffect(() => {
    const getData = async () => {
      try {
      const response = await fetch('https://my-first-firestore-as.web.app/restaurants')
      const data = await response.json()
      setAllRestaurants(data)
      } catch (err) {
        console.error(err)
      }
    }
    getData()
  }, [])

  return (
    <View style={styles.container}>
      <ImageBackground resizeMode='cover' source={image} style={styles.container}>
        <ScrollView>
        { allRestaurants ? (
            allRestaurants?.map(singleRest => (
            <>
            <Text key={singleRest.id} style={styles.restaurantsName} >{singleRest.name} / {singleRest.cuisine}</Text>
            <Image 
            source={{uri:singleRest.image}}
            style={{width: '100%', height: 100}} />
            </>
        )))
        : <ActivityIndicator size='large' color='red' />
      
      }
      </ScrollView>
      <Button title="Press Me" color='white' style={styles.button} />
        <Text style={styles.text}>Arthurs Restaurants</Text>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  restaurantsName: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    marginVertical: 30,
  },
  button: {
    color: 'red',
  }
});
