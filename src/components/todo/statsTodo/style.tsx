import { StyleSheet } from "react-native";
import { colors } from "../../../constants";

export const style = StyleSheet.create({
    container: {
        marginTop: 10,
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: colors.base.gray400,
        flexDirection: "row",
        justifyContent: "space-between",
        width: '100%',
    },
    statContainer: {
        flexDirection: "row",
        gap: 8,
        alignItems: "baseline"
    },
    statLabel: {
        fontSize: 18,
        fontWeight: "700"
    },
    statValue: {
        borderRadius: 999,
        paddingHorizontal: 12,
        paddingVertical: 2,
        fontSize: 16,
        fontWeight: '700',
        backgroundColor: colors.base.gray400,
        color: colors.base.gray200,
        textAlign: 'center'
    }
})