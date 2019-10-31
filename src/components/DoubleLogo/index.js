import React from 'react'
import styled from 'styled-components'
import TokenLogo from '../TokenLogo'

export default function DoubleTokenLogo({ a0, a1, size = 24, margin = false }) {
  const TokenWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    margin-right: ${({ sizeraw, margin }) => margin && (sizeraw / 3 + 8).toString() + 'px'};
  `

  const HigherLogo = styled(TokenLogo)`
    z-index: 2;
    // background-color: white;
}
