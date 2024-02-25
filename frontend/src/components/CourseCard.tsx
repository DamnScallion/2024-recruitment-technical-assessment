import React from 'react'
import { Card, CardContent, Typography, Chip, Box, Rating } from '@mui/material'
import { Course } from '../types/Course'

interface CourseCardProps {
  course: Course
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const { course_prefix, course_code, course_title, average_stars, total_reviews, offered_terms } = course

  return (
    <Card sx={{ m: 2, borderRadius: 2 }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant='h6' fontWeight={900}>
            {`${course_prefix}${course_code}`}
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', mt: 0.4 }}>
            <Rating name='read-only' value={average_stars} precision={0.5} readOnly sx={{ color: '#b789e5' }}/>
            <Typography variant='caption' color='text.secondary' sx={{ ml: 0.5 }}>
              {`${total_reviews} reviews`}
            </Typography>
          </Box>
        </Box>
        <Typography variant='body2' color='#000' sx={{ mt: 3, mb: 6 }}>
          {course_title}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
          {offered_terms.map((term) => (
            <Chip key={term} label={term} size='small' sx={{ background: '#ccebf6' }}/>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default CourseCard
