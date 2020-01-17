import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

/* eslint-disable max-len */

const timeArray = [800, 900, 1000, 1100, 1200, 1300, 1400,
  1500, 1600, 1700, 1800, 1900, 2000, 2100, 2200];
const dayArray = [0, 1, 2, 3, 4, 5, 6];
const startTime = '08:00';

const Timetable = (props) => {
  const [list, setList] = useState([]);
  useEffect(() => buildMod(), [props.user]); // eslint-disable-line no-use-before-define

  // SET STATE
  const buildMod = async () => {
    const obj = await props.user.modules.map((mod, num) => {
      const course = props.mods.modules.filter(c => c.index === mod.index);
      const sem = course[0].classes.filter(c => c.sem === mod.sem);
      const clas = sem[0].times.filter(c => c.id === mod.time_id);
      return {
        num,
        real: true,
        name: course[0].name,
        index: course[0].index,
        description: course[0].description,
        prerequisites: course[0].prerequisites,
        preclusions: course[0].preclusions,
        sem: sem[0].sem,
        exam: sem[0].exam,
        day: clas[0].day,
        instructor: clas[0].instructor,
        instructor_url: clas[0].instructor_url,
        location: clas[0].location,
        from: clas[0].from,
        to: clas[0].to
      };
    })
    setList(obj);
  }

  //  GENERATE COURSES
  const calcMargin = (time, ahead = startTime) => {
    const hourPercent = 6.66666;
    const startingHour = 8;
    const timeArr = time.split(':');
    const aheadArr = ahead.split(':');
    const percent = (parseInt(timeArr[0], 10) - startingHour) * hourPercent + parseInt(timeArr[1], 10) * hourPercent / 60;
    const infront = (parseInt(aheadArr[0], 10) - startingHour) * hourPercent + parseInt(aheadArr[1], 10) * hourPercent / 60;
    return percent - infront;
  }
  const generateDay = (ele) => {
    const dayList = list.filter(day => day.day === ele);
    return dayList.map((clas, num) => {
      return (
        <div
          key={clas.index}
          className={`common-timetable-day-line-clas t-${props.main.theme}-${clas.num}`}
          style={{
            marginLeft: `${calcMargin(clas.from, num > 0 ? dayList[num - 1].to : startTime)}%`,
            width: `${calcMargin(clas.to, clas.from)}%`
          }}
        >
          {clas.index}
        </div>
      )
    })
  }
  //  MAIN RETURN
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
              <div className="common-timetable-day-label">{ele}</div>
              <div className="common-timetable-day-line">
                {generateDay(ele)}
              </div>
            </div>
          )
        })
      }
      {/* eslint-disable */}
      <button onClick={() => console.log(list)}>state</button>
      <button onClick={() => console.log(props)}>props</button>
      {/* eslint-enable */}
    </div>
  )
}

Timetable.propTypes = {
  user: PropTypes.shape({
    modules: PropTypes.arrayOf(PropTypes.shape({}))
  }).isRequired,
  mods: PropTypes.shape({
    modules: PropTypes.arrayOf(PropTypes.shape({}))
  }).isRequired,
  main: PropTypes.shape({ theme: PropTypes.string }).isRequired
}

const mapStateToProps = state => ({
  user: state.user,
  mods: state.mods,
  main: state.main,
})
export default connect(mapStateToProps)(Timetable)
