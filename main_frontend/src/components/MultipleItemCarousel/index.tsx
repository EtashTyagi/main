import React from "react";
import Carousel from "react-material-ui-carousel";
import {CarouselProps} from "react-material-ui-carousel/dist/components/types";
import {Box, Stack} from "@mui/material";

export interface IMultipleItemCarouselProps extends CarouselProps {
    itemsPerPage: number
}

const MultipleItemCarousel = (props: IMultipleItemCarouselProps) => {
    const {children, itemsPerPage, ...propsWithoutChildren} = props
    const childArr = React.Children.toArray(children)
    const pages = Array(Math.ceil(childArr.length/itemsPerPage)).fill(undefined)
    const itemsOnPage = Array(itemsPerPage).fill(undefined)
    const itemsOnLastPage  = Array( (childArr.length % itemsPerPage) || itemsPerPage).fill(undefined)
    return (
        <Carousel {...propsWithoutChildren}
                  navButtonsAlwaysInvisible={props.navButtonsAlwaysInvisible || pages.length===1}
                  indicators={(props.indicators || props.indicators===undefined) && pages.length!==1}
                  index = {0}
        >
            {
                pages.map((e, pageNo) => (
                    <Stack direction={"row"} justifyContent={"space-evenly"} key={pageNo}>
                        {
                            (pageNo !== pages.length - 1) ?
                            itemsOnPage.map((e, itemNo) => (
                                <Box key={pageNo*itemsPerPage + itemNo}>
                                    {childArr[pageNo*itemsPerPage + itemNo]}
                                </Box>
                            )) :
                            itemsOnLastPage.map((e, itemNo) => (
                                <Box key={pageNo*itemsPerPage + itemNo}>
                                    {childArr[pageNo*itemsPerPage + itemNo]}
                                </Box>
                            ))
                        }
                    </Stack>
                ))
            }
        </Carousel>
    )
}

export default MultipleItemCarousel;