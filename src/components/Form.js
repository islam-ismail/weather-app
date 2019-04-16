import React from "react";

const Form = props => {
  return (
    <div className="card card-body my-3">
      <form onSubmit={props.getWeather} className="mx-auto">
        <div className="input-group">
          <div className="input-group-prepend" />
          <input
            type="text"
            className="form-control text-capitalize"
            placeholder="insert city name..."
            name="city"
            // value={item}
            // onChange={handleChange}
            required
          />
          <input
            type="text"
            className="form-control text-capitalize"
            placeholder="insert country name..."
            name="country"
            // value={item}
            // onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-block btn-primary mt-3">
          Get Weather
        </button>
      </form>
    </div>
  );
};

export default Form;

/* <form onSubmit={props.getWeather}>
<input type="text" name="city" placeholder=" Enter city name..." />
<input type="text" name="country" placeholder="Enter country name..." />
<button>Get Weather</button>
</form> */
