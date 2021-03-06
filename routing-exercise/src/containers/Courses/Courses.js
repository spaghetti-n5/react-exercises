import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import './Courses.css';
import Course from '../Course/Course';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'React - The Complete Guide' }
        ]
    }

    componentDidMount () {
      console.log(this.props);
    }

    render () {
        return (
            <div>
                <h1>Frontend available Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map( course => {
                            return (
                            <Link to={this.props.match.url + '/' + course.id + '/' + course.title}
                                  key={course.id}>
                              <article className="Course">{course.title}</article>
                            </Link>
                            );
                        } )
                    }
                </section>
                <Route path={this.props.match.url + '/:courseId/:courseTitle'} component={Course}/>
            </div>
        );
    }
}

export default Courses;
