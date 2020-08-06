import styled from 'styled-components/native';

export const Card = styled.TouchableOpacity`
    height: 40px;
    border-radius: 8px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
    background: ${props => props.theme.colors.black};
    width: 100%;
    padding: 0 10px;
    align-items: center;
    elevation: 3;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
`;

export const Title = styled.Text`
    margin-top: 5px;
    color: ${props => props.theme.colors.white};
    font-size: 16px;
    font-weight: bold;
    height: 25px;
`;