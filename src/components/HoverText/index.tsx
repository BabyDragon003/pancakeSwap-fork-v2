import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import Popover, { PopoverProps } from '../Popover'

const Wrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`

export function Tooltip({ text, ...rest }: TooltipProps) {
  return <Popover content={<TooltipContainer>{text}</TooltipContainer>} {...rest} />
}

export default function HoverText({ text, children }: { text: string; children: any }) {
  const [show, setShow] = useState<boolean>(false)
  const open = useCallback(() => setShow(true), [setShow])
  const close = useCallback(() => setShow(false), [setShow])

  return (
    <Wrapper>
      <Tooltip text={text} show={show}>
        <Wrapper onMouseEnter={open} onMouseLeave={close}>
          {children}
        </Wrapper>
      </Tooltip>
    </Wrapper>
  )
}
