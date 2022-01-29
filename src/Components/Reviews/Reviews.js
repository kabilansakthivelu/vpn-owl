import React, {useState, useEffect} from 'react';
import {AiFillCaretLeft, AiFillCaretRight} from 'react-icons/ai';
import './Reviews.css';

const Reviews = () => {

const [idToBeDisplayed, setIdToBeDisplayed] = useState(0);

const reviewContent = [{
    id: 0,
    content: "Top class experience overall - fast connectivity, so many region options, good internet speed after connecting, all things are very impressive.",
    author: "Nitin Gangwar",
    },
    {
    id: 1,
    content: "This is an amazing app to use in school to get around blocked sites just watch 10 (skippable)ads to get 10 hours of vpn time. This is an awesome app thanks!!",
    author: "Mr. Bread",
    },
    {
    id:2,
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam architecto aliquid consectetur error amet debitis voluptatum? Aliquam optio quas facere.",
    author: "Guest User",
    }]

// On clicking 'Previous' icon in carousel

const previousReview = () =>{
    if(idToBeDisplayed > 0){
    setIdToBeDisplayed(idToBeDisplayed-1);
    }
    else{
    setIdToBeDisplayed(2);
    }
}

// On clicking 'Next' icon in carousel

const nextReview = () =>{
    if(idToBeDisplayed < 2){
    setIdToBeDisplayed(idToBeDisplayed+1);
    }
    else{
    setIdToBeDisplayed(0);
    }
}

useEffect(()=>{
    let timer ;
    timer = setInterval(() => {
        if(idToBeDisplayed < 2){
        setIdToBeDisplayed(idToBeDisplayed+1);
        }
        else{
        setIdToBeDisplayed(0);
        }
    }, 3000);
    return(()=>{
        clearInterval(timer);
    })
}, [idToBeDisplayed])

return (
<div className="section" id="reviews">
<h1 className="sectionTitle">Reviews</h1>

{/* Carousel for displaying reviews */}

<div className="reviewSection">
<AiFillCaretLeft className="swipeIcons" onClick={previousReview}/>
<div className="review">
<p className="reviewContent">"{reviewContent[idToBeDisplayed].content}"</p>
<p className="reviewAuthor">- {reviewContent[idToBeDisplayed].author}</p>
</div>
<AiFillCaretRight className="swipeIcons" onClick={nextReview}/>
</div>

</div>
  );
};

export default Reviews;
