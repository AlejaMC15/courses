import React from 'react';

import Card from '../../shared/components/card/Card';
import { courses } from '../../data/courses';
import { Link } from 'react-router-dom';

import './courseList.css';

const CourseList = () => {
  return (
    <div>
      <h1 className="p-5">Cursos</h1>
      <div className="cardRender">
        {courses.length &&
          courses.map((course) => (
            <Link to={`/detail/${course.id}`} key={course.id}>
              <Card
                image={course.image}
                title={course.title}
                description={course.description}
              />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default CourseList;
