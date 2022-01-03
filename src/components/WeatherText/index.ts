import styled from 'styled-components/native';
import {Colors, Fonts} from '../../resources';

type WeatherTextProps = {
  size?: number;
  color?: string;
  textAlign?: string;
  textDecoration?: string;
  secondary?: boolean;
  bold?: boolean;
  black?: boolean;
  medium?: boolean;
  italic?: boolean;
  opacity?: number;
  my?: number;
  mx?: number;
};

const WeatherText = styled.Text<WeatherTextProps>`
  font-family: ${props => {
    if (props.secondary) {
      if (props.bold) {
        return Fonts.notoSerifBold;
      } else if (props.medium) {
        return Fonts.notoSerifRegular;
      } else if (props.italic) {
        return Fonts.notoSerifItalic;
      }

      return Fonts.notoSerifRegular;
    } else {
      if (props.bold) {
        return Fonts.robotoBold;
      } else if (props.medium) {
        return Fonts.robotoMedium;
      } else if (props.italic) {
        return Fonts.robotoItalic;
      } else if (props.black) {
        return Fonts.robotoBlack;
      }

      return Fonts.robotoRegular;
    }
  }};
  font-size: ${({size}) => size || 14}px;
  color: ${({color}) => color || Colors.black};
  text-align: ${({textAlign}) => textAlign || 'left'};
  text-decoration: ${({textDecoration}) => textDecoration || 'none'};
  text-decoration-color: ${({color}) => color || Colors.black};
  opacity: ${({opacity}) => opacity || 1};
  margin: ${({my = 0, mx = 0}) => `${my}px ${mx}px` || 0};
`;

export default WeatherText;
