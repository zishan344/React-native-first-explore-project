import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import Country from "./Country";
export default function AllCountry() {
  const [countrys, setCountry] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((result) => setCountry(result));
  }, []);
  return (
    <View>
      <Text>AllCountry {countrys.length}</Text>
      <ScrollView>
        {countrys.map((country, index) => (
          <Country country={country} key={index}></Country>
        ))}
      </ScrollView>
    </View>
  );
}
