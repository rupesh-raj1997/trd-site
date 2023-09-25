import './Header.scss';

export default () => (
    <div className='header-wrapper'>

        <div className='header-logo--wrapper'>
            <img className='header-logo' src='./assets/Flipkart_logo-2x.png' />
        </div>

        <div className='header-content'>
            <div className='header-name'>
                <h3>Pay Cycle: 31-May-2021 to 31-June-2021</h3>
                <h4>Amazon India Pvt Ltd <span></span></h4>
            </div>
            <div className='header-actions-wrapper'>
                <div className='header-action support'>
                    <img className='header-action-icon' src="./assets/Group2x.png" />
                    <span className='header-action-name'>SUPPORT</span>
                </div>
                <div className='header-action notification'>
                    <img className='header-action-icon' src="./assets/help_outline.png" />
                    <span className='header-action-name'>NOTIFICATIONS</span>
                </div>
                <div className='header-action profile'>
                    <span className='profile-logo'>R</span>
                </div>
            </div>

        </div>

    </div>
)