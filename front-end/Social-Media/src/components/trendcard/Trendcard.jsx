import React from 'react'
import tc from '../trendcard/Trendcard.module.css'
import { Trenddata } from '../../Data/Trenddata'

function Trendcard() {
  return (
    <div className={tc.trendcard}>
        <h3>Trend for you.</h3>
        {
           Trenddata.map((trend)=>{
            return (
                <div className={tc.trend}>
                    <span>#{trend.name}</span>
                    <span>{trend.shares}k shares</span>

                </div>
            )
           }) 
        }
    </div>
  )
}

export default Trendcard