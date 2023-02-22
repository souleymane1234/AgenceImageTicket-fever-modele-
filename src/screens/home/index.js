import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  FlatList
} from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { StoriesComponent } from '../../components/storiesComponent';
import { TopBoxComponent } from '../../components/topBoxComponent';
import { storiesData } from '../../donnee/storiesData';
import { topBoxData } from '../../donnee/topBoxData';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;


const HomeScreen = () => {


  const renderItemStories = ({ item }) => {
    return (
      <StoriesComponent
          nomEvenement={item.nomEvenement}
          image={item.image}
        />

    )
  }

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
      <StatusBar animated={true} backgroundColor="#000" />
      {/* header start  */}
      <View style={styles.header}>
        <View style={[styles.headerView, {flexDirection: "row", justifyContent: "space-between"}]}>
          <Icon
            style={{ alignSelf: "center" }}
            name="heart-outline"
            pack="material"
            size={20}
            color={"#fff"}
          />
          <Icon
            style={{ alignSelf: "center", marginHorizontal: 5 }}
            name="bookmark-multiple-outline"
            pack="material"
            size={20}
            color={"#fff"}
          />
        </View>
        <View style={styles.headerView}>
          <Image
            style={{  width: 100, height: 100, resizeMode:'contain', alignSelf: "center" }}
            source={require("../../assets/logo.png")}
          />
        </View>
        <View style={styles.headerView}>
          <Icon
            style={{ alignSelf: "center" }}
            name="wallet"
            pack="material"
            size={20}
            color={"#fff"}
          />
        </View>
      </View>
      {/* header end  */}
      {/* stories View start  */}
      <View style={styles.storiesView}>
        <Text style={{color: "#717c82"}}>EN VEDETTE</Text>
        <FlatList
          style={{}}
          horizontal={true}
          data={storiesData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItemStories}
        />
      </View>
      {/* stories View end  */}
      {/* top 10 box start  */}
      <View style={styles.topBox}>
        <Text style={{color: "#717c82"}}>Top 10</Text>
        <FlatList
          style={{}}
          horizontal={true}
          data={topBoxData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItemTopBox}
        />
      </View>
      {/* top 10 box end  */}
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
    header:{
        height: 50,
        backgroundColor: "#000",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    headerView:{
        justifyContent: "center",
        margin: 10
    }
    ,
    headerViewText:{
        color: "#fff",
        fontSize: 18
    },
    storiesView: {
      margin: 10,
    },
    topBox: {
      margin: 10
    }

});

export default HomeScreen;
