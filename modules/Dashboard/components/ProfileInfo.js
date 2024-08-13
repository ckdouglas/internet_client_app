import React from "react";
import { Block, Card, Text } from "galio-framework";
import {
    Image,
} from "react-native";

const ProfileInfo = ({ user }) => {
    return (
        <Card style={{
            margin: 10,
            marginTop: 16,
            paddingTop: 0,
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
                    <Text>John Abram</Text>
                    <Text>0701784536</Text>
                </Block>
            </Block>
        </Card>
    )
}

export default ProfileInfo;
