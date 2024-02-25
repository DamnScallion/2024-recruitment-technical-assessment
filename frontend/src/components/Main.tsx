import React from 'react'
import { Container, Grid } from '@mui/material'
import Title from './Title'
import SearchBar from './SearchBar'
import CourseSorter from './CourseSorter'
import CourseCard from './CourseCard'
import courses from '../data/courses.json'

const Main: React.FC = () => (
  <Container sx={{ py: 3 }}>
    <Title />
    <SearchBar />
    <CourseSorter />
    <Grid container spacing={2}>
      {courses.map((course, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <CourseCard course={course} />
        </Grid>
      ))}
    </Grid>
  </Container>
)

export default Main
