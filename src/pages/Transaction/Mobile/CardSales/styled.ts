import styled from 'styled-components';

interface Color {
  primary: string | undefined
  secundary:string | undefined
}


type CardStatusProps = {
  status: string | undefined;
};



export const Card = styled.div`
width: 100%;

background: var(--foundation-white-light, #FDFDFD);
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

`;


export const CardHeader = styled.div<Color>`
display: flex;
align-items: center;
justify-content: space-between;
padding: 12px 20px;
background: ${(props) => props.primary};



`;

export const CardTitle = styled.h2`
display: flex;
gap: 7px;
color: var(--foundation-white-dark-hover, #8A8A8A);
font-size: 11px;
font-weight: 600;
line-height: 15.566px;

>h4{
  color: var(--light-secondary, #6C757D);
font-size: 11px;
font-style: normal;
font-weight: 400;
line-height: 15.566px;
}

`;

export const CardDate = styled.p`
color: var(--light-secondary, #6C757D);
font-feature-settings: 'clig' off, 'liga' off;
font-size: 11px;
font-style: normal;
font-weight: 400;
line-height: 15.566px;

display: flex;
gap: 7px;

> h4{

  color: var(--foundation-white-dark-hover, #8A8A8A);
font-feature-settings: 'clig' off, 'liga' off;
font-size: 11px;
font-weight: 600;
line-height: 15.566px;
}
`;


export const CardBody = styled.div`
  padding: 16px;
`;

export const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const CardLabel = styled.span`
  font-size: 14px;
  color: #888;
`;

export const CardValue = styled.span`
color: var(--foundation-white-light, #FDFDFD);
font-feature-settings: 'clig' off, 'liga' off;
font-size: 11px;
font-style: normal;
font-weight: 400;
line-height: 22px;
`;

export const CardAmount = styled.span`
color: var(--foundation-white-light, #FDFDFD);
text-align: center;
font-feature-settings: 'clig' off, 'liga' off;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 22px;
`;


export const CardStatus = styled.span<CardStatusProps>`
color: var(--foundation-brand-02-light, #E6F8FD);
padding: 4px 8px;
font-size: 9px;
font-weight: 600;
border-radius: 4px;
text-align: center;
align-items: center;
font-size: 12px;
font-weight: 700;
color: #202124;

background : ${props => props.status === 'succeeded' ? '#1786291A' : '#C81B1B1A'};
`;


export const CardFooter = styled.div`
  padding: 16px;
  border-top: 1px solid #EEE;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const BrandImage = styled.img`
  width: 28px;
  height: auto;
`;


export const ContainerInfo = styled.div`
display: flex;
  padding: 14px 20px;
  justify-content: space-between;
text-align: center;
align-items: center;
`

export const Tag = styled.h4`

  border-radius: 4px;
background: var(--foundation-white-normal, #E6E6E6);
padding: 2px 8px;

color: var(--foundation-neutral-dark-hover, #4B4B4B);
font-size: 10px;
font-style: normal;
font-weight: 400;
line-height: normal;
text-align: center;
width: 30%;

`
