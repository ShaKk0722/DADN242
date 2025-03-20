import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const SettingTab = ({ onSelect }) => {
  const [selectedTab, setSelectedTab] = useState("Setting");

  const handlePress = (tab: string) => {
    setSelectedTab(tab);
    onSelect(tab);
  };

  return (
    <View style={styles.container}>
      {["Brightness", "Setting", "Temperature"].map((tab) => (
        <TouchableOpacity
          key={tab}
          style={[styles.tab, selectedTab === tab && styles.selectedTab]}
          onPress={() => handlePress(tab)}
        >
          <Text style={[styles.text, selectedTab === tab && styles.selectedText]}>{tab}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 15,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#FAFAFA",
    borderRadius: 20,
    marginHorizontal: 5,
  },
  selectedTab: {
    backgroundColor: "#63B4FF1A",
  },
  text: {
    fontSize: 18,
    color: "#8696BB",
  },
  selectedText: {
    color: "#4894FE",
    fontWeight: 600,
  },
});

export default SettingTab;