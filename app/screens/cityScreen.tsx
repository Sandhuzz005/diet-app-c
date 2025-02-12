

import React, { useState } from "react";
import { View,TouchableOpacity, Text, StyleSheet, Image, Button, Linking } from "react-native";
// import HomeScreen from "./homeScreen"

interface CityScreenProps {
  city: string;
  url: string;
  color: string;
  size: number;
}


const CityScreen: React.FC<CityScreenProps> = ({ city, url, color, size }) => {
  const [selectedCity, setSelectedCity] = useState<"Calgary" | "Edmonton">("Calgary");

  // City data mapping
  const cityData = {
    Calgary: {
      image: require("../../assets/calgary.jpg"),
      url: "https://www.calgary.ca/home.html",
    },
    Edmonton: {
      image: require("../../assets/edmonton.jpg"),
      url: "https://www.edmonton.ca/",
    },
  };


  return (
    <View style={styles.container}>
      <Image source={cityData[selectedCity].image} style={styles.image} />
     <Text style={styles.link}><Button title={`Go to ${selectedCity} Page`} onPress={() => Linking.openURL(cityData[selectedCity].url)} />
     </Text>
      
<TouchableOpacity
    style={[styles.tabButton, selectedCity === "Calgary" && styles.selectedTab]}
    onPress={() => setSelectedCity("Calgary")}
  >
    <Text style={styles.tabText}>Calgary</Text>
  </TouchableOpacity>

  <TouchableOpacity
    style={[styles.tabButton, selectedCity === "Edmonton" && styles.selectedTab]}
    onPress={() => setSelectedCity("Edmonton")}
  >
    <Text style={styles.tabText}>Edmonton</Text>
  </TouchableOpacity>
    </View>
  );
};




const styles = StyleSheet.create({
  container: {
    // flex: 1,
    
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  image: {
    
    width: 400,
    height: 300,
    marginBottom: 10,
    borderRadius: 10,
  },
 
  tabButton: {
    marginLeft:50,
    marginTop:15,
    paddingVertical: 12,
    paddingHorizontal: 20,
    justifyContent:"space-between",
    borderRadius: 10,
    backgroundColor: "#ddd",
    flexDirection:"row",
    
  },
  selectedTab: {
    backgroundColor: "tomato",
  },
  tabText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  link:{
  
    marginBottom:120,
    paddingTop:120,
  },
});

export default CityScreen;
