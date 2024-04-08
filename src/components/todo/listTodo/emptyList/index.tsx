import {View, Text} from 'react-native'
import { style } from './style'

export default function EmptyList() {
    return (
        <View style={style.container}>
            <Text style={style.title}>Você ainda não tem tarefas cadastradas</Text>
            <Text style={style.subtitle}>Crie tarefas e organize seus itens a fazer</Text>
        </View>
    )
}