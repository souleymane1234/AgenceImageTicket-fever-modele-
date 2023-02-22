import React from "react";
import { View, Text, Image, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height/3;

export const TopBoxComponent = (props) => {
  return (

    <View style={{flex: 1, backgroundColor: "#374550", width: 150, borderRadius: 5, margin: 10, height: windowHeight}}>
        <Image
            style={{ width: "100%", height: 100, resizeMode:'contain' }}
            source={props.image}
        />
        <View style={{margin: 10}}>
            <Text style={{color: "#fff"}}>
                {props.nomEvenement}
            </Text>
        </View>
        <View style={{flexDirection: "row", justifyContent: "space-between", margin: 10}}>
            <Text style={{color: "#f2cb5e"}}>
                {props.note}
            </Text>
            <Text style={{color: "#fff"}}>
                {props.prix}
            </Text>
        </View>

    </View>
  );
};
