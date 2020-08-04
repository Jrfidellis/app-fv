import styled from 'styled-components/native';

export const Wrapper = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const Image = styled.ImageBackground`
    height: 15px;
    width: 15px;
    border-radius: 100px;
    background: ${props => props.theme.colors.black};
    margin-right: 5px;
`;

export const Text = styled.Text`
    font-size: 12px;
`;