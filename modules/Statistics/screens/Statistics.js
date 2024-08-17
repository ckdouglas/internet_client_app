import React, { useState } from 'react';
import { View, Modal, StyleSheet } from 'react-native';
import { Block, Text, Card, Icon, Button } from 'galio-framework';
import DatePicker from '../../../components/DatePicker';

// Statistics Component
const Statistics = () => {
  const [startDate, setStartDate] = useState('2024-08-10');
  const [endDate, setEndDate] = useState('2024-08-11');

  return (
    <View style={styles.container}>
      {/* Date Range Input */}
      <DatePicker
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
      />

      {/* Total for period card */}
      <Card borderless style={styles.card}>
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
      <Card borderless style={styles.card}>
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
    paddingTop: 10,
  },
  dateRange: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateButton: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    width: '45%',
    borderColor: 'gray',
    paddingHorizontal: 10,
  },
  card: {
    padding: 20,
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
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  closeButton: {
    marginTop: 10,
  },
});

export default Statistics;
