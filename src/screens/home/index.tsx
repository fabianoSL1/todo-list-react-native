import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { style } from "./style";
import Banner from "../../components/banner";
import TodoProvider from "../../todoContext";
import InputTodo from "../../components/todo/inputTodo";
import ListTodo from "../../components/todo/listTodo";
import StatsTodo from "../../components/todo/statsTodo";


export default function Home() {
    

    return (
        <View style={style.container}>
            <StatusBar 
                style="light"
                translucent
            />
            <Banner />
            <TodoProvider>
                <View style={style.wrapper}>
                    <InputTodo />
                    <StatsTodo />
                    <ListTodo />
                </View>
            </TodoProvider>
        </View>
    )
}