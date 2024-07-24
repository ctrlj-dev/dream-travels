// import original module declarations
import 'styled-components';
import theme from '@/lib/theme/theme';

type CustomTheme = typeof theme;

declare module 'styled-components' {
  interface DefaultTheme extends CustomTheme {}
}
