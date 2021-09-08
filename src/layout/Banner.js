import React from 'react'
import moment from 'moment'
import styled from '@emotion/styled'

const BannerContainer = styled('div')`
  padding: 20px 20px;
  text-align: center;
  background: white;
`

export default function Banner() {
  const startDate = '2020-09-08' // YYYY-MM-DD
  const endDate = '2020-09-22' // YYYY-MM-DD
  if (!moment().isBetween(startDate, endDate)) return false
  return (
    <BannerContainer>
      <a href="https://gitcoin.co/grants/775/kickback">
        {' '}
        "Support Kickback at Gitcoin CLR Round 10 (ends on{' '}
        {moment(endDate).format('dddd, MMMM Do YYYY')})"
      </a>
    </BannerContainer>
  )
}
