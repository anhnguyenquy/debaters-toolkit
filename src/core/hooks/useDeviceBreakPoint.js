import { useMediaQuery } from 'react-responsive'
export const useDeviceBreakPoint = () => {
  const isExtraSmall = useMediaQuery({ maxWidth: 379 })
  const isPhone = useMediaQuery({ minWidth: 380, maxWidth: 425 })
  const isTablet = useMediaQuery({ minWidth: 426, maxWidth: 768 })
  return { isPhone, isTablet, isExtraSmall }
}