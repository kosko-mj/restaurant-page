import exteriorImage from './images/exterior.jpg';

export default function loadAbout() {
    const content = document.getElementById('content');
    content.innerHTML = '';
    
    const aboutDiv = document.createElement('div');
    aboutDiv.classList.add('tab-content');
    aboutDiv.id = 'about';
    aboutDiv.style.textAlign = 'center';
    
    document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${exteriorImage})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundAttachment = 'fixed';
    
    aboutDiv.innerHTML = `
        <h2>INFO</h2>
        
        <p class="section-head">THE SPACE</p>
        <p>Six Ate opened in 2010 in a building that's housed a bar since 1963.<br>
        We didn't change much. Same tile. Same bar. Same ghosts.</p>
        
        <p>The menu changes with the seasons, with the weather,<br>
        with whatever looked good at the market that morning.</p>
        
        <p>We pour natural wine. We make cocktails that taste like cocktails.<br>
        We keep Rainier cold. We close when you leave.</p>
        
        <p>No reservations. No dress code. No attitude.</p>
        
        <p class="section-head">HOURS</p>
        <p>Tuesday–Sunday: 5pm - 2am<br>Monday: closed</p>
        
        <p class="section-head">GETTING HERE</p>
        <p>We're on California Ave, between Alaska and Edmunds.<br>
        Street parking is limited. Uber or Lyft is easier.<br>
        The 50 bus stops at the corner. The RapidRide C Line is a few blocks away.</p>
        <p>If you drive, don't leave anything visible in your car.<br>
        It's a city. It happens.</p>
        
        <p class="section-head">ADDRESS</p>
        <p>4523 California Ave SW<br>
        Seattle, WA 98116</p>
    `;
    
    content.appendChild(aboutDiv);
}