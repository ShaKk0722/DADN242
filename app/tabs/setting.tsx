import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import WeeklyChart from "../../components/layouts/WeeklyChart";
import CityCard from "../../components/layouts/CityCard";
import LineChartCard from "../../components/layouts/LineChart";
import SettingTab from "../../components/layouts/TabSetting";
import SettingCard from "../../components/layouts/CardSetting";
import HumidityGauge from "../../components/layouts/HumidityGauge";

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
          <LineChartCard />
          <CityCard />
          <WeeklyChart />
        </ScrollView>
      )}

      {selectedTab === "Humidity" && (
        <ScrollView contentContainerStyle={styles.content}>
          <HumidityGauge humidity={10}/>
          <WeeklyChart title="Weekly Average Humidity" datasets={[{ data: [36, 32, 31, 36, 25, 30, 33] }]}/>
        </ScrollView>
      )}

        {selectedTab === "Brightness" && (
          <ScrollView contentContainerStyle={styles.content}>
            <LineChartCard title="Light intensity Chart (12 hours)"/>
            <CityCard valueText="100 lux"/>
            <WeeklyChart title="Weekly Average Light Intensity" datasets={[{ data: [36, 32, 31, 36, 25, 30, 33] }]}/>
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
