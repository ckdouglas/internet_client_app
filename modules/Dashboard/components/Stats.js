import React from "react";
import { Block, Card, Text } from "galio-framework";
import { Icon } from "../../../components";

const Stats = ({ stats }) => {
    return (
        <Block style={{ margin: 10 }}>
            <Text style={{fontWeight: 'bold'}}>STATS</Text>
            <Card style={{
                marginTop: 16,
                paddingTop: 0,
                backgroundColor: 'white'
            }}
            >
                <Block
                    space="between"
                    style={{
                        padding: 10,
                        marginTop: -24
                    }}
                >
                    <Text>Total this month</Text>
                    <Block row style={{ marginVertical: 8 }}>
                        <Block center>
                            <Icon
                                name="cloud-upload"
                                family="MaterialIcons"
                                size={24}
                            />
                            <Text>{`Upload - ${stats.upload}GBs`}</Text>
                        </Block>
                        <Block style={{ flex: 1 }} >
                        </Block>
                        <Block center>
                            <Icon
                                name="cloud-download"
                                family="MaterialIcons"
                                size={24}
                            />
                            <Text>{`Upload - ${stats.upload}GBs`}</Text>
                        </Block>
                    </Block>
                </Block>
            </Card>
        </Block>)
}

export default Stats;
