import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
/* eslint-disable */

const timeArray = [800, 900, 1000, 1100, 1200, 1300, 1400,
  1500, 1600, 1700, 1800, 1900, 2000, 2100, 2200];

const dayArray = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

const Timetable = (props) => {
  const Mon = useRef(null);
  const Tues = useRef(null);
  const Wed = useRef(null);
  const Thurs = useRef(null);
  const Fri = useRef(null);
  const Sat = useRef(null);
  const Sun = useRef(null);
  useEffect(() => {
    console.log(props.user)
  }, [props.user])
  const addToTimetable = () => {
    console.log(Wed)
  }
  return (
    <div className="common-timetable">
      <div className="common-timetable-time">
        {
          timeArray.map((ele) => {
            return (
              <div key={ele}>{ele}</div>
            )
          })
        }
      </div>
      {
        dayArray.map((ele) => {
          return (
            <div className="common-timetable-day" key={ele}>
              <div className="common-timetable-day-label">{ele.charAt(0)}</div>
              <div className="common-timetable-day-line" ref={eval(ele)}>TIMELINE</div>
            </div>
          )
        })
      }
      <button onClick={addToTimetable}>
        click me
      </button>
    </div>
  )
}

Timetable.propTypes = {
  user: PropTypes.shape({}).isRequired
}

const mapStateToProps = state => ({ user: state.user })
export default connect(mapStateToProps)(Timetable)
