import React, { useRef, useEffect, useState } from 'react';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import './HomeVideoSlider.css';

const VideoSlider = ({ videos }) => {
  const [playing, setPlaying] = useState(true);
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    customPaging: i => (
      <div className="custom-dot"></div>
    ),
    dotsClass: "slick-dots custom-dots",
    afterChange: current => {
      if (sliderRef.current && sliderRef.current.innerSlider) {
        const video = sliderRef.current.innerSlider.list.querySelector(`video[data-index="${current}"]`);
        if (video) {
          video.play().catch(error => {
            console.error('Error trying to play video:', error);
          });
        }
      }
    }
  };

  useEffect(() => {
    if (sliderRef.current && sliderRef.current.innerSlider) {
      const firstVideo = sliderRef.current.innerSlider.list.querySelector('video');
      if (firstVideo) {
        firstVideo.play().catch(error => {
          console.error('Error trying to play initial video:', error);
        });
      }
    }
  }, []);

  return (
    <Box sx={{ position: 'relative', width: '100%', height: '80vh', mb: 2 }}>
      <Slider ref={sliderRef} {...settings}>
        {videos.map((video, index) => (
          <Box key={index} sx={{ position: 'relative', height: '100%' }}>
            <video
              data-index={index}
              src={video.video}
              autoPlay
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onEnded={() => {
                if (sliderRef.current) {
                  sliderRef.current.slickNext();
                }
              }}
              muted
              playsInline
            />
            <Box
              sx={{
                position: 'absolute',
                top: { xs: '60%', sm: '50%' },
                left: { xs: '50%', sm: 'auto' },
                right: { xs: 'auto', sm: 16 },
                transform: { xs: 'translate(-50%, -50%)', sm: 'translateY(-50%)' },
                color: "white",
                padding: { xs: 1, sm: 2 },
                borderRadius: 1,
                width: { xs: '80%', sm: '30%' },
                textAlign: { xs: 'center', sm: 'left' },
                
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                {video.heading}
              </Typography>
              <Typography variant="h6" sx={{ mt: 1 }}>
                {video.content}
              </Typography>
              <Typography variant="h6" sx={{ mt: 0.5 }}>
                {video.subContent}
              </Typography>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default VideoSlider;
