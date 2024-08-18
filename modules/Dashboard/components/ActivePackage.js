import React from "react";
import { Block, Card, Text } from "galio-framework";
import { Icon } from "../../../components";

const ActivePackage = () => {
    return (
        <Block style={{ margin: 10 }}>
            <Text style={{fontWeight: 'bold'}}>ACTIVE PACKAGE</Text>
            <Card style={{
                marginTop: 16,
                paddingTop: 0,
                 backgroundColor: 'white',
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
