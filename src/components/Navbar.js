import './Navbar.css';
import homeIcon from '../assets/Home.svg'

const placeholderTitles = ['PLACEHOLDER TITLE', 'PLACEHOLDER TITLE', 'PLACEHOLDER TITLE'];
const placeholderSubTitles = ['Placeholder title', 'Placeholder title', 'Placeholder title', 'Placeholder title'];

export const Navbar = () => {
    return (
        <div class="navbar-container p-4">
            <div class="container d-flex flex-column justify-content-center">
                <div class="web-nav-container">
                    <div class="dropdown-item d-flex justify-content-end gap-3">
                        {placeholderTitles.map((title, index) => (
                            <div class="dropdown" key={index}>
                                <button
                                    id={`dLabel-${index}`}
                                    type="button"
                                    class="btn btn-link dropdown-toggle text-white text-decoration-none button-text"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    style={{ fontFamily: "YourCustomFont-medium" }}
                                >
                                    {title}
                                </button>
                            </div>
                        ))}
                        <div class="sign-in-button">
                            <button type="button" class="btn btn-outline-light rounded-5 button-text" style={{ fontFamily: "YourCustomFont-bold" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" heigth="18" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                                SIGN IN
                            </button>
                        </div>
                    </div>
                </div>
                <div class="sub_tiles d-flex text-white justify-content-end">
                    {placeholderSubTitles.map((item, index) => (
                        <div key={index} class="" style={{ fontFamily: "YourCustomFont" }}>
                            {item}
                        </div>
                    ))}
                </div>
            </div>
            <div class="svg-container d-flex justify-content-end">
                <img src={homeIcon} alt="home icon" style={{ width: "25px", height: "25px" }} />
            </div>
        </div>
    );
};
