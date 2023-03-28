import { useEffect } from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import styles from "../utils/styles";

export default function FetchNews() {
    function fetchNewsData() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((reponse) => reponse.json())
        .then((json) => console.log(json))
        .catch((error) => console.error(error))
    }
    useEffect(() =>{
        fetchNewsData();
    }, []);

    return(
        <View style={styles.container}>
            <Text>Fetch News</Text>
        </View>
    )
}