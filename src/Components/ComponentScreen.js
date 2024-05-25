


import react from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentScreen = () => { //we can use the wording "function()" or the "() =>" 
    const my_name = "Abdullah"

return( //there is a difference between "Text" and "text", becareful.
    <View>
        <Text style={styles.textStyle}>Getting started with react native!!woohooo</Text>  
        <Text styles={fontSize= 20}>My name is {my_name}</Text>
        <Text styles={styles.subHeaderStyle}>My name is {my_name} from the subHeaderStyle</Text>
    </View>
);


};

const styles = StyleSheet.create ({

    textStyle: {
        fontSize: 45
    
    },
    subHeaderStyle: {
        fontSize: 35
        
    }

    

});

export default ComponentScreen;

