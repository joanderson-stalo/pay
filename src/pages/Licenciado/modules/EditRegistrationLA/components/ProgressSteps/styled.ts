import styled from 'styled-components';

interface IProps {
  isActive: boolean;
  isCurrent?: boolean;
}

interface IProgressBarProps {
  width: string;
}

export const MainContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
`;

export const StepContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const StepWrapper = styled.div`
  position: relative;
  z-index: 1;
  cursor: pointer;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StepStyle = styled.div<IProps>`
  width: ${({ isActive, isCurrent }) => (isActive && isCurrent ? '40px' : '25px')};
  height: ${({ isActive, isCurrent }) => (isActive && isCurrent ? '40px' : '25px')};
  border-radius: 50%;
  background-color: ${({ isActive, isCurrent }) =>
    isActive && isCurrent ? '#F7F7F7' : isActive ? '#08BBE9' : '#F7F7F7'};
  transition: all 0.4s ease;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StepCount = styled.span<IProps & { labelStatus: 'active' | 'current' | 'disabled' | 'upcoming' }>`
  font-size: ${({ isActive }) => (isActive ? '16px' : '14px')};
  color: ${({ labelStatus }) =>
    labelStatus === 'active' ? '#FDFDFD' :
    (labelStatus === 'current' || labelStatus === 'upcoming') ? '#000000' :
    '#FDFDFD'};
`;
















export const ProgressBarInactive = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  height: 7px;
  background: #F7F7F7;
  width: 100%;
  transform: translateY(-50%);
  border-radius: 3.5px;
  z-index: 0;
`;

export const ProgressBarActive = styled.div<IProps & IProgressBarProps>`
  position: absolute;
  top: 50%;
  left: 0;
  height: 7px;
  background: ${({ isActive }) => (isActive ? '#08BBE9' : 'transparent')};
  width: ${({ width }) => width};
  transform: translateY(-50%);
  z-index: 1;
  transition: width 0.4s ease;
  border-radius: 3.5px;
`;
export const Tooltip = styled.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: #fff;
  padding: 5px 10px;
  border-radius: 4px;
  margin-bottom: 10px;
  white-space: nowrap;
  pointer-events: none;
  z-index: 1;
`;
