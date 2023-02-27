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
const DetailEvenement = () => {
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

  return (
    <SafeAreaView style={styles.container}>
        <Animated.View 
        style={[styles.header,{height: animateHeaderHeight, backgroundColor: animateHeaderBackgroundColor}]}>
            <ImageBackground source={require("../../assets/imgConcert1.jpeg")} resizeMode="cover" style={styles.image}>
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
                    <Text style={{color: "#fff", fontSize: 18, fontWeight: "bold"}}>Concert de Debordo leekunfa</Text>
                </View>

            </ImageBackground>
        </Animated.View>
        <ScrollView 
        scrollEventThrottle={16}
        onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: AnimatedHeaderValue}}}],
            {useNativeDriver: false}
        )}
        >
            <View style={{margin: 10}}>
                <Text>
                    Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.
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
                        <Text>- L'experience immersive au labo</Text>
                        <Text>- L'experience immersive au labo</Text>
                    </View>
                {/* Standard end  */}
                {/* Vip start */}
                    <View>
                        <View style={{flexDirection: "row"}}>
                            <Icon size={20} color="red" name="ticket-confirmation" pack="material" style={{}}/>
                            <Text style={{marginHorizontal: 10}}>entre VIP</Text>
                        </View>
                        <Text>- L'experience immersive au labo</Text>
                        <Text>- L'experience immersive au labo</Text>
                    </View>
                {/* Vip end  */}
            </View>
            <View style={{margin: 10}}>
                <Text style={{fontWeight: "bold"}}>Info</Text>
                <View style={{flexDirection: "row"}}>
                    <Icon size={20} name="calendar-check-outline" pack="material" style={{}}/>
                    <Text style={{marginHorizontal: 10}}>Date: mardi 20 mars 2023</Text>
                </View>
                <View style={{flexDirection: "row"}}>
                    <Icon size={20} name="clock-time-four-outline" pack="material" style={{}}/>
                    <Text style={{marginHorizontal: 10}}>Heure: 20h00</Text>
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
                <Text style={{fontWeight: "bold"}}>Bercy Paris France</Text>
                <Text>
                    Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.
                </Text>
            </View>
            <View style={{margin: 10}}>
                {/* standart start  */}
                    <View style={{flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 3, borderBottomColor: "#e9e9e9", marginBottom: 20}}>
                        <Text style={{top: 5}}>Ticket standart</Text>
                        <TouchableOpacity style={{backgroundColor: "#53c6ea", height: 30, width: 90, borderRadius: 5, justifyContent: "center"}}>
                            <Text style={{textAlign: "center", color: "#fff", fontWeight: "bold"}}>2000 Fcfa</Text>
                        </TouchableOpacity>
                    </View>
                {/* standart start  */}
                {/* vip start  */}
                    <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                        <Text style={{top: 5}}>Ticket VIP</Text>
                        <TouchableOpacity style={{backgroundColor: "#53c6ea", height: 30, width: 90, borderRadius: 5, justifyContent: "center"}}>
                            <Text style={{textAlign: "center", color: "#fff", fontWeight: "bold"}}>5000 Fcfa</Text>
                        </TouchableOpacity>
                    </View>
                {/* vip start  */}
            </View>
        </ScrollView>
        <TouchableOpacity style={{backgroundColor: "#53c6ea", height: 50, justifyContent: "center"}}>
            <Text style={{textAlign: "center", fontSize: 18, color: "#fff", fontWeight: "bold"}}>ACHETER - 5000 Fcfa</Text>
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
