import React, { useState } from 'react';
import { 
  Modal, 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity,
  Platform
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons } from "@expo/vector-icons";

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

interface ScheduleModalProps {
  visible: boolean;
  onClose: () => void;
  onSave?: (time: Date, days: string[]) => void;
  initialTime?: Date;
  initialDays?: string[];
}

const ScheduleModal: React.FC<ScheduleModalProps> = ({ 
  visible, 
  onClose, 
  onSave,
  initialTime,
  initialDays = []
}) => {
  const [time, setTime] = useState(initialTime || new Date());
  const [selectedDays, setSelectedDays] = useState<string[]>(initialDays);
  const [showTimePicker, setShowTimePicker] = useState(Platform.OS === 'ios');

  const toggleDay = (day: string) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter(d => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  const handleTimeChange = (event: any, selectedTime?: Date) => {
    if (Platform.OS === 'android') {
      setShowTimePicker(false);
    }
    
    if (selectedTime) {
      setTime(selectedTime);
    }
  };

  const handleSave = () => {
    if (onSave) {
      onSave(time, selectedDays);
    }
    onClose();
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.header}>
            <Text style={styles.title}>Schedule Spraying</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Ionicons name="close" size={24} color="#7B8DAB" />
            </TouchableOpacity>
          </View>
          
          {/* Time Picker */}
          <View style={styles.timeSection}>
            <Text style={styles.sectionTitle}>Set Time</Text>
            {Platform.OS === 'android' && !showTimePicker ? (
              <TouchableOpacity 
                style={styles.timeDisplay}
                onPress={() => setShowTimePicker(true)}
              >
                <Text style={styles.timeText}>
                  {time.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                </Text>
              </TouchableOpacity>
            ) : (
              <DateTimePicker
                value={time}
                mode="time"
                is24Hour={false}
                display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                onChange={handleTimeChange}
                style={styles.timePicker}
              />
            )}
          </View>
          
          {/* Day Selection */}
          <View style={styles.daySection}>
            <Text style={styles.sectionTitle}>Repeat on</Text>
            <View style={styles.daysRow}>
              {DAYS.map(day => (
                <TouchableOpacity 
                  key={day}
                  style={[
                    styles.dayButton,
                    selectedDays.includes(day) && styles.selectedDay
                  ]}
                  onPress={() => toggleDay(day)}
                >
                  <Text style={[
                    styles.dayText,
                    selectedDays.includes(day) && styles.selectedDayText
                  ]}>
                    {day}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          
          {/* Save Button */}
          <TouchableOpacity 
            style={styles.saveButton}
            onPress={handleSave}
          >
            <Text style={styles.saveText}>Save Schedule</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  closeButton: {
    padding: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 12,
  },
  timeSection: {
    marginBottom: 24,
  },
  timeDisplay: {
    backgroundColor: '#F3F4F6',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  timeText: {
    fontSize: 24,
    fontWeight: '500',
    color: '#1F2937',
  },
  timePicker: {
    height: 120,
    marginTop: 10,
  },
  daySection: {
    marginBottom: 24,
  },
  daysRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  dayButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    margin: 4,
  },
  selectedDay: {
    backgroundColor: '#2AD9D0',
  },
  dayText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#7B8DAB',
  },
  selectedDayText: {
    color: 'white',
  },
  saveButton: {
    backgroundColor: '#4894FE',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  saveText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ScheduleModal;