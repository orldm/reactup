import React from 'react'
import {XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, VerticalBarSeries} from 'react-vis'
import 'react-vis/dist/style.css'

const ReactVis = () => (
  <div className='align-center'>
    <XYPlot
          xType="ordinal"
          width={300}
          height={300}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <VerticalBarSeries
            className="vertical-bar-series-example"
            data={[
              {x: 'A', y: 10},
              {x: 'B', y: 5},
              {x: 'C', y: 15}
            ]}/>
          <VerticalBarSeries
            data={[
              {x: 'A', y: 12},
              {x: 'B', y: 2},
              {x: 'C', y: 11}
            ]}/>
        </XYPlot>
  </div>
)

export default ReactVis