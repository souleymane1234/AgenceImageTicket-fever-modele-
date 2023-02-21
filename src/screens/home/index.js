import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;


const HomeScreen = () => {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor="#000" />
      <View style={styles.header}>
        <View style={styles.headerView}>
                  <Icon
        style={{ alignSelf: "center" }}
        name="magnify"
        pack="material"
        size={20}
        color={"#DA7200"}
      />
        </View>
        <View style={styles.headerView}>
            <Text style={[styles.headerViewText, {fontWeight: "bold"}]}>Scan Me</Text>
        </View>
        <View style={styles.headerView}>
            <Text style={styles.headerViewText}>Icon</Text>
        </View>
      </View>
      <Text>welcome to you</Text>
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
    }

});

export default HomeScreen;
