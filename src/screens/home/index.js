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
import { storiesData } from '../../donnee/storiesData';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;


const HomeScreen = () => {


  const renderItems = ({ item }) => {
    return (
      <StoriesComponent
          nomEvenement={item.nomEvenement}
          image={item.image}
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
            <Text style={[styles.headerViewText, {fontWeight: "bold"}]}>Scan Me</Text>
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
          renderItem={renderItems}
        />
      </View>
      {/* stories View end  */}
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
    }

});

export default HomeScreen;
