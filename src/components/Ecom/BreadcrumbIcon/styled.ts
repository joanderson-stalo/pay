import styled from "styled-components";

export const BreadcrumbContainer = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 900px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const Step = styled.div<{ isActive?: boolean; isComplete?: boolean; }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ isActive }) => (isActive ? '#4B0082' : '#C0C0C0')};
  opacity: ${({ isComplete }) => (isComplete ? 1 : 0.5)};
`;

export const StepConnector = styled.div<{ isComplete?: boolean; }>`
  height: 2px;
  flex-grow: 1;
  width: 100%;
  background-color: ${({ isComplete }) => (isComplete ? '#4B0082' : '#C0C0C0')};
  margin-bottom: 20px;
`;

export const StepIcon = styled.img<{ isActive?: boolean; }>`
  padding: 5px;
  margin-bottom: 5px;
  background-color: ${({ isActive }) => (isActive ? '#4B0082' : 'transparent')};
  border-radius: 50%;
`;

export const StepLabel = styled.div`
  color: #3D4449;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5px;
  white-space: nowrap;
  text-align: center;

  @media (max-width: 900px) {
    font-size: 14px;
  }
`;

export const Icon = styled.div<{ isActive?: boolean; }>`
  > svg {
    width: 42px;
    height: 42px;
    background-color: ${({ isActive }) => (isActive ? '#4B0082' : '#E3E3E3')};
    border-radius: 50%;
    padding: 8px;
    color: ${({ isActive }) => (isActive ? '#fff' : '#B1B1B1')};
  }
`;
