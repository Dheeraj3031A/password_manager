import {Divider, Surface, Text} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import {ReactNode} from 'react';
import Animated, {FadeInDown, FadeOut} from 'react-native-reanimated';

type Props = {
  title: string;
  description: string;
  actionButtons?: ReactNode;
};

const AnimatedSurface = Animated.createAnimatedComponent(Surface);

function PasswordCard({title, description, actionButtons}: Props) {
  return (
    <AnimatedSurface
      entering={FadeInDown}
      exiting={FadeOut}
      style={styles.surface}>
      <View style={styles.textContainer}>
        <Text variant="titleLarge">{title}</Text>
        <Text style={styles.textDescription}>{description}</Text>
      </View>
      <Divider />
      <View style={styles.actionBtnContainer}>{actionButtons}</View>
    </AnimatedSurface>
  );
}

const styles = StyleSheet.create({
  surface: {
    padding: 16,
    borderRadius: 28,
    gap: 5,
    width: '92%',
    alignSelf: 'center',
  },
  textContainer: {
    gap: 5,
  },
  textDescription: {
    color: 'grey',
    fontStyle: 'italic',
  },
  actionBtnContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    gap: 5,
  },
});

export default PasswordCard;
