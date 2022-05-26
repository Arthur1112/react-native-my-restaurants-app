import { useContext } from "react";
import { View, Text, Button } from "react-native";
import { ActivityIndicator } from "react-native";
import { Image } from "react-native";
import { SingleRestContext } from "../../App";
import styles from "../styles";


// Todd updated this code with check github

export default function Details () {
    const {currentRest, setCurrentRest} = useContext(SingleRestContext);
    const handelRating = (newRating) => {
        fetch(`https://my-first-firestore-as.web.app/restaurants/${currentRest.id}/rating`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({rating: newRating}),
        })
            .then(res => res.json())
            .then(data => setCurrentRest(data))
            .catch(console.error)
    }
    return (
        <View style={styles.restaurantCard}>
        {!currentRest
        ? <ActivityIndicator />
        : (
            <>
            <Image 
            source={{uri: currentRest.image}} 
            style={{width: '100%', height: 240}} />
            <Text style={styles.restaurantsName}>{currentRest.name}</Text>
            <Text style={styles.cuisine}>{currentRest.cuisine}</Text>
            <Text style={styles.address}>{currentRest.address}</Text>
            <Text style={[styles.address, {fontWeight: '700'}]}>Rating {currentRest.rating.toFixed(3)}</Text>
            <Text style={styles.address}>My Rating:</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-evenly', 
                paddingVertical: 24,
            }}>
                <Button onPress={() => handelRating(1)} title='1'/>
                <Button onPress={() => handelRating(2)} title='2'/>
                <Button onPress={() => handelRating(3)} title='3'/>
                <Button onPress={() => handelRating(4)} title='4'/>
                <Button onPress={() => handelRating(5)} title='5'/>
            </View>
            </>
        )}
        </View>
    )
}