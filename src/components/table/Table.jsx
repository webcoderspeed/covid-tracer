import React from 'react'
import numeral from 'numeral'
import {
  Data,
  TR,
  TD
} from './TableElement'

const Table = ({ states }) => {
  return (
    <Data>
      {states.map(({ state, cases }) =>
        <TR>
          <TD>{state}</TD>
          <TD><strong>{numeral(cases).format('0,0')}</strong></TD>
        </TR>
      )}
    </Data>
  )
}

export default Table