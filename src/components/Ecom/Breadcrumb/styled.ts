import styled from 'styled-components';
import caretRight from '@assets/caretRight.svg';
import caretRightDisable from '@assets/caretRightDisable.svg';

export const BreadcrumbContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Step = styled.div<{
  isActive: boolean;
  isComplete: boolean;
  primaryColor: string;
}>`
  font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
  color: ${({ isActive, isComplete, primaryColor }) =>
    isActive ? primaryColor : isComplete ? '#3D4449' : '#B1B1B1'};

  span {
    font-size: 24px;
    line-height: 24px;
    letter-spacing: 0.5px;
    text-decoration: none;
    border-bottom: ${({ isActive, primaryColor }) =>
      isActive ? `2px solid ${primaryColor}` : 'none'};
  }

  &:not(:last-child)::after {
    content: '';
    padding: 0;
    margin: 0 12px;
    display: inline-block;
    width: 24px;
    height: 24px;
    background-image: url(${({ isComplete }) => isComplete ? caretRight : caretRightDisable});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    vertical-align: middle;
  }

  @media (max-width: 900px) {
    > span {
      font-size: 16px;
    }
  }

  @media (max-width: 600px) {
    display: none;
  }
`;
