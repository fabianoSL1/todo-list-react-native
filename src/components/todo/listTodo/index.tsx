import { useContext } from "react";
import { FlatList, View, Text } from "react-native";
import EmptyList from "./emptyList";
import { todoContext } from "../../../todoContext";



export default function ListTodo() {
    const context = useContext(todoContext);

    return (
        <View>
            <FlatList 
                data={context?.todoList}
                keyExtractor={item => item.text}
                renderItem={({item}) => <Text>{item.text}</Text>}
                ListEmptyComponent={() => <EmptyList />}
            />
        </View>
    )
}