import React from 'react'
import {render, fireEvent,  screen} from '@testing-library/react'
import HeroSlider from './HeroSlider'

import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'


test('check if there is slider', async () => {
    render(   <HeroSlider /> );
   const search = screen.getByText(/HIS WEEK! IN STAR WARS/i)
expect(search).toBeInTheDocument()
})

test('check if slider is visiblefiles', async () => {
    render(   <HeroSlider /> );
   const search = screen.getByText(/HIS WEEK! IN STAR WARS/i)
expect(search).toBeVisible()
})

test('check if slider changing slides', async () => {
    render(   <HeroSlider /> );
    const slider = screen.getByTestId( "sliderChanger");
    const sliderduo = screen.getByTestId( "sliderduo");

        const areaOfSlides = screen.getByTestId( "areaOfSlide");
    fireEvent.click(slider);
    expect( areaOfSlides.querySelector('.testone')).toBeInTheDocument()
    fireEvent.click(sliderduo);
    expect( areaOfSlides.querySelector('.testone')).toBeNull()

})