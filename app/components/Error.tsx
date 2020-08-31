
import React from 'react';
import styled from 'styled-components/native';

interface ITryAgainProps {
    callback?: () => void;
}

export const ErrorTryAgain: React.FC<ITryAgainProps> = ({ callback }) => {
    return <>
        <Texto>
            Ops, ocorreu um erro <Emoji>:(</Emoji>
        </Texto>
        {callback && <TryAgain onPress={callback}>
            <TryAgainText>tentar novamente</TryAgainText>
        </TryAgain>}
    </>
};

const TryAgain = styled.TouchableOpacity`
    border: 1px solid ${props => props.theme.colors.theme};
    padding: 5px 10px;
    border-radius: 5px;
    margin-top: 10px;
`;

const TryAgainText = styled.Text`
    color: ${props => props.theme.colors.theme};
`;

const Texto = styled.Text`
  color: ${props => props.theme.colors.black};
  font-size: 16px;
`;

const Emoji = styled.Text`
  color: ${props => props.theme.colors.black};
  font-size: 20px;
`;