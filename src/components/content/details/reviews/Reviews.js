import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './Reviews.scss';

const Reviews = (props) => {
  const { movie } = props;
  const [reviews] = useState(movie[4]);

  return (
    <>
      <div className="movie-reviews">
        <div className="div-title">Reviews {reviews.results.length > 0 ? reviews.results.length : ''}</div>
        {reviews.results.length ? (
          reviews.results.map((data) => (
            <div className="reviews" key={data.id}>
              <h3>{data.author}</h3>
              <div>{data.content}</div>
            </div>
          ))
        ) : (
          <p>No reviews to show</p>
        )}
      </div>
    </>
  );
};

Reviews.propTypes = {
  movie: PropTypes.array,
};

const mapStateToProps = (state) => ({
  movie: state.movies.movie,
});

export default connect(mapStateToProps, {})(Reviews);
