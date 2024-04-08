import { StyleSheet } from "react-native";
import { colors } from "../../../../constants";

export const style = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginVertical: 48,
        alignItems: "center",
        justifyContent:"center",
    },
    title: {
        color: colors.base.gray300,
        fontSize: 16,
        fontWeight: '700',
    },
    subtitle: {
        color: colors.base.gray300,
        fontSize: 16,
        fontWeight: '400',
    }
})