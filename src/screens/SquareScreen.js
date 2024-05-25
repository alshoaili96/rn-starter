import React , {useReducer} from "react"; //using useReduce  instead of useState
import { View, Text, StyleSheet, Button, FlatList} from "react-native";   
import ColorCounter from "../Components/ColorCounter"; //for the lecture solution


/* This is my solution for this app and it worked exactly how it is supposed to*/
/*And it is all in this page, starting from line 6 all the way to line 55*//*
const SquareScreen = () => {
    const [colors, setColor] = useState([]);
    const [counterRed, setCounterRed] = useState(0);
    const [counterGreen, setCounterGreen] = useState(0);
    const [counterBlue, setCounterBlue] = useState(0);
console.log("rgb(",counterRed, counterGreen, counterBlue,")")
return <View>
    
    <Text>  Red</Text>
    <Button title="More Red" onPress={() => {
        if(counterRed < 255){
            setCounterRed(counterRed+1)
        }   
    }}/>
    <Button title="Less Red" onPress={() => {
        if(counterRed > 0){
            setCounterRed(counterRed-1)
        }
    }}/>

<Text>  Green</Text>
    <Button title="More Green" onPress={() => {
        if(counterGreen < 255){
            setCounterGreen(counterGreen+1)
        }
    }}/>
    <Button title="Less Green" onPress={() => {
        if(counterGreen > 0 ){
            setCounterGreen(counterGreen-1)
        }
    }}/>

<Text>  Blue</Text>
    <Button title="More Blue" onPress={() => {
        if(counterBlue < 255){
            setCounterBlue(counterBlue+1)
        }
    }}/>
    <Button title="Less Blue" onPress={() => {
        if(counterBlue > 0){
            setCounterBlue(counterBlue-1)
        }
    }}/>
<View style={{height: 100, width: 100, backgroundColor: `rgb(${counterRed}, ${counterGreen}, ${counterBlue})`}} />



</View>
    
};
*/


/*lecture solution*/
const COLOR_INCREMENT = 15;

const reduce =(state, action) => {
    //state == {red:0, green:0, blue:0}
    //action == {colorToChange: 'red' || 'green' || 'blue', amount: +15 || -15} 
    switch(action.colorToChange){
        case'red':
            return {...state, red: state.red + action.amount};
        case'green':
            return {...state, green: state.green + action.amount};
        case'blue':
            return {...state, blue: state.blue + action.amount};
        default:
            return state;
    }
};


const SquareScreen = () => {
    const[state, dispatch] = useReducer(reducer, {red:0, green:0, blue:0})

   //from my solution
   // const [counterRed, setCounterRed] = useState(0);
    //const [counterGreen, setCounterGreen] = useState(0);
   // const [counterBlue, setCounterBlue] = useState(0);

   //the above line are being change to REDUCERS


  //the below function is also being changed to a REDUCER
/*const setColor =(color, change)=>{
//color is going to be a string either 'red', 'gree', or 'blue'
//change is going to be the amount of change in color, either +15or -15

switch(color){
    case 'Red':
        counterRed + change >255 || counterRed +change <0 ? null : setCounterRed(counterRed + change);
            return;
    case 'Green':
        counterGreen + change >255 || counterGreen +change <0 ? null : setCounterGreen(counterGreen + change);
            return;
    case 'Blue':
        counterBlue + change >255 || counterBlue +change <0 ? null : setCounterBlue(counterBlue + change);
            return;
    default:
        return;      
}*/



console.log(`rgb(${counterRed}, ${counterGreen}, ${counterBlue})`)

   return <View>

    <ColorCounter 
    //changing the below lines to a REDUCER
    //onIncrease={() => setColor('Red', COLOR_INCREMENT)} 
    //onDecrease={() => setColor('Red', -1 * COLOR_INCREMENT)} 
    onIncrease={() => }
    onDecrease={() => }
    color="Red" 
    />
    <ColorCounter 
    //changing the below lines to a REDUCER
    //onIncrease={() => setColor('Green', COLOR_INCREMENT)} 
    //onDecrease={() => setColor('Green', -1 * COLOR_INCREMENT)} 
    onIncrease={() => }
    onDecrease={() => }
    color="Green"
    />
    <ColorCounter
    //changing the below lines to a REDUCER 
    //onIncrease={() => setColor('Blue', COLOR_INCREMENT)} 
    //onDecrease={() => setColor('Blue', -1 * COLOR_INCREMENT)} 
    onIncrease={() => }
    onDecrease={() => }
    color="Blue"
    />

    <View style={{height: 150, width:150, backgroundColor: `rgb(${counterRed}, ${counterGreen}, ${counterBlue})`}} />

    </View>

};

const styles = StyleSheet.create({});

export default SquareScreen;

