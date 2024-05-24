import React from "react";
import {View,Text,StyleSheet} from 'react-native';
import ImageDetail from "../Components/ImageDetail";

const ImageScreen = () => {
   // return <Text> Image Screen</Text>
    return <View>

        <ImageDetail title="Forest" imageSource={require('../../assets/forest.jpg')} imageScore={7}/>
        <ImageDetail title="Beach" imageSource={require('../../assets/beach.jpg')} imageScore={5}/>
        <ImageDetail title="Mountain" imageSource={require('../../assets/mountain.jpg')} imageScore={10}/>
     
    </View>

};

const style = StyleSheet.create({});

export default ImageScreen;

