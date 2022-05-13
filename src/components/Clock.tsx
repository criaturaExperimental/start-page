import styled from '@emotion/styled';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';

const ClockStyled = styled.span`
  font-size: 7em;
  color: white;
`;

export function Clock() {

  const [now, setNow] = useState(new Date())
  const HMS = format(now, 'hh:mm:ss');

  useEffect(() => {
    setInterval(() => {
      setNow(new Date());
    }, 1000)

  }, [])


  return <ClockStyled>{HMS}</ClockStyled>;
}
