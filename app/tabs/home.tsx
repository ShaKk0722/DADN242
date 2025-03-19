import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { useState, useEffect } from "react";

export default function HomeScreen() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="auto" />
      <ScrollView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hello,</Text>
            <Text style={styles.userName}>Hi Duy</Text>
          </View>
          <TouchableOpacity style={styles.profileButton}>
            <View style={styles.profileImage}>
              <Ionicons name="happy-outline" size={28} color="white" />
            </View>
          </TouchableOpacity>
        </View>

        {/* Location Card */}
        <TouchableOpacity style={styles.locationCard}>
          <View style={styles.locationInfo}>
            <Ionicons name="home" size={28} color="white" />
            <View style={styles.locationTextContainer}>
              <Text style={styles.locationTitle}>Ho Chi Minh City</Text>
              <Text style={styles.locationAddress}>268 Ly Thuong Kiet</Text>
            </View>
          </View>
          <View style={styles.locationDetails}>
            <View style={styles.dateTimeContainer}>
              <Ionicons name="calendar-outline" size={16} color="white" />
              <Text style={styles.dateTimeText}>{currentTime.toLocaleDateString()}</Text>
            </View>
            <View style={styles.dateTimeContainer}>
              <Ionicons name="time-outline" size={16} color="white" />
              <Text style={styles.dateTimeText}>{currentTime.toLocaleTimeString()}</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* Category Icons */}
        <View style={styles.categoryContainer}>
          <View style={styles.categoryItem}>
            <Ionicons name="water-outline" size={28} color="#1E88E5" />
            <Text style={styles.categoryLabel}>Humidity</Text>
          </View>
          <View style={styles.categoryItem}>
            <Ionicons name="sunny-outline" size={28} color="#FFA726" />
            <Text style={styles.categoryLabel}>Brightness</Text>
          </View>
          <View style={styles.categoryItem}>
            <Ionicons name="thermometer-outline" size={28} color="#E53935" />
            <Text style={styles.categoryLabel}>Temperature</Text>
          </View>
        </View>

        {/* Control Panel */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Control panel</Text>

          {/* Temperature */}
          <View style={styles.dataContainer}>
            <Text style={styles.dataTitle}>Temperature</Text>
            <Text style={styles.dataValue}>28 °C</Text>
            <Text style={styles.dataNote}>+2 độ so với hôm qua</Text>
          </View>

          {/* Humidity */}
          <View style={styles.dataContainer}>
            <Text style={styles.dataTitle}>Humidity</Text>
            <Text style={styles.dataValue}>65%</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  greeting: {
    fontSize: 16,
    color: "#666",
  },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  profileButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#FFA500",
    alignItems: "center",
    justifyContent: "center",
  },
  locationCard: {
    backgroundColor: "#1a237e",
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
  },
  locationInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  locationTextContainer: {
    marginLeft: 15,
  },
  locationTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  locationAddress: {
    color: "white",
    fontSize: 14,
    opacity: 0.8,
  },
  locationDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dateTimeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  dateTimeText: {
    color: "white",
    fontSize: 12,
    marginLeft: 5,
  },
  categoryContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  categoryItem: {
    alignItems: "center",
  },
  categoryLabel: {
    marginTop: 5,
    fontSize: 14,
    color: "#333",
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
  },
  dataContainer: {
    marginBottom: 5,
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 10,
  },
  dataTitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 5,
  },
  dataValue: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
  },
  dataNote: {
    fontSize: 14,
    color: "#FFA500",
    marginTop: 5,
  },
});
