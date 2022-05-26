import { useContext } from "react";
import { View, Text } from "react-native";
import { ActivityIndicator } from "react-native";
import { Image } from "react-native-web";
import { SingleRestContext } from "../../App";
import styles from "../styles";

export default function Details () {
    const { currentRest } = useContext(SingleRestContext)
    return (
        <View style={styles.restaurantCard}>
        {!currentRest
        ? <ActivityIndicator />
        : (
            <>
            <Image 
            source={{uri: currentRest.image}} style={{width: '100%', height: 240}} />
            <Text style={styles.restaurantsName}>{currentRest.name}</Text>
            <Text style={styles.cuisine}>{currentRest.cuisine}</Text>
            <Text style={styles.address}>{currentRest.address}</Text>
            <Text style={[styles.address, {fontWeight: '700'}]}>Rating {currentRest.rating}</Text>
            </>
        )}
        </View>
    )
}