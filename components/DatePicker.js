import React, { useState } from 'react';
import { View, Modal, StyleSheet } from 'react-native';
import { Block, Text, Card, Icon, Button } from 'galio-framework';
import { Calendar } from 'react-native-calendars';

// AirbnbStyleDatePicker Component
const DatePicker = ({ startDate, setStartDate, endDate, setEndDate }) => {
    const [openDatePicker, setOpenDatePicker] = useState(false);

    const handleDayPress = (day) => {
        if (!startDate || (startDate && endDate)) {
            setStartDate(day.dateString);
            setEndDate(null);
        } else {
            if (new Date(day.dateString) > new Date(startDate)) {
                setEndDate(day.dateString);
                setOpenDatePicker(false);
            } else {
                setStartDate(day.dateString);
            }
        }
    };

    const renderSelectedDates = () => {
        const markedDates = {};
        if (startDate) {
            markedDates[startDate] = {
                startingDay: true,
                color: '#50cebb',
                textColor: 'white',
            };
        }
        if (endDate) {
            markedDates[endDate] = {
                endingDay: true,
                color: '#50cebb',
                textColor: 'white',
            };
        }
        if (startDate && endDate) {
            let current = new Date(startDate);
            while (current <= new Date(endDate)) {
                const dateString = current.toISOString().split('T')[0];
                markedDates[dateString] = {
                    color: '#70d7c7',
                    textColor: 'white',
                };
                current.setDate(current.getDate() + 1);
            }
        }
        return markedDates;
    };

    return (
        <View>
            <Block style={styles.dateRange}>
                <Button
                    color="transparent"
                    onPress={() => setOpenDatePicker(true)}
                    style={styles.dateButton}
                >

                    <Text>
                        {startDate ? `From: ${startDate}` : 'Select Start Date'}
                    </Text>
                    <Icon name="calendar" family="feather" size={16} color="gray" />
                </Button>

                <Button
                    color="transparent"
                    onPress={() => setOpenDatePicker(true)}
                    style={styles.dateButton}
                >
                    <Text>{endDate ? `To: ${endDate}` : 'Select End Date'}</Text>
                    <Icon name="calendar" family="feather" size={16} color="gray" />
                </Button>
            </Block>

            <Modal
                visible={openDatePicker}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setOpenDatePicker(false)}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.modalContent}>
                        <Calendar
                            markingType={'period'}
                            markedDates={renderSelectedDates()}
                            onDayPress={handleDayPress}
                        />
                        <Button
                            color="green"
                            onPress={() => setOpenDatePicker(false)}
                            style={styles.closeButton}
                        >
                            <Text>Close</Text>
                        </Button>
                    </View>
                </View>
            </Modal>
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

export default DatePicker;