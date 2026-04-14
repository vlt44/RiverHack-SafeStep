import { StyleSheet } from 'react-native';

type StyleProps = {
  width: number;
  height: number;
  panelWidth: number;
};

const WHITE = '#FFFFFF';

const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(value, max));

export const getIconSize = (width: number) =>
  clamp(width * 0.34, 120, 260);

export default function createStyles({
  width,
  height,
  panelWidth,
}: StyleProps) {
  return StyleSheet.create({
    display: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: width * 0.04,
      paddingVertical: height * 0.04,
    },

    content: {
      width: panelWidth,
      flexGrow: 1,
      minHeight: height * 0.55,
      justifyContent: 'space-evenly',
      alignItems: 'center',
      paddingVertical: height * 0.05,
      paddingHorizontal: width * 0.05,
      borderWidth: Math.max(3, width * 0.006),
      borderColor: WHITE,
      borderRadius: Math.min(24, width * 0.05),
      backgroundColor: 'rgba(0,0,0,0.06)',
    },

    intersectionName: {
      width: '90%',
      fontSize: clamp(width * 0.07, 20, 34),
      fontWeight: '900',
      textAlign: 'center',
      textTransform: 'uppercase',
      letterSpacing: 1.2,
      color: WHITE,
      marginBottom: 22,
    },

    timerContainer: {
      marginTop: 12,
      paddingVertical: 10,
      paddingHorizontal: 18,
      borderWidth: 3,
      borderColor: WHITE,
      borderRadius: 10,
      minWidth: 80,
      alignItems: 'center',
    },

    timerText: {
      fontSize: clamp(width * 0.1, 28, 64),
      fontWeight: '900',
      color: WHITE,
      textAlign: 'center',
    },

    status: {
      fontSize: clamp(width * 0.1, 28, 52),
      fontWeight: '900',
      textAlign: 'center',
      textTransform: 'uppercase',
      letterSpacing: 1.5,
      color: WHITE,
    },

    subStatus: {
      width: '100%',
      fontSize: clamp(width * 0.085, 20, 46),
      fontWeight: '900',
      textAlign: 'center',
      textTransform: 'uppercase',
      color: WHITE,
      lineHeight: clamp(width * 0.095, 24, 52),
    },
  });
}