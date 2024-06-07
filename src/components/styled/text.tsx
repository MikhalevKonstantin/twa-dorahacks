import styled, { css } from 'styled-components';

interface TextProps {
  size?: 'small' | 'medium'| 'big'; // Add more sizes as needed
  weight?: 'light' | 'regular' | 'bold';
}

const sizes = {
  small: '20px',
  medium: '20px',
  big: '35px',
};

const weights = {
  light: 300,
  regular: 400,
  bold: 700,
};

const StyledText = styled.span<TextProps>`
  font-family: 'Inter', sans-serif;
  color: #000000;
  ${(props) => css`
    font-size: ${props.size ? sizes[props.size] : 'inherit'};
    font-weight: ${props.weight ? weights[props.weight] : 'inherit'};
  `}
`;

export default StyledText;