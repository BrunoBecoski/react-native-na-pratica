import clsx from "clsx";
import { Image, ImageProps } from "react-native";

interface AvatarProps extends ImageProps {
  size?: 'small' | 'medium';
}

export function Avatar({ size = 'medium', ...rest }: AvatarProps) {
  return (
    <Image
      className={clsx('rounded-full', {
        'size-8' : size === 'small',
        'size-10' : size === 'medium',
      })}
      {...rest}
    />
  )
}