import { StyleSheet } from "react-native";
import { colors } from "../../../constants";

export const style = StyleSheet.create({
    container: {
        flexDirection: "row",
        gap: 8
    },
    input: {
        flexGrow: 1,
        borderRadius: 6,
        borderWidth: 1,
        paddingLeft: 18,
        color: colors.base.gray100,
        backgroundColor: colors.base.gray500,
        borderColor: colors.base.gray700
    },
    button: {
        padding: 18,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.product.blueDark
    }
})