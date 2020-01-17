import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// import cx from 'classnames'
/* eslint-disable */

const timeArray = [800, 900, 1000, 1100, 1200, 1300, 1400,
  1500, 1600, 1700, 1800, 1900, 2000, 2100, 2200];
const dayArray = [0, 1, 2, 3, 4, 5, 6];

const Timetable = (props) => {
  // const [select, setSelect] = useState(null);
  const [list, setList] = useState([]);
  useEffect(() => {
    buildMod();
  }, [props.user]);

  // push course to state
  const buildMod = async() => {
    const obj = await props.user.modules.map((mod, num) => {
      const course = props.mods.modules.filter(c => c.index === mod.index);
      const sem = course[0].classes.filter(c => c.sem === mod.sem);
      const clas = sem[0].times.filter(c => c.id === mod.time_id);
      return {
        num,
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
                {
                  list.filter(day => day.day === ele).map((clas) => {
                    return (
                      <div
                        key={clas.index}
                        className={`common-timetable-day-line-clas t-${props.main.theme}-${clas.num}`}
                      >
                        {clas.index}
                      </div>
                    )
                  })
                }
              </div>
            </div>
          )
        })
      }
      <button onClick={() => console.log(list)}>state</button>
      <button onClick={() => console.log(props)}>props</button>
    </div>
  )
}

Timetable.propTypes = {
  user: PropTypes.shape({}).isRequired,
  mods: PropTypes.shape({}).isRequired,
  main: PropTypes.shape({}).isRequired
}

const mapStateToProps = state => ({
  user: state.user,
  mods: state.mods,
  main: state.main,
})
export default connect(mapStateToProps)(Timetable)
