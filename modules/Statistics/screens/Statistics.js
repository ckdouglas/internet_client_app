import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Block, Text, Card, Icon, Button } from 'galio-framework';
import DatePicker from 'react-native-date-picker';
import ModalSelector from 'react-native-modal-selector';

const Statistics = () => {
  const [selectedDateRange, setSelectedDateRange] = useState("2024-08-10 - 2024-08-11");
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [selectedOption, setSelectedOption] = useState("HOME 7MPBS");

  const data = [
    { key: 1, label: 'HOME 7MPBS' },
    { key: 2, label: 'OFFICE 20MPBS' },
  ];

  const handleDateConfirm = (selectedDate) => {
    setDate(selectedDate);
    setSelectedDateRange(`${selectedDate.toISOString().split('T')[0]} - ${selectedDate.toISOString().split('T')[0]}`);
    setOpenDatePicker(false);
  };

  return (
    <View style={styles.container}>
      {/* Dropdown */}
      <Block style={styles.dropdown}>
        <ModalSelector
          data={data}
          initValue={selectedOption}
          onChange={(option) => setSelectedOption(option.label)}
        >
          <Button color="transparent" style={styles.selectorButton}>
            <Text>{selectedOption}</Text>
            <Icon name="chevron-down" family="feather" size={16} color="gray" />
          </Button>
        </ModalSelector>
      </Block>

      {/* Date Range Input */}
      <Block style={styles.dateRange}>
        <Button
          color="transparent"
          onPress={() => setOpenDatePicker(true)}
          style={styles.dateButton}
        >
          <Text>{selectedDateRange}</Text>
          <Icon name="calendar" family="feather" size={16} color="gray" />
        </Button>
        <DatePicker
          modal
          mode="date"
          open={openDatePicker}
          date={date}
          onConfirm={handleDateConfirm}
          onCancel={() => setOpenDatePicker(false)}
        />
      </Block>

      {/* Total for period card */}
      <Card
        borderless
        style={styles.card}
      >
        <Block row space="between" style={styles.cardHeader}>
          <Block row>
            <Icon name="calendar" family="feather" size={20} color="orange" />
            <Text h6 bold style={styles.cardTitle}>Total for period</Text>
          </Block>
        </Block>
        <Block row space="between" style={styles.statsRow}>
          <Text>Download</Text>
          <Text bold>19.19Gb</Text>
        </Block>
        <Block row space="between" style={styles.statsRow}>
          <Text>Upload</Text>
          <Text bold>710.29Mb</Text>
        </Block>
      </Card>

      {/* Usage by day card */}
      <Card
        borderless
        style={styles.card}
      >
        <Block row space="between" style={styles.cardHeader}>
          <Block row>
            <Icon name="bar-chart-2" family="feather" size={20} color="blue" />
            <Text h6 bold style={styles.cardTitle}>Usage by day</Text>
          </Block>
        </Block>
        <Block>
          <Block row space="between" style={styles.statsRow}>
            <Text>Date</Text>
            <Text>Download</Text>
            <Text>Upload</Text>
          </Block>
          <Block row space="between" style={styles.statsRow}>
            <Text>2024-08-11</Text>
            <Text bold>7.94Gb</Text>
            <Text>322.83Mb</Text>
          </Block>
          <Block row space="between" style={styles.statsRow}>
            <Text>2024-08-10</Text>
            <Text bold>11.25Gb</Text>
            <Text>387.46Mb</Text>
          </Block>
        </Block>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
  },
  header: {
    paddingTop: 40,
    paddingBottom: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerButton: {
    padding: 10,
  },
  headerText: {
    flex: 1,
    textAlign: 'center',
  },
  dropdown: {
    marginBottom: 10,
    width: '100%',
  },
  dateRange: {
    marginBottom: 20,
  },
  card: {
    padding: 20,
    marginBottom: 20,
  },
  statsRow: {
    paddingVertical: 5,
  },
  cardHeader: {
    marginBottom: 10,
  },
  cardTitle: {
    marginLeft: 10,
  },
  selectorButton: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 4,
    width: '100%',
  },
  dateButton: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderColor: 'gray',
    paddingHorizontal: 10,
  },
});

export default Statistics;
