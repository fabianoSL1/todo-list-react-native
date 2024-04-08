import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { style } from "./style";
import { colors } from "../../../constants";
import { useContext, useState } from "react";
import { todoContext } from "../../../todoContext";

export default function InputTodo() {
    const [text, setText] = useState('');
    const context = useContext(todoContext);
    
    function handlerOnPress() {
        context?.handlerAddTodo({
            done: false,
            text: text
        })
    }

    return (
        <View style={style.container}>
            <TextInput 
                placeholder="Adicione uma nova tarefa"
                onChangeText={text => setText(text)}
                value={text}
                style={style.input}
                placeholderTextColor={colors.base.gray300}
            />
            <TouchableOpacity 
                style={style.button}
                onPress={handlerOnPress}
            >
                <View style={{width: 16, height: 16, borderRadius: 100, backgroundColor: '#fff'}}>
                    
                </View>
            </TouchableOpacity>
        </View>
    )
}