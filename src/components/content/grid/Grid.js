/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Grid.scss';
import Rating from '../rating/Rating';
import { IMAGE_URL } from '../../../services/movies.service';

const Grid = (props) => {
  const { list } = props;
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    setMovieData(list);
  }, [list]);

  return (
    <>
      <div className="grid">
        {movieData.map((data) => (
          <div key={data.id}>
            <div className="grid-cell" style={{ backgroundImage: `url(${IMAGE_URL}/${data.poster_path})` }}>
              <div className="grid-read-more">
                <button className="grid-cell-button">Read More</button>
              </div>
              <div className="grid-detail">
                <span className="grid-detail-title">{data.title}</span>
                <div className="grid-detail-rating">
                  <Rating rating={data.vote_average} totalStars={10} />
                  &nbsp;&nbsp;
                  <div className="grid-vote-average">{data.vote_average}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

Grid.propTypes = {
  list: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  list: state.movies.list,
});

export default connect(mapStateToProps)(Grid);
