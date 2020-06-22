import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { movieDetails } from '../../../redux/actions/movies';
import { IMAGE_URL } from '../../../services/movies.service';
import Spinner from '../../spinner/Spinner';
import Rating from '../rating/Rating';
import Crew from './crew/Crew';
import './Details.scss';
import Media from './media/Media';
import Overview from './overview/Overview';
import Reviews from './reviews/Reviews';
import Tabs from './tabs/Tabs';

const Details = (props) => {
  const { movieDetails, movie } = props;
  const [details, setDetails] = useState();
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    if (movie.length === 0) {
      movieDetails(id);
    }
    setDetails(movie[0]);
    // eslint-disable-next-line
  }, [id, movie]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        details && (
          <div className="movie-container">
            <div className="movie-bg" style={{ backgroundImage: `url(${IMAGE_URL}${details.backdrop_path})` }}></div>
            <div className="movie-overlay"></div>
            <div className="movie-details">
              <div className="movie-image">
                <img src={`${IMAGE_URL}${details.poster_path}`} alt="" />
              </div>
              <div className="movie-body">
                <div className="movie-overview">
                  <div className="title">
                    {details.title} <span>{details.release_date}</span>
                  </div>
                  <div className="movie-genres">
                    <ul className="genres">
                      {details.genres.map((genre) => (
                        <li key={genre.id}>{genre.name}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="rating">
                    <Rating className="rating-stars" rating={details.vote_average} totalStars={10} />
                    &nbsp;
                    <span>{details.vote_average}</span> <p>({details.vote_count}) reviews</p>
                  </div>
                  <Tabs>
                    <div label="Overview">
                      <Overview />
                    </div>
                    <div label="Crew">
                      <Crew />
                    </div>
                    <div label="Media">
                      <Media />
                    </div>
                    <div label="Reviews">
                      <Reviews />
                    </div>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};

Details.propTypes = {
  movie: PropTypes.array,
  movieDetails: PropTypes.func,
};

const mapStateToProps = (state) => ({
  movie: state.movies.movie,
});

export default connect(mapStateToProps, { movieDetails })(Details);
