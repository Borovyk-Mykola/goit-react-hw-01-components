import styled from "@emotion/styled";

export const TableTransaction = styled.table`
padding-left: 40px;
`;

export const TableTitle = styled.th`
padding-top: 12px;
padding-bottom: 12px;
text-align: center;
background-color: #40cfff;
color: white;
width: 440px;
border: 1px solid #ddd;
`;

export const TableBody = styled.tbody`
tr:nth-of-type(even)  {
    background-color: #f2f2f2;
}
`;