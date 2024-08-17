import { Block } from "galio-framework";
import React from "react";

const Devices = () => {
  const devices = [
    {
      name: 'Device 1',
      ip: '12345'
    },
    {
      name: 'Device 2',
      ip: '6789'
    },
    {
      name: 'Device 3',
      ip: '017834'
    },
    {
      name: 'Device 4',
      ip: '74673'
    },
    {
      name: 'Device 5',
      ip: '645360'
    },
  ]

  return (
    <Block>
      {
        devices.map((item) => <Block>
          <Tex>Name - ${item.name}</Tex>
          <Tex>IP - ${item.ip}</Tex>
        </Block>)
      }
    </Block>
  )
}


export default Devices;
