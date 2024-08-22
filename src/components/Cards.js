import React from 'react'
import img1 from "../assets/creditPerMonth.svg"
import img2 from "../assets/rolloverOfUnusedCredits.svg"
import img3 from "../assets/MMRPerks.svg"
import img4 from "../assets/100Flexible.svg"
import img5 from "../assets/discountOnFoodAndBeverages.svg"
import img6 from "../assets/convenienceFee.svg"
import './Benefits.css'
export const Cards = ({ className }) => {
    const cards = [
        {
            image: img1,
            alt: "1 Credit per month",
            sub_title: "1 credit per month",
            description: "One 2D standard movie per month1"
        },
        {
            image: img2,
            alt: "Rollover of unused credts",
            sub_title: "Free rollover of unused credits",
            description: "Unused credits will be combined the following month"
        },
        {
            image: img3,
            alt: "MMR perks",
            sub_title: "All MMR perks included",
            description: "+ benefits"
        },
        {
            image: img4,
            alt: "100% Flexible",
            sub_title: "100% Flexible",
            description: "Cancel anytime"
        },
        {
            image: img5,
            alt: "20% Discount on all Food and Beverages",
            sub_title: "20% Discount on all Food and Beverages",
            description: "Excluding alcohol"
        },
        {
            image: img6,
            alt: "Zero convenience fee",
            sub_title: "O Convenience Fees",
            description: "Waived on all days on any tickets purchase"
        }
    ]
    return (
        <div class={`row ${className}`}>
            {cards.map((card, index) => (
                <div key={index} className="sub-card">
                    <div>
                        <img src={card.image} alt={card.alt} className="card-img-top" />
                    </div>
                    <div className="sub-card-content">
                        <h5 className="sub-card-title" style={{ fontFamily: "YourCustomFont-bold" }}>{card.sub_title}</h5>
                        <p className="sub-card-description" style={{ fontFamily: "YourCustomFont" }}>{card.description}</p>
                    </div>
                </div>
            ))}
            <div class="web-note-container">
                <p class="paragraph-text" style={{ fontFamily: "YourCustomFont" }}>
                    <sup>1</sup>Excludes IMAX and DBOX formats. No fees apply to Passport Credits only. Other fees apply to full priced tickets.
                </p>
                <p class="paragraph-text" style={{ fontFamily: "YourCustomFont" }}>
                    <sup>2</sup>Excludes alcoholic beverages
                </p>
            </div>
        </div>
    )
}
