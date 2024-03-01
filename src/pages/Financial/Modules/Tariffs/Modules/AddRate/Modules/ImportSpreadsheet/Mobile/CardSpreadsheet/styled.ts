import { ThemeColor } from "@/config/color";
import styled from "styled-components";

export const SpreadsheetWrapper = styled.ul`
  border: 0.785px solid #DFDFDF;
`;

export const SpreadsheetItem = styled.li`
  display: flex;
  border-bottom: 0.785px solid #DFDFDF;
`;

export const LabelBox = styled.div`
  width: 60px;
  flex-shrink: 0;
  background: ${ThemeColor.primaria};
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    color: #FDFDFD;
    font-size: 12px;
    font-weight: 700;
    line-height: 14px;
  }
`;

export const IdentifierBox = styled.div`
  width: 66px;
  flex-shrink: 0;
  background: #FFF;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  text-overflow: ellipsis;
  span {
    color: #6C757D;
    font-size: 12.204px;
    font-weight: 400;
    line-height: 24.408px;
    white-space: normal;
  }
`;

export const InfoBox = styled.div`
  padding: 11px 34px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InfoText = styled.p`
  color: #6C757D;
  font-size: 12px;
  line-height: 14px;
  width: 100%;
  max-width: 131px;
`;

export const InfoComent = styled(InfoText)`
  max-height: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
