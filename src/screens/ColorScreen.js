import React , {useState} from "react";
import { View, Text, StyleSheet, Button, FlatList} from "react-native";   

const ColorScreen = () => {
    const [colors, setColor] = useState([]);
    console.log(colors);
    console.log(colors.length) //this prints the number of colors displayed in the screen.
    return (
    <View>
        <Button title="Add a color" onPress={() => {
            setColor([...colors, randRGB()]); //dont forgrt the braces for the function.
        }}/>

        <Text>Number of colors on the screen: {colors.length}</Text> 
        <FlatList
        keyExtractor={item => item}
            data={colors}
            renderItem={({item}) => {
                return(
                    <View />
                );
            } }//item could be any rgb(0,0,0)
        
        />
    </View>
    );
};

const randRGB = () => {

    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`; //here we used a back-tic which is different from single quotes.
};


const styles = StyleSheet.create({});

export default ColorScreen;

