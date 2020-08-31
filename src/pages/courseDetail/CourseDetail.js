import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { courses } from '../../data/courses';

import './courseDetail.css';

const CourseDetail = () => {
  const [selectedStep, setSelectedStep] = useState(0);
  const [currentProgress, setCurrentProgress] = useState(25);
  const { id } = useParams();

  const handleClick = (step, progress) => {
    setCurrentProgress(progress);
    setSelectedStep(step);
  };

  const course = courses.find((course) => course.id === parseInt(id, 10));

  return (
    <div className="container-fluid courseDetail-container">
      {course ? (
        <div>
          <div className="row">
            <h1 className="col text-center">{course.title}</h1>
          </div>
          <div className="row pt-2 flex-wrap-reverse">
            <div className="col-md-8">
              <div className="progress m-2">
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  style={{ width: `${currentProgress}%` }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div>{course?.steps[selectedStep]}</div>
            </div>
            <div className="col-md-4 home p-2">
              <h2>Menú</h2>
              <ul className="p-0 m-0">
                <li onClick={() => handleClick(0, 25)}>¿Que es?</li>
                <li onClick={() => handleClick(1, 50)}>Video</li>
                <li onClick={() => handleClick(2, 75)}>Conferencia</li>
                <li onClick={() => handleClick(3, 100)}>Claves</li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div>Course not found</div>
      )}
    </div>
  );
};

export default CourseDetail;
