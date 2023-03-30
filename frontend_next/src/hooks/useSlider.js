export const useSlider = (slider) => {
    const slideLenght = slider?.length

    // console.log({slider})

    function setNextSlide(){}
    function setPreviusSlide(){}

    // React.Children.forEach(children, (child) => console.log(child))

    return [slideLenght, setNextSlide, setPreviusSlide]
}