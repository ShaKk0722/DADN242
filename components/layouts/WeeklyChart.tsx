import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { BarChart } from "react-native-chart-kit";

const WeeklyChart = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Weekly Average Temperature</Text>
      <BarChart
        data={{
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          datasets: [{ data: [30, 32, 35, 25, 28, 30, 33] }],
        }}
        width={320}
        height={200}
        chartConfig={chartConfig}
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

export default WeeklyChart;