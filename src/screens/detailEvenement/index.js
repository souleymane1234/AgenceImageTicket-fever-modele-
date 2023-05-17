import React, {useState, useEffect, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Dimensions,
  Animated,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity
} from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import OrientationLoadingOverlay from "react-native-orientation-loading-overlay";
const DetailEvenement = ({route, navigation}) => {
    const { DataEvent, idEvent, idUser } = route.params;
    const [Prix, setPrix] = useState("0");
    const [Spinner, setSpinner] = React.useState(false);
    console.log("first", DataEvent)
  const dummyData = [
    'Item 1', 'Item 2', 'Item 1', 'Item 1', 'Item 1', 'Item 1', 'Item 1', 'Item 1', 'Item 1',
    'Item 1', 'Item 1', 'Item 1', 'Item 1', 'Item 1', 'Item 1', 'Item 1', 'Item 1', 'Item 1',
  ];
let AnimatedHeaderValue = new Animated.Value(0);
const Header_Max_Height = 300;
const Header_Min_Height = 50;

const animateHeaderBackgroundColor = AnimatedHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: ['blue', 'red'],
    extrapolate: 'clamp'
});

const animateHeaderHeight = AnimatedHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: [Header_Max_Height, Header_Min_Height],
    extrapolate: 'clamp'
});

// creer ticket 

  const sendData = () => {
      var details = {
        nom: DataEvent.nom,
        image: DataEvent.image,
        nomLieu: DataEvent.nomLieu,
        date: DataEvent.date,
        heure: DataEvent.heure,
        description: DataEvent.description,
        descriptionLieu: DataEvent.descriptionLieu,
        prixStandart: Prix,
        usersId: idUser,
        eventId: idEvent,
      };

      var formBody = [];
      for (var property in details) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + "=" + encodedValue);
      }
      formBody = formBody.join("&");
      setSpinner(!Spinner);
      fetch("https://pleasant-shirt-bass.cyclic.app/api/createTicket", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: formBody,
      })
  .then(response => response.json())
  .then((result) => {
          setSpinner(!Spinner);
          if (result) {
            setSpinner(false);
            console.log('mon tik',result)
            alert("Votre Achat a été effectué avec success");
            navigation.navigate("MesTicketsCinema", {
                    idUser: idUser
                  })
            setSpinner(false);
          } else {
            setSpinner(false);
            alert("une erreur s'est produite ors de l'achat");
          }
          console.log("Patience");
        })
  .catch(error => {
    setSpinner(false);
    console.log('error', error)
  });
  }

    const Loader = (
    <OrientationLoadingOverlay
      visible={Spinner}
      color="white"
      indicatorSize="large"
      messageFontSize={10}
      message="Connexion en cours"
    />
  );


  return (
    <SafeAreaView style={styles.container}>
      {Loader}
        <ScrollView 
        // scrollEventThrottle={16}
        // onScroll={Animated.event(
        //     [{nativeEvent: {contentOffset: {y: AnimatedHeaderValue}}}],
        //     {useNativeDriver: false}
        // )}
        >
            <Animated.View style={[styles.header,{height: animateHeaderHeight, backgroundColor: animateHeaderBackgroundColor}]}>
                <ImageBackground source={{ uri: DataEvent.image}} resizeMode="cover" style={styles.image}>
                    <View style={{margin: 10}}>
                    <Icon
                        size={30}
                        color="#fff"
                        name="arrow-left"
                        pack="material"
                        style={{}}
                        />
                    </View>
                    <View style={{alignSelf: "center", justifyContent: "flex-end", height: "70%"}}>
                        <Text style={{color: "#fff", fontSize: 18, fontWeight: "bold"}}>{DataEvent.nom}</Text>
                    </View>

                </ImageBackground>
            </Animated.View>
            <View style={{margin: 10}}>
                <Text>
                    {DataEvent.description}
                </Text>
            </View>
            {/* billet entre  */}
            <View style={{margin: 10}}>
                <Text>Billet d'entree pour le concert de Debordo</Text>
                {/* Standard start */}
                    <View style={{marginBottom: 20}}>
                        <View style={{flexDirection: "row"}}>
                            <Icon size={20} color="red" name="ticket-confirmation" pack="material" style={{}}/>
                            <Text style={{marginHorizontal: 10}}>entre standart</Text>
                        </View>
                        <Text>- Vous avez droit a une place au concert</Text>
                    </View>
                {/* Standard end  */}
                {/* Vip start */}
                    <View>
                        <View style={{flexDirection: "row"}}>
                            <Icon size={20} color="red" name="ticket-confirmation" pack="material" style={{}}/>
                            <Text style={{marginHorizontal: 10}}>entre VIP</Text>
                        </View>
                        <Text>- Vous avez droit a une place au concert dans les premiers rang</Text>
                    </View>
                {/* Vip end  */}
            </View>
            <View style={{margin: 10}}>
                <Text style={{fontWeight: "bold"}}>Info</Text>
                <View style={{flexDirection: "row"}}>
                    <Icon size={20} name="calendar-check-outline" pack="material" style={{}}/>
                    <Text style={{marginHorizontal: 10}}>{DataEvent.date}</Text>
                </View>
                <View style={{flexDirection: "row"}}>
                    <Icon size={20} name="clock-time-four-outline" pack="material" style={{}}/>
                    <Text style={{marginHorizontal: 10}}>Heure: {DataEvent.heure}</Text>
                </View>
            </View>
            <View style={{flexDirection: "row", margin: 10, backgroundColor: "#e9e9e9", height: 50, justifyContent: "center", alignItems: "center", borderRadius: 5}}>
                <Icon size={20} name="bank" pack="material" style={{}}/>
                <Text style={{marginHorizontal: 10}}>QUELQUES MOTS SUR LE LIEU</Text>
            </View>
            <View style={{marginBottom: 20}}>
                <Image
                    style={{ borderRadius: 10, width: "90%", height: 150, resizeMode:'contain', alignSelf: "center" }}
                    source={require("../../assets/cine.jpg")}
                />
            </View>
            <View style={{margin: 10}}>
                <Text style={{fontWeight: "bold"}}>{DataEvent.nomLieu}</Text>
                <Text>
                    {DataEvent.descriptionLieu}
                </Text>
            </View>
            <View style={{margin: 10}}>
                {/* standart start  */}
                    <View style={{flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 3, borderBottomColor: "#e9e9e9", marginBottom: 20}}>
                        <Text style={{top: 5}}>Ticket standart</Text>
                        <TouchableOpacity onPress={() => setPrix(DataEvent.prixStandart)} style={{backgroundColor: "#53c6ea", height: 30, width: 90, borderRadius: 5, justifyContent: "center"}}>
                            <Text style={{textAlign: "center", color: "#fff", fontWeight: "bold"}}>{DataEvent.prixStandart} Fcfa</Text>
                        </TouchableOpacity>
                    </View>
                {/* standart start  */}
                {/* vip start  */}
                    <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                        <Text style={{top: 5}}>Ticket VIP</Text>
                        <TouchableOpacity onPress={() => setPrix(DataEvent.prixVip)} style={{backgroundColor: "#53c6ea", height: 30, width: 90, borderRadius: 5, justifyContent: "center"}}>
                            <Text style={{textAlign: "center", color: "#fff", fontWeight: "bold"}}>{DataEvent.prixVip} Fcfa</Text>
                        </TouchableOpacity>
                    </View>
                {/* vip start  */}
            </View>
        </ScrollView>
        <TouchableOpacity onPress={() => sendData()} style={{backgroundColor: "#53c6ea", height: 50, justifyContent: "center"}}>
            <Text style={{textAlign: "center", fontSize: 18, color: "#fff", fontWeight: "bold"}}>ACHETER - {Prix} Fcfa</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    top: 0,
    alignItems: 'center',
    justifyContent: 'center',
    right: 0,
  },
  label: {fontSize: 16, color: '#222'},
  tab: {elevation: 0, shadowOpacity: 0, backgroundColor: '#FFCC80'},
  indicator: {backgroundColor: '#222'},
  container: {
    flex: 1
  },
  textStyle: {
    textAlign: "center",
    color: "#000",
    fontSize: 16,
    padding: 20
  },
  headerText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center"
  },
    image: {
    flex: 1,
    width: "100%"
  },
});

export default DetailEvenement;
