import { View, Text } from "react-native";
import { style } from "./style";

export default function Banner() {

    return (
        <View style={style.container}>
            <Text style={style.title}>todo</Text>
        </View>
    )
}