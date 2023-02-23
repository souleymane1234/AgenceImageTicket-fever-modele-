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
import VideoComponent from '../../components/video';
import { StoriesComponent } from '../../components/storiesComponent';
import { TopBoxComponent } from '../../components/topBoxComponent';
import { storiesData } from '../../donnee/storiesData';
import { topBoxData } from '../../donnee/topBoxData';
import VideoPlayer from 'react-native-video-player';
import test from '../../assets/test.mp4'

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;


const HomeScreen = () => {
  const [home, setHome] = useState(true);
  const [evenement, setEvenement] = useState(false);
  const [cinema, setCinema] = useState(false);
  const [sport, setSport] = useState(false);
  const [profil, setProfil] = useState(false);

    const BottomBar = (
    <View
      style={{
        height: 50,
        backgroundColor: "red",
        flexDirection: "row",
        justifyContent: "space-around",
        elevation: 10,
        zIndex: 2,
        width: "100%",
        position: "absolute",
        bottom: 0,
        flex: 1,
        right: 0,
        left: 0,
      }}
    >
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        {home == true ? (
          <TouchableOpacity
            style={styles.footerCartContainer}
            onPress={() => {
              setHome(true);
              setEvenement(false);
              setCinema(false);
              setSport(false);
              setProfil(false);
            }}
          >
            <Icon
              size={25}
              color="#1c78ef"
              name="home"
              pack="material"
              style={styles.homeIcon}
            />
            {/* <Text style={[styles.TextIcon, {color: "#1c78ef", fontWeight: "bold"}]}>Home</Text> */}
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setHome(true);
              setEvenement(false);
              setCinema(false);
              setSport(false);
              setProfil(false);
            }}
          >
            <Icon
              size={25}
              color="#f2f2f2"
              name="home"
              pack="material"
              style={styles.homeIcon}
            />
            {/* <Text style={[styles.TextIcon, {color: "#f2f2f2"}]}>Home</Text> */}
          </TouchableOpacity>
        )}
      </View>
       <View style={{ justifyContent: "center", alignItems: "center" }}>
        {evenement == true ? (
          <TouchableOpacity
            style={styles.footerCartContainer}
            onPress={() => {
              setHome(true);
              setEvenement(false);
              setCinema(false);
              setSport(false);
              setProfil(false);
            }}
          >
            <Icon
              size={25}
              color="#1c78ef"
              name="bus"
              pack="material"
              style={styles.homeIcon}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setHome(false);
              setEvenement(true);
              setCinema(false);
              setSport(false);
              setProfil(false);
            }}
          >
            <Icon
              size={25}
              color="#c7c7c7"
              name="bus"
              pack="material"
              style={styles.homeIcon}
            />
          </TouchableOpacity>
        )}
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        {cinema == true ? (
          <TouchableOpacity
            onPress={() => {
              setHome(true);
              setEvenement(false);
              setCinema(false);
              setSport(false);
              setProfil(false);
            }}
          >
            <Icon
              size={25}
              color="#1c78ef"
              name="microphone-variant"
              pack="material"
              style={styles.homeIcon}
            />
            {/* <Text style={[styles.TextIcon, {color: "#1c78ef", fontWeight: "bold"}]}>Concerts</Text> */}
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setHome(false);
              setEvenement(false);
              setCinema(true);
              setSport(false);
              setProfil(false);
            }}
          >
            <Icon
              size={25}
              color="#c7c7c7"
              name="microphone-variant"
              pack="material"
              style={styles.homeIcon}
            />
            {/* <Text style={[styles.TextIcon, {color: "#c7c7c7"}]}>Concerts</Text> */}
          </TouchableOpacity>
        )}
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        {sport == true ? (
          <TouchableOpacity
            onPress={() => {
              setHome(true);
              setEvenement(false);
              setCinema(false);
              setSport(false);
              setProfil(false);
            }}
          >
            <Icon
              size={25}
              color="#1c78ef"
              name="account-circle"
              pack="material"
              style={styles.homeIcon}
            />
            {/* <Text style={[styles.TextIcon, {color: "#1c78ef", fontWeight: "bold"}]}>Sports</Text> */}
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setHome(false);
              setEvenement(false);
              setCinema(false);
              setSport(true);
              setProfil(false);
            }}
          >
            <Icon
              size={25}
              color="#c7c7c7"
              name="account-circle"
              pack="material"
              style={styles.homeIcon}
            />
          </TouchableOpacity>
        )}

      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        {profil == true ? (
          <TouchableOpacity
            onPress={() => {
              setHome(true);
              setEvenement(false);
              setCinema(false);
              setSport(false);
              setProfil(false);
            }}
          >
            <Icon
              size={25}
              color="#1c78ef"
              name="microphone-variant"
              pack="material"
              style={styles.homeIcon}
            />
            {/* <Text style={[styles.TextIcon, {color: "#1c78ef", fontWeight: "bold"}]}>Concerts</Text> */}
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setHome(false);
              setEvenement(false);
              setCinema(false);
              setSport(false);
              setProfil(true);
            }}
          >
            <Icon
              size={25}
              color="#c7c7c7"
              name="microphone-variant"
              pack="material"
              style={styles.homeIcon}
            />
            {/* <Text style={[styles.TextIcon, {color: "#c7c7c7"}]}>Concerts</Text> */}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );


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
      <StatusBar animated={true} backgroundColor="#12222e" />
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
      <ScrollView>
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
        <View style={{margin: 10}}>
          <VideoPlayer
              video={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
              videoWidth={1600}
              videoHeight={900}
              autoplay= {true}
              thumbnail={{ uri: 'https://cdn.cloudflare.steamstatic.com/steam/apps/601050/capsule_616x353.jpg?t=1673507900' }}
          />
        </View>
        {/* top 10 évenements start  */}
        <View style={styles.topBox}>
          <Text style={{color: "#717c82"}}>Les meilleurs évenements</Text>
          <FlatList
            style={{}}
            horizontal={true}
            data={topBoxData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItemTopBox}
          />
        </View>
        {/* top 10 évenements end  */}
        {/* top 10 films start  */}
        <View style={styles.topBox}>
          <Text style={{color: "#717c82"}}>Les vrais films</Text>
          <FlatList
            style={{}}
            horizontal={true}
            data={topBoxData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItemTopBox}
          />
        </View>
        {/* top 10 films end  */}
        {/* top 10 sports start  */}
        <View style={styles.topBox}>
          <Text style={{color: "#717c82"}}>Tous les sports</Text>
          <FlatList
            style={{marginBottom: 50}}
            horizontal={true}
            data={topBoxData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItemTopBox}
          />
        </View>
        {/* top 10 sports end  */}
      </ScrollView>
      {BottomBar}

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
        backgroundColor: "#12222e",
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
    },
      backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },

});

export default HomeScreen;
