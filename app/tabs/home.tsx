import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from "react-native"
import { StatusBar } from "expo-status-bar"
import { Ionicons } from "@expo/vector-icons"

export default function HomeScreen() {
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
              <Ionicons name="happy-outline" size={24} color="#1a237e" />
            </View>
          </TouchableOpacity>
        </View>

        {/* Location Card */}
        <TouchableOpacity style={styles.locationCard}>
          <View style={styles.locationInfo}>
            <Ionicons name="home" size={24} color="white" />
            <View style={styles.locationTextContainer}>
              <Text style={styles.locationTitle}>Ho Chi Minh city</Text>
              <Text style={styles.locationAddress}>288 Ly Thuong Kiet</Text>
            </View>
          </View>
          <View style={styles.locationDetails}>
            <View style={styles.dateTimeContainer}>
              <Ionicons name="calendar-outline" size={16} color="white" />
              <Text style={styles.dateTimeText}>Sunday, 12 June</Text>
            </View>
            <View style={styles.dateTimeContainer}>
              <Ionicons name="time-outline" size={16} color="white" />
              <Text style={styles.dateTimeText}>23:58</Text>
            </View>
          </View>
          <Ionicons name="chevron-forward" size={24} color="white" style={styles.chevron} />
        </TouchableOpacity>

        {/* Category Buttons */}
        <View style={styles.categoryContainer}>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>Temperature</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>Humidity</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>Brightness</Text>
          </TouchableOpacity>
        </View>

        {/* Control Panel */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Control panel</Text>

          {/* Temperature */}
          <View style={styles.dataContainer}>
            <View style={styles.dataHeader}>
              <Text style={styles.dataTitle}>Temperature</Text>
              <TouchableOpacity>
                <Ionicons name="information-circle-outline" size={20} color="#ccc" />
              </TouchableOpacity>
            </View>
            <View style={styles.dataContent}>
              <Text style={styles.dataValue}>28 ° C</Text>
              <Text style={styles.dataTime}>
                <Ionicons name="time-outline" size={14} color="#FFA500" />
                {" 12 phút vài giây trước"}
              </Text>
            </View>
          </View>

          {/* Humidity */}
          <View style={styles.dataContainer}>
            <View style={styles.dataHeader}>
              <Text style={styles.dataTitle}>Humidity</Text>
              <TouchableOpacity>
                <Ionicons name="information-circle-outline" size={20} color="#ccc" />
              </TouchableOpacity>
            </View>
            <View style={styles.dataContent}>
              <Text style={styles.dataValue}>65%</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
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
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: "hidden",
  },
  profileImage: {
    width: "100%",
    height: "100%",
    backgroundColor: "#f5f5f5",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#FFA500",
  },
  locationCard: {
    backgroundColor: "#1a237e",
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    position: "relative",
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
    paddingRight: 30,
  },
  dateTimeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  dateTimeText: {
    color: "white",
    fontSize: 12,
    marginLeft: 5,
    opacity: 0.8,
  },
  chevron: {
    position: "absolute",
    right: 15,
    top: "50%",
    marginTop: -12,
  },
  categoryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  categoryButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: "#f5f5f5",
  },
  categoryText: {
    color: "#666",
    fontSize: 14,
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
    marginBottom: 20,
  },
  dataHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  dataTitle: {
    fontSize: 16,
    color: "#666",
  },
  dataContent: {
    marginBottom: 10,
  },
  dataValue: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
  },
  dataTime: {
    fontSize: 12,
    color: "#FFA500",
    marginTop: 5,
  },
})

