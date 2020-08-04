import styled from 'styled-components/native';

export const Wrapper = styled.View`
    display: flex;
    justify-content: space-between;
`

export const PostCard = styled.View`
    height: 90px;
    border-radius: 8px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
    background: #0BD55C;
    width: 100%;
    padding: 5px 5px 10px 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20;
`;

export const Title = styled.Text`
    margin-top: 5px;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
`;

export const Desc = styled.Text`
    color: #fff;
    font-size: 14px;
    font-weight: normal;
`;
