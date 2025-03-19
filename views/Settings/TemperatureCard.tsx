import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TemperatureCard = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.cityText}>Ho Chi Minh City</Text>
      <Text style={styles.subText}>Current Time</Text>
      <Text style={styles.temperatureText}>28°C</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    width: 340,
    alignItems: "center",
    marginVertical: 10,
  },
  cityText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  subText: {
    fontSize: 14,
    color: "#8696BB",
  },
  temperatureText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
  },
});

export default TemperatureCard;