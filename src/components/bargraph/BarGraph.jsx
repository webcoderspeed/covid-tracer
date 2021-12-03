import React, { useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-2'
import numeral from 'numeral'
import styled from 'styled-components'

const Graph = styled.div`
    margin-right: 50px;   
    padding: 1%;
    background: #101522;
    height: 300px;
`

const options = {
  legend: {
    display: false,
  },
  elements: {
    point: {
      radius: 3,
    },
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: "index",
    intersect: false,
    callbacks: {
      label: function (tooltipItem, data) {
        return numeral(tooltipItem.value).format("+0,0")
      },
    },
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          fontColor: '#fff',
        },
        type: "time",
        time: {
          parser: "MM/DD/YY",
          tooltipFormat: "ll",
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },

        ticks: {
          fontColor: '#fff',
          callback: function (value, index, values) {
            return numeral(value).format("0a")
          },
        },
      },
    ],
  },
}


const BarGraph = ({ caseType = 'cases', days }) => {

  const [data, setData] = useState({})

  useEffect(() => {

    let history = `https://disease.sh/v3/covid-19/historical/all?lastdays=${days}`

    const fetchData = async () => {
      fetch(history)
        .then(res => res.json())
        .then(data => {
          console.log(data)
          const chartData = builldChartData(data, caseType)
          setData(chartData)
        })
    }
    fetchData()
  }, [caseType, days])

  const builldChartData = (data, casesType) => {
    const chartData = []
    let lastDataPoint
    for (let date in data.cases) {
      if (lastDataPoint) {
        const newDataPoint = {
          x: date,
          y: data[casesType][date] - lastDataPoint
        }
        chartData.push(newDataPoint)
      }
      lastDataPoint = data[casesType][date]
    }
    return chartData
  }


  return (
    <Graph>
      {data?.length > 0 && (
        <Bar
          options={options}
          data={{
            datasets: [
              {
                backgroundColor: "aqua",
                data: data,
                barPercentage: 1,
                hoverBackgroundColor: '#00c8ffc2',
                borderWidth: 2,
                fill: false,
                borderDash: [5, 5],
              },
            ],
          }} />
      )}
    </Graph>
  )
}

export default BarGraph