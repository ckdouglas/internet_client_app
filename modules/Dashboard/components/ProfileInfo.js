import React from "react";
import { Block, Card, Text } from "galio-framework";
import {
    Image,
} from "react-native";

const ProfileInfo = ({ customer }) => {
    return (
        <Card style={{
            margin: 10,
            marginTop: 16,
            paddingTop: 0,
            backgroundColor: 'white'
        }}
        >
            <Block
                row
                space="between"
                middle
                style={{
                    padding: 10,
                    marginTop: -24
                }}
            >
                <Image source={{ uri: 'http://i.pravatar.cc/100?id=skater' }} style={{ width: 56, height: 56, borderRadius: 28 }} />
                <Block >
                    <Text>{customer.name}</Text>
                    <Text>{customer.phone}</Text>
                </Block>
            </Block>
        </Card>
    )
}

export default ProfileInfo;
