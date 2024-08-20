import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { Button, Block } from 'galio-framework';

// FAQ data
const faqs = [
    {
        question: "Question 1?",
        answer: "Answer One"
    },
    {
        question: "Question 2?",
        answer: "Answer Two"
    },
    // Add more FAQs here
];

// FAQ item component
const FAQItem = ({ question, answer }) => {
    const [expanded, setExpanded] = React.useState(false);

    return (
        <Block style={styles.faqItem}>
            <Button
                style={styles.questionButton}
                color={expanded ? "green" : "info"}
                onPress={() => setExpanded(!expanded)}
                icon={expanded ? "arrow-up" : "arrow-down"}
                iconFamily="font-awesome"
                iconColor="white"
                
            >
                {question}
            </Button>
            {expanded && <Text style={styles.answer}>{answer}</Text>}
        </Block>
    );
};

// FAQ page component
const FAQs = () => {
    return (
        <ScrollView style={styles.container}>
            {faqs.map((faq, index) => (
                <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                />
            ))}
        </ScrollView>
    );
};

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    faqItem: {
        marginBottom: 10,
    },
    questionButton: {
        width: '100%',
        marginBottom: 4,
        borderRadius: 8,
    },
    answer: {
        paddingLeft: 12,
        paddingTop: 10,
        fontSize: 16,
        color: '#333',
    },
});

export default FAQs;
