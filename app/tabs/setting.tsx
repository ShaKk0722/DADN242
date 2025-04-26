import React, { useState } from "react";
import { View, ScrollView, StyleSheet, TouchableOpacity, Text } from "react-native";
import WeeklyChart from "../../components/layouts/WeeklyChart";
import CityCard from "../../components/layouts/CityCard";
import LineChartCard from "../../components/layouts/LineChart";
import SettingTab from "../../components/layouts/TabSetting";
import SettingCard from "../../components/layouts/CardSetting";
import HumidityGauge from "../../components/layouts/HumidityGauge";
import ScheduleModal from "../../components/modals/ScheduleModal";
import ConditionsModal from "../../components/modals/ConditionalModal";
import SettingCardDefault from "../../components/layouts/CardSettingDefault";

export default function SettingScreen() {
  const [selectedTab, setSelectedTab] = useState("Setting");
  const [scheduleModalVisible, setScheduleModalVisible] = useState(false);
  const [scheduleTime, setScheduleTime] = useState<Date | null>(null);
  const [scheduleDays, setScheduleDays] = useState<string[]>([]);
  const [scheduleEnabled, setScheduleEnabled] = useState(false);

  const [conditionsModalVisible, setConditionsModalVisible] = useState(false);
  const [conditions, setConditions] = useState<{
    temperature?: number;
    humidity?: number;
    brightness?: number;
  }>({});
  const [conditionsEnabled, setConditionsEnabled] = useState(false);

  const handleScheduleDetails = () => {
    setScheduleModalVisible(true);
  };

  const handleSetConditions = () => {
    setConditionsModalVisible(true);
  };

  const handleSaveSchedule = (time: Date, days: string[]) => {
    setScheduleTime(time);
    setScheduleDays(days);
    // Ở đây bạn có thể lưu lịch trình vào state hoặc gửi đến API
  };

  const handleSaveConditions = (newConditions: {
    temperature?: number;
    humidity?: number;
    brightness?: number;
  }) => {
    setConditions(newConditions);
    // Ở đây bạn có thể lưu điều kiện vào state hoặc gửi đến API
  };

  const handleToggleSchedule = (value: boolean) => {
    setScheduleEnabled(value);
  };

  const handleToggleConditions = (value: boolean) => {
    setConditionsEnabled(value);
  };

  return (
    <View style={styles.container}>
      {/* Tabs */}
      <SettingTab onSelect={setSelectedTab} />

      {selectedTab === "Setting" && (
        <ScrollView contentContainerStyle={styles.content}>
          <SettingCardDefault title="Manual Control" description="Turn on/off without conditions." />
          <SettingCard 
            title="Scheduler Spraying" 
            description="Based on preset scheduler." 
            buttonText="Schedule Details" 
            onPressButton={handleScheduleDetails}
            scheduleInfo={scheduleTime ? { time: scheduleTime, days: scheduleDays } : undefined}
            isEnabled={scheduleEnabled}
            onToggle={handleToggleSchedule}
          />
          <SettingCard 
            title="Environment Auto" 
            description="Based on temperature, humidity, light." 
            buttonText="Set Conditions" 
            onPressButton={handleSetConditions}
            conditions={conditions}
            isEnabled={conditionsEnabled}
            onToggle={handleToggleConditions}
          />
          <SettingCardDefault title="Artificial Intelligence" description="Based on AI Model." />
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

      {/* Modal lịch trình */}
      <ScheduleModal
        visible={scheduleModalVisible}
        onClose={() => setScheduleModalVisible(false)}
        onSave={handleSaveSchedule}
        initialTime={scheduleTime || undefined}
        initialDays={scheduleDays}
      />

      {/* Modal điều kiện */}
      <ConditionsModal
        visible={conditionsModalVisible}
        onClose={() => setConditionsModalVisible(false)}
        onSave={handleSaveConditions}
        initialConditions={conditions}
      />
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