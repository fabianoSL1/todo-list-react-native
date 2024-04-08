import { StyleSheet } from "react-native";
import { colors } from "../../constants";

export const style = StyleSheet.create({
    container: {
        backgroundColor: colors.base.gray700,
        alignItems: "center",
        justifyContent:"center",
        width: '100%',
        height: 180
    },
    title: {
        color: colors.base.gray100,
        fontSize: 38,
        fontWeight: '700',
    }
})