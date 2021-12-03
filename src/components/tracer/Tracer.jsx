import React, { useState, useEffect } from 'react'
import { MenuItem, FormControl, Select, CardContent } from '@material-ui/core'
import numeral from 'numeral'
import '../scroll.css';
import { prettyPrintStat, sortData } from '../util'
import BarGraph from '../bargraph/BarGraph';
import Table from '../table/Table';
import InfoBox from '../infobox/InfoBox'
import {
  APP,
  Header,
  Title,
  HighLight,
  AppStats,
  CaseType,
  Day,
  Value,
  Meter,
  Card
} from './TracerElement.js'

const Tracer = () => {

  const [states, setStates] = useState([])
  const [worldwide, setWorldWide] = useState('worldwide')
  const [stateInfo, setStateInfo] = useState({})
  const [tableData, setTableData] = useState([])
  const [casesType, setCasesType] = useState('cases')
  const [days, setDays] = useState(30)

  const API = 'https://disease.sh/v3/covid-19/gov/India'

  useEffect(() => {
    const getStateData = async () => {
      await fetch(API)
        .then(res => res.json())
        .then(data => {
          const stateData = data.states.map((state) => ({
            state: state.state,
            cases: state.cases,
          }))

          const sortedData = sortData(stateData)
          setTableData(sortedData)
          setStates(stateData)
        })
    }
    getStateData()

    // default displayed data
    fetch('https://disease.sh/v3/covid-19/all')
      .then(res => res.json())
      .then(data => {
        setStateInfo(data)
      })
  }, [])

  const handleDays = (day) => {
    day = document.getElementById('day').value
    document.querySelector('.range').textContent = day
    setDays(day)
  }

  const onStateChange = async (event) => {
    const stateName = event.target.value;

    let url = '';

    if (stateName === 'worldwide') {
      url = 'https://disease.sh/v3/covid-19/all'

      await fetch(url)
        .then(res => res.json())
        .then(data => {
          setWorldWide(stateName)
          setStateInfo(data)
        })
    } else {
      url = API
      await fetch(url)
        .then(res => res.json())
        .then(data => {
          setWorldWide(stateName)
          let newState = data.states.filter(
            eachObj => eachObj.state === stateName);
          setStateInfo(newState[0])
        })
    }
  }


  return (
    <APP>
      <Header>
        <Title>Covid <HighLight>Tracer</HighLight></Title>
        <FormControl style={{
          background: 'linear-gradient(to left,#004e92, #004e92)',
          width: '300px'
        }}>
          <Select
            variant='outlined'
            value={worldwide}
            onChange={onStateChange} style={{ color: '#fff', fontSize: '1.5rem' }}>
            <MenuItem value='worldwide'>WorldWide</MenuItem>
            {states.map(state => <MenuItem value={state.state}>{state.state}</MenuItem>)}
          </Select>
        </FormControl>
      </Header>
      <AppStats>
        <InfoBox
          onClick={(e) => setCasesType("cases")}
          title="Coronavirus Cases"
          isRed
          active={casesType === "cases"}
          cases={prettyPrintStat(stateInfo.todayCases)}
          total={numeral(stateInfo.cases).format("0.0a")}
        />
        <InfoBox
          onClick={(e) => setCasesType("recovered")}
          title="Recovered"
          active={casesType === "recovered"}
          cases={prettyPrintStat(stateInfo.todayRecovered)}
          total={numeral(stateInfo.recovered).format("0.0a")}
        />
        <InfoBox
          onClick={(e) => setCasesType("deaths")}
          title="Deaths"
          isRed
          active={casesType === "deaths"}
          cases={prettyPrintStat(stateInfo.todayDeaths)}
          total={numeral(stateInfo.deaths).format("0.0a")}
        />
      </AppStats>
      <Card>
        <CardContent>
          <Title>Live Cases by States</Title>
          <Table states={tableData} />
        </CardContent>
      </Card>
      <Day>
        <CaseType>
          {casesType.toUpperCase()}
        </CaseType>
        <Meter type='range' min='5' max='999' onChange={handleDays} id='day' />
        <Value className='range'>30</Value>
        <BarGraph days={days} caseType={casesType} />
      </Day>
    </APP>
  )
}

export default Tracer