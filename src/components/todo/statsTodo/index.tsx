import { Text, View } from "react-native";
import { style } from "./style";
import { colors } from "../../../constants";
import { useContext } from "react";
import { todoContext } from "../../../todoContext";

export default function StatsTodo() {
    const context = useContext(todoContext)
    
    return(
        <View style={style.container}>
            <View style={style.statContainer}>
                <Text style={{...style.statLabel, color: colors.product.blue}}>Criadas</Text>
                <Text style={style.statValue}>{context?.todoList.length}</Text>
            </View>

            <View style={style.statContainer}>
                <Text style={{...style.statLabel, color: colors.product.purple}}>Concluídas</Text>
                <Text style={style.statValue}>{context?.doneCount}</Text>
            </View>
        </View>
    )
}

