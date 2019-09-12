import styled from 'styled-components'
import { Box } from 'rebass/styled-components'

const Row = styled(Box)`
  width: 100%;
  display: flex;
  padding: 0;
  align-items: center;
  align-items: ${({ align }) => align && align};
  padding: ${({ padding }) => padding};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
  justify-content: ${({ justify }) => justify};
`


export const RowFixed = styled(Row)`
  width: fit-content;
`

export default Row
