import styled from 'styled-components/native';

export const Line = styled.View`
    position: absolute;
    width: 10px;
    background: ${props => props.theme.colors.theme};
    height: 90px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
`

export const Wrapper = styled.View`
    display: flex;
    justify-content: space-between;
`

export const PostCard = styled.TouchableOpacity`
    height: 90px;
    border-radius: 8px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
    background: ${props => props.theme.colors.white};
    width: 100%;
    padding: 5px 5px 10px 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
`;

export const Title = styled.Text`
    margin-top: 5px;
    color: ${props => props.theme.colors.black};
    font-size: 18px;
`;
