import React, { Component, Children, useEffect, useRef } from "react";

let SPEED = 1;
let FACTOR = 0.1;
let SPREAD = 10;

// class SliderCarousel extends Component {
const SliderCarousel = ({ children }) => {

    children = Children.toArray(children)

    let cardDOMArray = []
    let canScroll = true;

    let i = 0
    let ChildList = children.map(Child => {

        let r = React.createRef();;
        cardDOMArray.push(r)
        return (
            <div key={Math.random() * 1000} ref={r} className="rotating-el"

            >
                {Child}
            </div>
        )
    })

    let mid = Math.floor(cardDOMArray.length / 2);



    // if (cardDOMArray[mid].current && canScroll) {

    //     cardDOMArray[mid].current.style.height = `100%`
    //     cardDOMArray[mid].current.style.width = `60%`
    //     cardDOMArray[mid].current.style.zIndex = `${mid + 1}`
    //     cardDOMArray[mid].current.style.left = `${50 - parseInt(cardDOMArray[mid].current.style.width) / 2}%`

    // }

    //! ref gets current object as child element after React Mounts the element over DOM, before that, it is empty
    //! So, Ref can only be accessed as DOM element inside useEffect hook, as it runs after the rendering process in function based components


    useEffect(() => {
        let g = setInterval(() => {


            cardDOMArray[mid].current.style.height = `100%`
            cardDOMArray[mid].current.style.width = `60%`
            cardDOMArray[mid].current.style.zIndex = `${mid + 1}`
            cardDOMArray[mid].current.style.left = `${50 - parseInt(cardDOMArray[mid].current.style.width) / 2}%`

            let [mid_left, mid_height, mid_width, mid_zIndex]
                = [parseInt(cardDOMArray[mid].current.style.left),
                parseInt(cardDOMArray[mid].current.style.height),
                parseInt(cardDOMArray[mid].current.style.width),
                parseInt(`${mid + 1}`)];


            let [unit_Left, unit_Height, unit_Width, unit_Zindex]
                = [parseInt(mid_left) * FACTOR,
                parseInt(mid_height) * FACTOR,
                parseInt(mid_width) * FACTOR,
                    1];


            SPREAD = -(mid_left + Math.abs(mid * unit_Width) / 2) / (mid * unit_Left)


            for (let index = 0; index < cardDOMArray.length; index++) {
                const element = cardDOMArray[index];

                let i = index - mid;
                // console.log(i)

                // console.log([i, `${(mid_left + i * unit_Left)}%`, `${(mid_height - Math.abs(i * unit_Height))}%`, `${(mid_zIndex - Math.abs(i * unit_Zindex))}`, element])

                element.current.style.left = `${(mid_left + i * unit_Left * SPREAD + Math.abs(i * unit_Width) / 2)}%`
                element.current.style.height = `${(mid_height - Math.abs(i * unit_Height))}%`
                element.current.style.width = `${(mid_width - Math.abs(i * unit_Width))}%`
                element.current.style.zIndex = `${(mid_zIndex - Math.abs(i * unit_Zindex))}`
            }

            rotateRight(cardDOMArray)
            // rotateLeft(cardDOMArray)

        }, SPEED * 1000)

        function rotateLeft(cardDOMArray){
            cardDOMArray.unshift(cardDOMArray.pop())
        }

        function rotateRight(cardDOMArray){
            cardDOMArray.push(cardDOMArray.shift())
        }

        return (() => {
            clearInterval(g)
        })
    })


    return (<div className="rotating-container"
        onMouseEnter={() => canScroll = !canScroll}
        onMouseLeave={() => canScroll = !canScroll}
    >
        {ChildList}
    </div>)

};

export default SliderCarousel;