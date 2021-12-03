import React from 'react'
import { CardContent } from '@material-ui/core'
import {
  Card,
  Cases,
  Title,
  Total
} from './InfoBoxElement'

const InfoBox = ({ title, cases, total, ...props }) => {
  return (
    <Card onClick={props.onClick}>
      <CardContent>
        <Title>
          {title}
        </Title>
        <Cases>{cases || 0}</Cases>
        <Total>{total}</Total>
      </CardContent>
    </Card>
  )
}

export default InfoBox