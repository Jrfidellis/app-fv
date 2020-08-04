import styled from 'styled-components/native';

export const Line = styled.View`
    position: absolute;
    width: 10px;
    background: #0F90FA;
    height: 90px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
`

export const Wrapper = styled.View`
    display: flex;
    justify-content: space-between;
`

export const PostCard = styled.View`
    height: 90px;
    border-radius: 8px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
    background: #fff;
    width: 100%;
    padding: 5px 5px 10px 20px;
    elevation: 5;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const Title = styled.Text`
    margin-top: 5px;
    color: #333;
    font-size: 16px;
    font-weight: bold;
`;

export const Image = styled.ImageBackground`
    height: 80px;
    width: 80px;
    border-radius: 3px;
    background: #333;
`;