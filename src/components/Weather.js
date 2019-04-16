import React from "react";

const Weather = props => {
  return (
    <div className="card card-body my-3">
      <form onSubmit={props.getWeather} className="mx-auto">
        <div className="input-group">
          <div className="input-group-prepend" />
          {props.temprature && (
            <p className="form-control text-center">
              Temperature :<span> {props.temprature}</span>
            </p>
          )}
          <div className="w-100" />
          {props.city && (
            <p className="form-control text-center">
              City :<span> {props.city}</span>
            </p>
          )}
          <div className="w-100" />
          {props.country && (
            <p className="form-control text-center">
              Country :<span> {props.country}</span>
            </p>
          )}
          <div className="w-100" />
          {props.humidity && (
            <p className=" form-control text-center">
              Humidity :<span> {props.humidity}</span>
            </p>
          )}
          <div className="w-100" />
          {props.description && (
            <p className="form-control text-center">
              Description :<span> {props.description}</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Weather;

// <div>
// {props.temprature && (
//   <p>
//     Temperature :<span> {props.temprature}</span>
//   </p>
// )}
// {props.city && (
//   <p>
//     City :<span> {props.city}</span>
//   </p>
// )}
// {props.country && (
//   <p>
//     Country :<span> {props.country}</span>
//   </p>
// )}
// {props.humidity && (
//   <p>
//     Humidity :<span> {props.humidity}</span>
//   </p>
// )}
// {props.description && (
//   <p>
//     Description :<span> {props.description}</span>
//   </p>
// )}
// {props.error && (
//   <p>
//     Error :<span> {props.error}</span>
//   </p>
// )}
// </div>
