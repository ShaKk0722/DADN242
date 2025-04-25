import React, { useState } from "react";
import { View, Text, Switch, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface SettingCardProps {
  title: string;
  description: string;
  buttonText?: string;
  onPressButton?: () => void;
  conditions?: {
    temperature?: number;
    humidity?: number;
    brightness?: number;
  };
  scheduleInfo?: {
    time?: Date;
    days?: string[];
  };
  isEnabled?: boolean;
  onToggle?: (value: boolean) => void;
}

const SettingCard: React.FC<SettingCardProps> = ({ 
  title, 
  description, 
  buttonText, 
  onPressButton,
  conditions,
  scheduleInfo,
  isEnabled = false,
  onToggle
}) => {
  // Hiển thị thông tin điều kiện
  const renderConditionsInfo = () => {
    if (!conditions) {
      return null;
    }

    const conditionItems = [];

    if (conditions.temperature !== undefined) {
      conditionItems.push(
        <View key="temp" style={styles.conditionItem}>
          <Ionicons name="thermometer-outline" size={16} color="#FF6B6B" />
          <Text style={styles.conditionText}>
            Temp: {conditions.temperature}°C
          </Text>
        </View>
      );
    }

    if (conditions.humidity !== undefined) {
      conditionItems.push(
        <View key="humidity" style={styles.conditionItem}>
          <Ionicons name="water-outline" size={16} color="#4894FE" />
          <Text style={styles.conditionText}>
            Humidity: {conditions.humidity}%
          </Text>
        </View>
      );
    }

    if (conditions.brightness !== undefined) {
      conditionItems.push(
        <View key="brightness" style={styles.conditionItem}>
          <Ionicons name="sunny-outline" size={16} color="#FFB946" />
          <Text style={styles.conditionText}>
            Light: {conditions.brightness} lux
          </Text>
        </View>
      );
    }

    if (conditionItems.length === 0) {
      return null;
    }

    return (
      <View style={styles.infoBox}>
        {conditionItems}
      </View>
    );
  };

  // Hiển thị thông tin lịch trình
  const renderScheduleInfo = () => {
    if (!scheduleInfo || !scheduleInfo.time || !scheduleInfo.days || scheduleInfo.days.length === 0) {
      return null;
    }

    const formatTime = (date: Date) => {
      return date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    };

    const formatDays = (days: string[]) => {
      if (days.length === 0) return "";
      if (days.length === 7) return "every day";
      
      return days.map(day => `every ${day.toLowerCase()}`).join(", ");
    };

    return (
      <View style={styles.infoBox}>
        <View style={styles.conditionItem}>
          <Ionicons name="time-outline" size={16} color="#4894FE" />
          <Text style={styles.conditionText}>
            {formatTime(scheduleInfo.time)}
          </Text>
        </View>
        <View style={styles.conditionItem}>
          <Ionicons name="calendar-outline" size={16} color="#4CAF50" />
          <Text style={styles.conditionText}>
            {formatDays(scheduleInfo.days)}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.card}>
      {/* Icon + Title */}
      <View style={styles.header}>
        <View style={styles.icon} />
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>

      {/* Separator */}
      <View style={styles.separator} />

      {/* Status + Toggle */}
      <View style={styles.statusRow}>
        <View style={styles.status}>
          <Ionicons name="calendar-outline" size={18} color="#7B8DAB" />
          <Text style={styles.statusText}> Status: <Text style={{ fontWeight: "bold",color: isEnabled ? "#4CAF50" : "#F44336", fontSize: 16 }}>{isEnabled ? "On" : "Off"}</Text></Text>
        </View>
        <Switch
          value={isEnabled}
          onValueChange={onToggle || (() => {})}
          trackColor={{ false: "#E5E7EB", true: "#2AD9D0" }}
          thumbColor="#fff"
        />
      </View>

      {/* Render Schedule Info if available */}
      {title === "Scheduler Spraying" && renderScheduleInfo()}

      {/* Render Conditions Info if available */}
      {title === "Environment Auto" && renderConditionsInfo()}

      {/* Button */}
      {buttonText && (
        <>
          <TouchableOpacity 
            style={styles.button}
            onPress={onPressButton}
          >
            <Text style={styles.buttonText}>{buttonText}</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    marginVertical: 5,
    marginLeft: 10,
    marginRight: 10,
    width: "96%"
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#E4E7EB",
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1F2937",
  },
  description: {
    fontSize: 16,
    color: "#7B8DAB",
  },
  separator: {
    height: 0.5,
    backgroundColor: "#E5E7EB",
    marginVertical: 10,
    marginBottom: 15
  },
  statusRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  status: {
    flexDirection: "row",
    alignItems: "center",
    fontSize: 16,
  },
  statusText: {
    fontSize: 14,
    marginLeft: 5,
    color: "#7B8DAB",
  },
  infoBox: {
    marginTop: 12,
    backgroundColor: "#F9F9F9",
    padding: 10,
    borderRadius: 8,
  },
  conditionItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  conditionText: {
    marginLeft: 8,
    color: "#1F2937",
    fontSize: 14,
  },
  button: {
    marginTop: 15,
    backgroundColor: "#63B4FF1A",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#4894FE",
    fontWeight: "600",
  },
});

export default SettingCard;