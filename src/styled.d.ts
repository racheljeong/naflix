import 'styled-components';


// defailt Theme이라 불리는 styled-components의 인터페이스
declare module 'styled-components' {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    etcColor: string;
    accentColor : string;
  }
}