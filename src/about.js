export default function loadAbout() {
    const content = document.getElementById('content');
    content.innerHTML = '';
    
    const aboutDiv = document.createElement('div');
    aboutDiv.classList.add('tab-content');
    aboutDiv.id = 'about';
    aboutDiv.style.textAlign = 'center';  // ADD THIS
    
    aboutDiv.innerHTML = `
        <h2 style="text-align: center;">INFO</h2>
        
        <p style="text-align: center; margin: 0 0 1rem 0; line-height: 1.6;">21+ only. No exceptions.</p>
        
        <p class="section-head" style="text-align: center; margin: 2rem 0 0.5rem 0;">HOURS</p>
        <p style="text-align: center; margin: 0 0 1rem 0; line-height: 1.6;">Tuesday–Sunday: 5pm - 2am</p>
        
        <p class="section-head" style="text-align: center; margin: 2rem 0 0.5rem 0;">GETTING HERE</p>
        <p style="text-align: center; margin: 0 0 1rem 0; line-height: 1.6;">We're on California Ave, between Alaska and Edmunds.<br>
        Street parking is limited. Uber or Lyft is easier.<br>
        The 50 bus stops at the corner. The RapidRide C Line is a few blocks away.</p>
        <p style="text-align: center; margin: 0 0 1rem 0; line-height: 1.6;">If you drive, don't leave anything visible in your car.<br>
        It's a city. It happens.</p>
        
        <p class="section-head" style="text-align: center; margin: 2rem 0 0.5rem 0;">ADDRESS</p>
        <p style="text-align: center; margin: 0 0 1rem 0; line-height: 1.6;">4523 California Ave SW<br>
        Seattle, WA 98116</p>
    `;
    
    content.appendChild(aboutDiv);
}