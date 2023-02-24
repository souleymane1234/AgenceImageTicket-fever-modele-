import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { TopBoxComponent } from '../../components/topBoxComponent';
import { topBoxData } from '../../donnee/topBoxData';
import { BottomBarComponent } from '../../components/bottomBar';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;


const CinemaScreen = () => {


  const renderItemTopBox = ({ item }) => {
    return (
      <TopBoxComponent
          nomEvenement={item.nomEvenement}
          image={item.image}
          note={item.note}
          prix={item.prix}
        />

    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor="#12222e" />
        {/* top 10 box start  */}
        <View style={styles.topBox}>
          <Text style={{color: "#717c82", fontSize: 18}}>les meilleurs films</Text>
          <FlatList
            style={{marginBottom: 20}}
            data={topBoxData}
            numColumns={2}
            keyExtractor={(item, index) => item.id}
            renderItem={renderItemTopBox}
          />
        </View>
        <BottomBarComponent/>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: windowWidth,
        height: windowHeight,
        backgroundColor: "#12222e"
    },
    topBox: {
      margin: 10
    },

});

export default CinemaScreen;
