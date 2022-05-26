import { useContext } from "react";
import { View, Text } from "react-native";
import { SingleRestContext } from "../../App";
import styles from "../styles";

export default function Details () {
    const { currentRest } = useContext(SingleRestContext)
    return (
        <View style={styles.restaurantCard}>
            <Text style={styles.restaurantsName}>{currentRest.name}</Text>
        </View>
    )
}