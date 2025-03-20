import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LineChart } from "react-native-chart-kit";

const TemperatureChart = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Temperature Chart (24 hours)</Text>
      <LineChart
        data={{
          labels: ["00:00", "03:00", "06:00", "09:00", "12:00", "15:00", "18:00"],
          datasets: [{ data: [25, 28, 30, 35, 32, 31, 33] }],
        }}
        width={320}
        height={200}
        chartConfig={chartConfig}
        bezier
      />
    </View>
  );
};

const chartConfig = {
  backgroundGradientFrom: "#fff",
  backgroundGradientTo: "#fff",
  color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
  decimalPlaces: 0,
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    width: 340,
    alignItems: "center",
    marginVertical: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
});

export default TemperatureChart;