import React, { useState } from 'react'
import styled from 'styled-components'

import { useCurrentCurrency } from '../../contexts/Application'

import Row from '../Row'
import { ChevronDown as Arrow } from 'react-feather'

const Select = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: fit-content;
  height: 38px;
  border-radius: 20px;
  font-weight: 500;
  font-size: 1rem;
  color: ${({ theme }) => theme.textColor};

  :hover {
    cursor: pointer;
  }
    }
  }

  return (
    <>
      <Select>
        <Row onClick={() => toggleDropdown(!showDropdown)}>
          {currency} <ArrowStyled />
        </Row>
        {showDropdown && (
          <Option
            onClick={() => {
              toggleDropdown(!showDropdown)
              toggleCurrency()
            }}
          >
            {getOther()}
          </Option>
        )}
      </Select>
    </>
  )
}

export default CurrencySelect
