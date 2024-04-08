import { StyleSheet } from "react-native";
import { colors } from "../../constants";

export const style = StyleSheet.create({
    container: {
        backgroundColor: colors.base.gray600,
        flex: 1,
        alignItems: 'center',
    },
    wrapper: {
        paddingHorizontal: 20,
        marginTop: -30
    }
})