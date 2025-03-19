import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import WeeklyChart from "../../components/layouts/WeeklyChart";
import TemperatureCard from "../../components/layouts/TemperatureCard";
import TemperatureChart from "../../components/layouts/TemperatureChart";
import SettingTab from "../../components/layouts/TabSetting";
import SettingCard from "../../components/layouts/CardSetting";

export default function SettingScreen() {
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    marginTop: 40,

  },
  content: {
    marginTop: 20,
    paddingBottom: 10,
    alignItems: "center",
    
  },
});
