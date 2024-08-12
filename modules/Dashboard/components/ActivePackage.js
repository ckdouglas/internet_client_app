import React from "react";
import { Block, Card, Text } from "galio-framework";
import { Icon } from "../../../components";

const ActivePackage = () => {
    return (
        <Block>
            <Text>Active package</Text>
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
                    <Block>
                        <Icon
                            name="globe"
                            family="Feather"
                            size={24}
                        />
                    </Block>
                    <Block >
                        <Block row>
                            <Text>Gold</Text>
                            <Text>10MBP/S</Text>
                        </Block>
                        <Text>Progress here?</Text>
                    </Block>
                </Block>
            </Card>
        </Block>
    )
}

export default ActivePackage;
