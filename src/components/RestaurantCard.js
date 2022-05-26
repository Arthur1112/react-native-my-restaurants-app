import { View, Text, Image } from "react-native";
import styles from "../styles/index";


// name, cuisine, address, rating


export default function RestaurantCard({singleRest}){
    return(
        <View style={styles.restaurantCard}>
            <Text style={styles.restaurantsName}>
                {singleRest.name} / {singleRest.cuisine}
            </Text>
            <Image source={{uri:singleRest.image}} style={{width: '100%', height: 100}} />
        </View>
    )
}