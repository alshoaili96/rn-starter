import react from "react";
import { View, Text, StyleSheet, FlatList} from "react-native";   

const ListScreen = () => {
    //creating an array of object for our list:
    const Friends = [
        {name: "Abdullah", age: "20"},//first method of the key property is by adding a unique key after each name
        {name: "Khalid", age: "21"},
        {name: "Saoud", age: "22"},
        {name: "Said", age: "6783"},
        {name: "Musab", age: "24"},
        {name: "gwt", age: "24"},
        {name: "dfv", age: "26"},

   
       
    ];
   
    
    return (
    <FlatList 
    //horizontal={false}//scroll horizontally
    //  showsHorizontalScrollIndicator={false} //dont show scroll bar when scrolling horizontally
        keyExtractor={Friends => Friends.name}//another method of the key property, best method, easy to memorize and dont need to modify the array
        data={Friends}  
        renderItem={({item}) => {
           //return <Text style={styles.textStyle}>{item.name + " - Age "+ item.age}</Text>  //one way of printing name with age
           return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>  //the second way of printing name with age

        }} 
    />
    );
};

const styles = StyleSheet.create({
    textStyle: { 
        marginVertical: 50
    }
});

export default ListScreen;

