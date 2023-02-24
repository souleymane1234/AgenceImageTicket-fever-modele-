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
import { StoriesComponent } from '../../components/storiesComponent';
import { TopBoxComponent } from '../../components/topBoxComponent';
import { storiesData } from '../../donnee/storiesData';
import { topBoxData } from '../../donnee/topBoxData';
import VideoPlayer from 'react-native-video-player';
import { BottomBarComponent } from '../../components/bottomBar';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;


const HomeScreen = ({ navigation }) => {
  const [home, setHome] = useState(true);
  const [evenement, setEvenement] = useState(false);
  const [cinema, setCinema] = useState(false);
  const [sport, setSport] = useState(false);
  const [profil, setProfil] = useState(false);

    const BottomBar = (
    <View
      style={{
        height: 50,
        backgroundColor: "#12222e",
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
              name="home"
              pack="material"
              style={styles.bottomBarIconActif}
            />
            <Text style={styles.BottomBarTextActif}>Acceuil</Text>
            {/* <Text style={[styles.TextIcon, {color: "#1c78ef", fontWeight: "bold"}]}>Home</Text> */}
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setHome(true);
              navigation.navigate("HomeScreen")
              setEvenement(false);
              setCinema(false);
              setSport(false);
              setProfil(false);
            }}
          >
            <Icon
              size={25}
              name="home"
              pack="material"
              style={styles.bottomBarIconNoActif}
            />
            <Text style={styles.BottomBarTextNoActif}>Acceuil</Text>
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
              name="bus"
              pack="material"
              style={styles.bottomBarIconActif}
            />
            <Text style={styles.BottomBarTextActif}>Evenement</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setHome(false);
              setEvenement(true);
              navigation.navigate("EvenementScreen")
              setCinema(false);
              setSport(false);
              setProfil(false);
            }}
          >
            <Icon
              size={25}
              name="bus"
              pack="material"
              style={styles.bottomBarIconNoActif}
            />
            <Text style={styles.BottomBarTextNoActif}>Evenement</Text>
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
              name="theater"
              pack="material"
              style={styles.bottomBarIconActif}
            />
            <Text style={styles.BottomBarTextActif}>Sport</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setHome(false);
              setEvenement(false);
              setCinema(false);
              setSport(true);
              navigation.navigate("SportScreen")
              setProfil(false);
            }}
          >
            <Icon
              size={25}
              name="theater"
              pack="material"
              style={styles.bottomBarIconNoActif}
            />
            <Text style={styles.BottomBarTextNoActif}>Sport</Text>
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
              name="theater"
              pack="material"
              style={styles.bottomBarIconActif}
            />
            <Text style={styles.BottomBarTextActif}>Cinema</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setHome(false);
              setEvenement(false);
              setCinema(true);
              navigation.navigate("CinemaScreen")
              setSport(false);
              setProfil(false);
            }}
          >
            <Icon
              size={25}
              name="theater"
              pack="material"
              style={styles.bottomBarIconNoActif}
            />
            <Text style={styles.BottomBarTextNoActif}>Cinema</Text>
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
              name="account-circle"
              pack="material"
              style={styles.bottomBarIconActif}
            />
            <Text style={styles.BottomBarTextActif}>Profil</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setHome(false);
              setEvenement(false);
              setCinema(false);
              setSport(false);
              setProfil(true);
              navigation.navigate("ProfilScreen")
            }}
          >
            <Icon
              size={25}
              name="account-circle"
              pack="material"
               style={styles.bottomBarIconNoActif}
            />
            <Text style={styles.BottomBarTextNoActif}>Profil</Text>
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
    bottomBarIconActif: {
      alignSelf: 'center',
      color:"#f2f2f2"
    },
    BottomBarTextActif: {
      color: "#f2f2f2", 
      fontSize: 12
    },
    bottomBarIconNoActif: {
      alignSelf: 'center',
      color:"#f2f2f2",
      opacity: 0.3
    },
    BottomBarTextNoActif: {
      color: "#f2f2f2", 
      fontSize: 12,
      opacity: 0.3
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
