import './Benefits.css';
import img from '../assets/teenyicons_star-solid-1.svg';
import { Cards } from './Cards';

const subscriptionDetails = [
    "MVP Subscription provides the member 1 movie credit per month",
    "They can avail it at any Marcus theatre or Movie Tavern",
    "Members earn 100 points and get a $5 reward redeemable on food & beverages + many more benefits"
];

const StarIcon = () => <img src={img} alt="star" className="image-container" />;

const BenefitsHeader = ({ isMobile }) => (
    <div className={isMobile ? "mobile-view-benefits-header" : "web-view-benefits-header"}>
        {isMobile ? (
            <div className="d-flex justify-content-center gap-2">
                <StarIcon />
                <h5 className="card-title" style={{ fontFamily: "YourCustomFont-medium", fontSize: '17px' }}>Reel Deal Monthly Movies</h5>
                <StarIcon />
            </div>
        ) : (
            <div className="star-container">
                <div className="one-star">
                    <img src={img} alt="star" className="one-star-image-container" />
                </div>
                <div className="two-stars">
                    <StarIcon />
                    <StarIcon />
                </div>
            </div>
        )}
        {!isMobile &&
            (<div className="card-body">
                <h5 className="card-title" style={{ fontFamily: "YourCustomFont-medium" }}>
                    Reel Deal Monthly Movies
                </h5>

            </div>)
        }
        <p className="card-text" style={{ fontFamily: "YourCustomFont-light" }}>
            Your flexible monthly membership to the latest movies
        </p>
    </div>
);

const SubscriptionItem = ({ index, detail }) => (
    <li key={index} className="list_item_container">
        <div className="items" style={{ fontFamily: "YourCustomFont" }}>
            <div className="inner-items">
                <p style={{ marginTop: '3px' }}>{index + 1}</p>
            </div>
            {index < subscriptionDetails.length - 1 && (
                <div style={{
                    position: "absolute",
                    left: "-2rem",
                    top: "0px",
                    display: "flex",
                    justifyContent: 'center',
                    width: '2rem',
                    bottom: '-2.5rem',
                    marginTop: '1rem',
                    zIndex: '1'
                }}>
                    <div style={{ width: '1px', paddingTop: '1rem', backgroundColor: '#9d8b78' }} />
                </div>
            )}
        </div>
        <div>
            <p className="mvp_description" style={{ fontFamily: "YourCustomFont-light" }}>{detail}</p>
        </div>
    </li>
);

export const Benefits = () => (
    <div className="benefits-container">
        <div className="card">
            <div>
                <BenefitsHeader isMobile={false} />
                <BenefitsHeader isMobile={true} />
                <Cards className="mobile-cards" />
            </div>
            <div>
                <div className="mvp_container">
                    <div className="mvp_title" style={{ fontFamily: "YourCustomFont-medium" }}>What is MVP Subscription?</div>
                    <ul className="unordered-list">
                        {subscriptionDetails.map((detail, index) => (
                            <SubscriptionItem key={index} index={index} detail={detail} />
                        ))}
                    </ul>
                    <div className="d-flex gap-3 mvp-button-container">
                        <button type="button" className="btn btn-danger px-4" id="danger" style={{ fontFamily: "YourCustomFont-medium" }}>
                            Get Started {" "}
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </button>
                        <button type="button" className="btn btn-link text-white fs-5" id="link" style={{ fontFamily: "YourCustomFont" }}>Learn more</button>
                    </div>
                </div>
            </div>
        </div>
        <Cards className="group-cards" />
    </div>
);