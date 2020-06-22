import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Slideshow from '../slide-show/Slideshow';
import './MainContent.scss';
import Paginate from '../paginate/Paginate';
import Grid from '../grid/Grid';
import { IMAGE_URL } from '../../../services/movies.service';

const MainContent = (props) => {
  const { list, page, totalPages } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [slideshowImages, setSlideshowImages] = useState([]);

  const paginate = (type) => {
    if (type === 'prev' && currentPage >= 1) {
      setCurrentPage((prev) => prev - 1);
    } else {
      setCurrentPage((prev) => prev + 1);
    }
  };
  const randomMovies = list.sort(() => Math.random() - Math.random()).slice(0, 4);
  useEffect(() => {
    if (randomMovies.length) {
      const IMAGES = [
        {
          id: 1,
          url: `${IMAGE_URL}/${randomMovies[0].backdrop_path}`,
        },
        {
          id: 2,
          url: `${IMAGE_URL}/${randomMovies[1].backdrop_path}`,
        },
        {
          id: 3,
          url: `${IMAGE_URL}/${randomMovies[2].backdrop_path}`,
        },
        {
          id: 4,
          url: `${IMAGE_URL}/${randomMovies[3].backdrop_path}`,
        },
      ];
      setSlideshowImages(IMAGES);
    }
  }, [list]);

  const imagesArray = [
    {
      url: 'https://images.pexels.com/photos/688574/pexels-photo-688574.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      rating: 2.5,
    },
    {
      url: 'https://images.pexels.com/photos/688574/pexels-photo-688574.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      rating: 8.5,
    },
    {
      url: 'https://images.pexels.com/photos/776653/pexels-photo-776653.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      rating: 7.8,
    },
    {
      url: 'https://images.pexels.com/photos/776653/pexels-photo-776653.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      rating: 9.7,
    },
    {
      url: 'https://images.pexels.com/photos/776653/pexels-photo-776653.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      rating: 6.5,
    },
    {
      url: 'https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      rating: 8.5,
    },
    {
      url: 'https://images.pexels.com/photos/688574/pexels-photo-688574.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      rating: 5.5,
    },
    {
      url: 'https://images.pexels.com/photos/688574/pexels-photo-688574.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      rating: 8.5,
    },
    {
      url: 'https://images.pexels.com/photos/776653/pexels-photo-776653.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      rating: 7.8,
    },
    {
      url: 'https://images.pexels.com/photos/776653/pexels-photo-776653.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      rating: 9.7,
    },
    {
      url: 'https://images.pexels.com/photos/776653/pexels-photo-776653.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      rating: 6.5,
    },
    {
      url: 'https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      rating: 8.5,
    },
    {
      url: 'https://images.pexels.com/photos/688574/pexels-photo-688574.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      rating: 5.5,
    },
    {
      url: 'https://images.pexels.com/photos/688574/pexels-photo-688574.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      rating: 8.5,
    },
    {
      url: 'https://images.pexels.com/photos/776653/pexels-photo-776653.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      rating: 7.8,
    },
    {
      url: 'https://images.pexels.com/photos/776653/pexels-photo-776653.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      rating: 9.7,
    },
    {
      url: 'https://images.pexels.com/photos/776653/pexels-photo-776653.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      rating: 6.5,
    },
    {
      url: 'https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      rating: 8.5,
    },
  ];
  return (
    <div className="main-content">
      <Slideshow images={slideshowImages} auto={true} showArrows={true} />
      <div className="grid-movie-title">
        <div className="movieType">Now Playing</div>
        <div className="paginate">
          <Paginate currentPage={page} totalPages={totalPages} paginate={paginate} />
        </div>
      </div>
      <Grid images={imagesArray} />
    </div>
  );
};

MainContent.propTypes = {
  list: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  list: state.movies.list,
  totalPages: state.movies.totalPages,
  page: state.movies.page,
});

export default connect(mapStateToProps)(MainContent);
