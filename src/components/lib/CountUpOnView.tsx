import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'

const CountUpOnView = ({ end, duration = 3, ...rest }: { end: number; duration?: number }) => {
  return (
    <CountUp end={end} redraw={true} duration={duration} {...rest}>
      {({ countUpRef, start }) => (
        <VisibilitySensor onChange={start} delayedCall>
          <span ref={countUpRef} />
        </VisibilitySensor>
      )}
    </CountUp>
  )
}

export default CountUpOnView
