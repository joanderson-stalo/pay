import styled, { keyframes } from 'styled-components'

type ContainerBigProps = {
  bgColor: string;
};

const shimmer = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`;

export const ContainerBigSkeleton = styled.div`
  position: relative;
  width: 100%;
  max-width: 289px;
  height: 78px;

  border-radius: 12px;
  background: #f6f7f8;
  background: linear-gradient(90deg, #eee 25%, #f5f5f5 50%, #eee 75%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite;

  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  gap: 11px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 29px;
    height: 78px;
    border-radius: 12px 5px 5px 12px;
  }
`;

export const ContainerBig = styled.div<ContainerBigProps>`
  position: relative;
  width: 100%;
  max-width: 289px;
  height: 78px;

  border-radius: 12px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  gap: 11px;

  > span {
    color: #08bbe9;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Poppins;
    font-size: 24.293px;
    font-weight: 700;
    line-height: 26.723px;
  }

  > h3 {
    color: #383838;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Poppins;
    font-size: 14.576px;
    font-weight: 500;
    line-height: 26.723px;
  }

  ::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 29px;
    height: 78px;
    border-radius: 12px 5px 5px 12px;
    background: ${({ bgColor }) => bgColor};
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
`;

