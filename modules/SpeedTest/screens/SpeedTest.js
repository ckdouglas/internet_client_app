import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Animated } from 'react-native';
import { CircularProgress } from 'react-native-svg-circular-progress';

const { width } = Dimensions.get('window');

const SpeedTestScreen = () => {
    const [downloadSpeed, setDownloadSpeed] = useState(0);
    const [uploadSpeed, setUploadSpeed] = useState(0);
    const [ping, setPing] = useState(0);

    const animatedValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        // Fetch data from a public speed test API (mock endpoint)
        const fetchSpeedTestData = async () => {
            try {
                const response = await fetch('https://api.shrtco.de/v2/shorten?url=https://www.speedtest.net/'); // Replace with a real open-source API endpoint
                const data = await response.json();

                // Mock data for demonstration
                const mockData = {
                    downloadSpeed: 42.36,
                    uploadSpeed: 36.41,
                    ping: 2.1,
                };

                setDownloadSpeed(mockData.downloadSpeed);
                setUploadSpeed(mockData.uploadSpeed);
                setPing(mockData.ping);

                // Start animation
                Animated.timing(animatedValue, {
                    toValue: (mockData.downloadSpeed / 100) * 100,
                    duration: 1000,
                    useNativeDriver: false,
                }).start();
            } catch (error) {
                console.error('Error fetching speed test data:', error);
            }
        };

        fetchSpeedTestData();
    }, []);

    const animatedFill = animatedValue.interpolate({
        inputRange: [0, 100],
        outputRange: [0, 100],
    });

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Internet Speed Test</Text>

            {/* Speedometer */}
            <View style={styles.speedometer}>
                <CircularProgress
                    size={200}
                    width={20}
                    fill={animatedFill}
                    tintColor="#00e0ff"
                    backgroundColor="#3d5875"
                >
                    {() => (
                        <View style={styles.speedTextContainer}>
                            <Text style={styles.speedText}>{downloadSpeed.toFixed(2)}</Text>
                            <Text style={styles.unitText}>Mbps</Text>
                        </View>
                    )}
                </CircularProgress>
            </View>

            {/* Button */}
            <TouchableOpacity style={styles.button} onPress={() => { /* Trigger another fetch if needed */ }}>
                <Text style={styles.buttonText}>Refresh</Text>
            </TouchableOpacity>

            {/* Stats */}
            <View style={styles.statsContainer}>
                <View style={styles.stat}>
                    <Text style={styles.statValue}>{downloadSpeed.toFixed(2)}</Text>
                    <Text style={styles.statLabel}>download</Text>
                </View>
                <View style={styles.stat}>
                    <Text style={styles.statValue}>{uploadSpeed.toFixed(2)}</Text>
                    <Text style={styles.statLabel}>upload</Text>
                </View>
                <View style={styles.stat}>
                    <Text style={styles.statValue}>{ping.toFixed(1)}</Text>
                    <Text style={styles.statLabel}>ping</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1d2d50',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50,
    },
    header: {
        color: '#fff',
        fontSize: 24,
        marginBottom: 20,
    },
    speedometer: {
        marginBottom: 40,
    },
    speedTextContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    speedText: {
        fontSize: 48,
        color: '#fff',
    },
    unitText: {
        fontSize: 24,
        color: '#aaa',
    },
    button: {
        backgroundColor: '#00e0ff',
        padding: 15,
        borderRadius: 5,
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%',
    },
    stat: {
        alignItems: 'center',
    },
    statValue: {
        fontSize: 28,
        color: '#fff',
    },
    statLabel: {
        fontSize: 16,
        color: '#aaa',
    },
});

export default SpeedTestScreen;
