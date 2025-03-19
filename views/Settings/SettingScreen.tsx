import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import SettingTab from "./SettingTab";
import SettingCard from "./SettingCard";
import TemperatureChart from "./TemperatureChart";
import TemperatureCard from "./TemperatureCard";
import WeeklyChart from "./WeeklyChart";

const SettingScreen = () => {
  const [selectedTab, setSelectedTab] = useState("Setting");

  return (
    <View style={styles.container}>
      {/* Tabs */}
      <SettingTab onSelect={setSelectedTab} />

      {selectedTab === "Setting" && (
        <ScrollView contentContainerStyle={styles.content}>
          <SettingCard title="Manual Control" description="Turn on/off without conditions." />
          <SettingCard title="Scheduler Spraying" description="Based on preset scheduler." buttonText="Schedule Details" />
          <SettingCard title="Environment Auto" description="Based on temperature, humidity, light." buttonText="Set Conditions" />
          <SettingCard title="Artificial Intelligence" description="Based on AI Model." />
        </ScrollView>
      )}

      {selectedTab === "Temperature" && (
          <ScrollView contentContainerStyle={styles.content}>
            <TemperatureChart />
            <TemperatureCard />
            <WeeklyChart />
          </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  content: {
    marginTop: -2,
    paddingBottom: 10,
    alignItems: "center",
  },
});

export default SettingScreen;