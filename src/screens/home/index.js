import React, { useState, useEffect } from 'react';
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
  TouchableOpacity,
  TouchableHighlight,
  Modal,
  Pressable,
  Alert,
  Share,

} from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { StoriesComponent } from '../../components/storiesComponent';
import { TopBoxComponent } from '../../components/topBoxComponent';
import { storiesData } from '../../donnee/storiesData';
import { topBoxData } from '../../donnee/topBoxData';
import VideoPlayer from 'react-native-video-player';
import { BottomBarComponent } from '../../components/bottomBar';
import OrientationLoadingOverlay from "react-native-orientation-loading-overlay";
import { EventTemplate } from '../../components/testComponent';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const heightVideo = Dimensions.get("window").height/2.6
const heightStotiesVideo = Dimensions.get("window").height/1.2


const HomeScreen = ({ navigation, route }) => {
  const { id, Token, Data } = route.params;
  const [home, setHome] = useState(true);
  const [evenement, setEvenement] = useState(false);
  const [cinema, setCinema] = useState(false);
  const [sport, setSport] = useState(false);
  const [profil, setProfil] = useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [AllCinema, setAllCinema] = useState();
  const [AllEvent, setAllEvent] = useState();
  const [AllSport, setAllSport] = useState();

  //  console.log("data........", Data)
// All cinema 
  useEffect(() => {
var myHeaders = new Headers();
myHeaders.append("Cache-Control", "no-cache");
myHeaders.append("Accept", "*/*");
myHeaders.append("Accept-Encoding", "gzip, deflate");
myHeaders.append("Connection", "keep-alive");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://pleasant-shirt-bass.cyclic.app/api/allCinema", requestOptions)
  .then(response => response.json())
  .then(result => {
    setAllCinema(result)
  })
  .catch(error => console.log('error', error));
}, [AllCinema])

// All event 
  useEffect(() => {
var myHeaders = new Headers();
myHeaders.append("Cache-Control", "no-cache");
myHeaders.append("Accept", "*/*");
myHeaders.append("Accept-Encoding", "gzip, deflate");
myHeaders.append("Connection", "keep-alive");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://pleasant-shirt-bass.cyclic.app/api/allEvent", requestOptions)
  .then(response => response.json())
  .then(result => {
    setAllEvent(result)
  })
  .catch(error => console.log('error', error));
}, [AllEvent])

// All sport
  useEffect(() => {
var myHeaders = new Headers();
myHeaders.append("Cache-Control", "no-cache");
myHeaders.append("Accept", "*/*");
myHeaders.append("Accept-Encoding", "gzip, deflate");
myHeaders.append("Connection", "keep-alive");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://pleasant-shirt-bass.cyclic.app/api/allSport", requestOptions)
  .then(response => response.json())
  .then(result => {
    setAllSport(result)
  })
  .catch(error => console.log('error', error));
}, [AllSport])

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
              name="basketball"
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
              setProfil(false);
            }}
          >
            <Icon
              size={25}
              name="basketball"
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
              name="video-vintage"
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
              setSport(false);
              setProfil(false);
            }}
          >
            <Icon
              size={25}
              name="video-vintage"
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

  // share function 
    const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "je suis heureux de vous partager l'application"
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };


  const renderItemStories = ({ item }) => {
    return (
      <TouchableHighlight
        onPress={() => setModalVisible(true)}
        underlayColor="none"
        >
      <StoriesComponent
          nomEvenement={item.nomEvenement}
          image={item.image}
          color={item.color}
        />
      </TouchableHighlight>

    )
  }

  const renderItemTopBox = ({ item }) => {
    return (
      <TouchableHighlight onPress={() =>
          navigation.navigate("DetailEvenement")
        }
        underlayColor="none"
        >
      <TopBoxComponent
          nom={item.nom}
          image={item.image}
          prixStandart={item.prixStandart}
        />
      </TouchableHighlight>

    )
  }

    const renderItemsTest = ({ item }) => {
    return (
      <TouchableHighlight onPress={() =>
          navigation.navigate("DetailEvenement", {
            idEvent: item._id,
            DataEvent: item,
            idUser: id
          })
        }
        underlayColor="none"
        >
      <EventTemplate
          DataEvent={item}
          idEvent={item._id}
          nom={item.nom}
          image={item.image}
          prixStandart={item.prixStandart}
        />
      </TouchableHighlight>

    )
  }
  let Loader;
  if (AllCinema) {
    Loader = (
      <OrientationLoadingOverlay
        visible={false}
        color="white"
        indicatorSize="large"
        messageFontSize={10}
        message="Veillez patienter un moment!!"
      />
    );
  } else {
    Loader = (
      <OrientationLoadingOverlay
        visible={true}
        color="white"
        indicatorSize="large"
        messageFontSize={10}
        message="Veillez patienter un moment!!"
      />
    );
  }
  const Home = (
    <View style={{height: windowHeight, width: windowWidth}}>
      <ScrollView>
        {Loader}
        {/* stories View start  */}
        {/* <View style={styles.storiesView}>
          <Text style={{color: "#717c82", marginBottom: 10}}>EN VEDETTE</Text>
          <FlatList
            style={{}}
            horizontal={true}
            data={storiesData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItemStories}
          />
        </View> */}
        {/* stories View end  */}
        {/* top 10 box start  */}
        <View style={styles.topBox}>
          <Text style={{color: "#717c82"}}>Top 10</Text>
          <FlatList
            style={{}}
            horizontal={true}
            data={AllCinema}
            keyExtractor={(item) => item._id.toString()}
            renderItem={renderItemsTest}
          />
        </View>
        {/* top 10 box end  */}
        <View style={{margin: 10}}>
          <View style={{ backgroundColor: "#fff",  borderRadius: 5, margin: 10, height: heightVideo}}>
            <VideoPlayer
              video={{ uri: 'https://www.bandes-annonces.fr?preaction=load_iphone_video&v=2693324&f=41867748_iphone.mp4' }}
              videoWidth={1600}
              videoHeight={900}
              autoplay= {true}
              loop={true}
              repeat={true}
              thumbnail={{ uri: 'https://imgsrc.cineserie.com/2023/01/andre-dussolier-et-alex-lutz-en-plein-feu-apollo-films-e1674743737946.jpg?ver=1' }}
            />
        <View style={{margin: 10}}>
            <Text style={{color: "#53c6ea", textAlign: "center", fontSize: 16, fontWeight: "bold"}}>
                EN PLEIN FEU: avec André Dussollier et Alex Lutz
            </Text>
        </View>

          </View>
        </View>
        {/* top 10 évenements start  */}
        <View style={styles.topBox}>
          <Text style={{color: "#717c82"}}>Les meilleurs évenements</Text>
          <FlatList
            style={{}}
            horizontal={true}
            data={AllEvent}
            keyExtractor={(item) => item._id.toString()}
            renderItem={renderItemsTest}
          />
        </View>
        {/* top 10 évenements end  */}
        {/* top 10 films start  */}
        <View style={styles.topBox}>
          <Text style={{color: "#717c82"}}>Les vrais films</Text>
          <FlatList
            style={{}}
            horizontal={true}
            data={AllCinema}
            keyExtractor={(item) => item._id.toString()}
            renderItem={renderItemsTest}
          />
        </View>
        {/* top 10 films end  */}
        {/* top 10 sports start  */}
        <View style={styles.topBox}>
          <Text style={{color: "#717c82"}}>Tous les sports</Text>
          <FlatList
            style={{marginBottom: 120}}
            horizontal={true}
            data={AllSport}
            keyExtractor={(item) => item._id.toString()}
            renderItem={renderItemsTest}
          />
        </View>
        {/* top 10 sports end  */}
      </ScrollView>
    </View>
  );

  const Evenement = (
    <SafeAreaView style={{height: windowHeight, width: windowWidth}}>
      <ScrollView>
      {/* stories View start  */}
        {/* <View style={styles.storiesView}>
          <Text style={{color: "#717c82", marginBottom: 10}}>EN VEDETTE</Text>
          <FlatList
            style={{}}
            horizontal={true}
            data={storiesData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItemStories}
          />
        </View> */}
        {/* stories View end  */}
        <View style={styles.topBox}>
          <Text style={{color: "#717c82", fontSize: 18}}>Vos meilleurs evenements</Text>
          <FlatList
            style={{marginBottom: 150}}
            data={AllEvent}
            numColumns={2}
            keyExtractor={(item, index) => item._id}
            renderItem={renderItemsTest}
          />
        </View>
        </ScrollView>
    </SafeAreaView>
  );

  const Sport = (
    <View style={{height: windowHeight, width: windowWidth}}>
      <ScrollView>
        {/* stories View start  */}
        {/* <View style={styles.storiesView}>
          <Text style={{color: "#717c82", marginBottom: 10}}>EN VEDETTE</Text>
          <FlatList
            style={{}}
            horizontal={true}
            data={storiesData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItemStories}
          />
        </View> */}
        {/* stories View end  */}
        <View style={styles.topBox}>
          <Text style={{color: "#717c82", fontSize: 18}}>Les plus grandes compétitions</Text>
          <FlatList
            style={{marginBottom: 150}}
            data={AllSport}
            numColumns={2}
            keyExtractor={(item, index) => item._id}
            renderItem={renderItemsTest}
          />
        </View>
         </ScrollView>
    </View>
  );

  const Cinema = (
    <View style={{height: windowHeight, width: windowWidth}}>
      <ScrollView>
      {/* stories View start  */}
        {/* <View style={styles.storiesView}>
          <Text style={{color: "#717c82", marginBottom: 10}}>EN VEDETTE</Text>
          <FlatList
            style={{}}
            horizontal={true}
            data={storiesData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItemStories}
          />
        </View> */}
        {/* stories View end  */}
        <View style={styles.topBox}>
          <Text style={{color: "#717c82", fontSize: 18}}>les meilleurs films</Text>
          {/* bande d'annonce start  */}
          <View style={{margin: 10}}>
            <View style={{ backgroundColor: "#fff",  borderRadius: 5, margin: 10, height: heightVideo}}>
              <VideoPlayer
                video={{ uri: 'https://www.bandes-annonces.fr?preaction=load_iphone_video&v=2693324&f=41867748_iphone.mp4' }}
                videoWidth={1600}
                videoHeight={900}
                autoplay= {true}
                loop={true}
                repeat={true}
                thumbnail={{ uri: 'https://imgsrc.cineserie.com/2023/01/andre-dussolier-et-alex-lutz-en-plein-feu-apollo-films-e1674743737946.jpg?ver=1' }}
                />
            <View style={{margin: 10}}>
                <Text style={{color: "#53c6ea", textAlign: "center", fontSize: 16, fontWeight: "bold"}}>
                    EN PLEIN FEU: avec André Dussollier et Alex Lutz
                </Text>
            </View>
          </View>
        </View>
        {/* bande d'annonce end  */}
          <FlatList
            style={{marginBottom: 150}}
            data={AllCinema}
            numColumns={2}
            keyExtractor={(item, index) => item._id}
            renderItem={renderItemsTest}
          />
        </View>
        </ScrollView>
    </View>
  );

  const Profil = (
    <View style={{height: windowHeight, width: windowWidth}}>
      <View style={{flexDirection: "row", justifyContent: "space-between", margin: 10}}>
        <View>
            <Image
                style={{ borderRadius: 60, width: 80, height: 80, resizeMode:'contain' }}
                source={require("../../assets/imgConcert1.jpeg")}
            />
        </View>
        <View style={{justifyContent: "center"}}>
            <Text style={{color: "#fff"}}>{Data.user.prenom} {Data.user.nom}</Text>
            <Text style={{color: "#fff"}}>{Data.user.email}</Text>
            <Text style={{color: "#fff"}}>{Data.user.number}</Text>
        </View>
        <View style={{justifyContent: "center"}}>
            <Icon
              size={25}
              color="#fff"
              name="account-cog"
              pack="material"
              style={{alignSelf: "center"}}
            />
        </View>
      </View>
      <View style={{margin: 10}}>
        <Text style={{color: "#fff", fontWeight: "bold", fontSize: 16}}>Personnel</Text>
      </View>
      {/* box 1 start */}
      <TouchableOpacity onPress={() => navigation.navigate("MesTicketsCinema", { idUser: id })} style={{backgroundColor: "#34424c", flexDirection: "row", margin: 10, borderRadius: 10, height: 70}}>
        <View style={{justifyContent: "center", margin: 10}}>
            <Icon
              size={25}
              color="#fff"
              name="ticket-outline"
              pack="material"
              style={{alignSelf: "center"}}
            />
        </View>
        <View style={{marginHorizontal: 20, justifyContent: "center"}}>
            <Text style={{color: "#fff", fontWeight: "bold", fontSize: 18, marginBottom: 5}}>Tickets</Text>
            <Text style={{color: "#717c82"}}>Tous tes tickets achetés</Text>
        </View>
      </TouchableOpacity>
      {/* box 1 end */}
      {/* box 2 start */}
      <TouchableOpacity onPress={() => navigation.navigate("Login")} style={{backgroundColor: "#34424c", flexDirection: "row", margin: 10, borderRadius: 10, height: 70}}>
        <View style={{justifyContent: "center", margin: 10}}>
            <Icon
              size={25}
              color="#fff"
              name="logout"
              pack="material"
              style={{alignSelf: "center"}}
            />
        </View>
        <View style={{marginHorizontal: 20, justifyContent: "center"}}>
            <Text style={{color: "#fff", fontWeight: "bold", fontSize: 18, marginBottom: 5}}>Déconnexion</Text>
        </View>
      </TouchableOpacity>
      {/* box 2 end */}
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor="#12222e" />
      {/* header start  */}
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => onShare()}
          style={[styles.headerView, {flexDirection: "row", justifyContent: "space-between"}]}
          >
          <Icon
            style={{ alignSelf: "center", marginHorizontal: 5 }}
            name="share-variant-outline"
            pack="material"
            size={25}
            color={"#fff"}
          />
        </TouchableOpacity>
        <View style={styles.headerView}>
          <Image
            style={{  width: 100, height: 100, resizeMode:'contain', alignSelf: "center" }}
            source={require("../../assets/logo-scan.png")}
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("MesTicketsCinema", { idUser: id })} style={styles.headerView}>
          <Icon
            style={{ alignSelf: "center" }}
            name="ticket-outline"
            pack="material"
            size={25}
            color={"#fff"}
          />
        </TouchableOpacity>
      </View>
      {/* header end  */}
        <View style={{ height: windowHeight }}>
        {home && Home}
        <View style={{}}>
          <View
            style={[
              {
                backgroundColor: null,
                borderRadius: null,
                width: windowWidth,
                height: windowHeight,
              },
            ]}
          >
            {evenement && Evenement}
            {sport && Sport}
            {cinema && Cinema}
            {profil && Profil}
          </View>
        </View>
        
      </View>
      {BottomBar}
            <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
              <VideoPlayer
              video={{ uri: 'https://www.bandes-annonces.fr?preaction=load_iphone_video&v=2693324&f=41867748_iphone.mp4' }}
              // videoWidth={2600}
              // videoHeight={900}
              style={{width: windowWidth, height: heightStotiesVideo}}
              resizeMode= "cover"
              autoplay= {true}
              endThumbnail={{ uri: 'https://imgsrc.cineserie.com/2023/01/andre-dussolier-et-alex-lutz-en-plein-feu-apollo-films-e1674743737946.jpg?ver=1' }}
            />
            <TouchableOpacity 
              onPress={() => navigation.navigate("DetailEvenement")}
              style={{backgroundColor: "#53c6ea", height: 50, width: 150, alignItems: "center", justifyContent: "center", borderRadius: 10, top: "3%"}}>
              <Text style={{color: "#fff", fontWeight: "bold", fontSize: 16}}>Détails</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

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
  // centeredView: {
  //   backgroundColor: "yellow"
  // },
    modalView: {
    backgroundColor: "#12222e",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: windowWidth,
    height: windowHeight
  },

});

export default HomeScreen;
