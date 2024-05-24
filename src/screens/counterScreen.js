import React, {useState} from "react";
import {View, Text, StyleSheet, Button} from 'react-native';
import ComponentScreen from "./ComponentScreen";

const CounterScreen = () => {

const [counter, setCounter] = useState(0);
return (
<View>

    <Button title="increase" onPress={() => {
        //dont do this
        //counter++;
        setCounter(counter + 1);
    }}/>
    <Button title="decrease" onPress={() => {
        //counter--;
        setCounter(counter - 1);
   }}/>
    <Text> Current Count: {counter} </Text>

</View>
);
};

const style = StyleSheet.create({});

export default CounterScreen;
