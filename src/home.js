import interiorImage from './images/interior.jpg'

export default function loadBar() {
    const content = document.getElementById('content');
    content.innerHTML = '';
    
    const barDiv = document.createElement('div');
    barDiv.classList.add('tab-content');
    barDiv.id = 'home';

   document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)), url(${interiorImage})`;
   document.body.style.backgroundSize = 'cover';
   document.body.style.backgroundPosition = 'center';
   document.body.style.backgroundAttachment = 'fixed';
   document.body.style.backgroundBlendMode = 'overlay';
    
    barDiv.innerHTML = `
        <h2>BAR</h2>
        
        <p class="section-head">WINE</p>
        
        <div class="menu-item">
            <span class="item-name">
                <span>No es Pituko</span>
                <span>Cabernet Franc</span>
            </span>
            <span class="item-detail">Curicó Valley, Chile</span>
            <span class="item-price">14 / 48</span>
        </div>
        <div class="menu-item">
            <span class="item-name">
                <span>No es Pituko</span>
                <span>Viognier</span>
            </span>
            <span class="item-detail">Curicó Valley, Chile</span>
            <span class="item-price">13 / 44</span>
        </div>
        <div class="menu-item">
            <span class="item-name">
                <span>The Marigny</span>
                <span>Pinot Noir</span>
            </span>
            <span class="item-detail">Willamette Valley, OR</span>
            <span class="item-price">17 / 62</span>
        </div>
        <div class="menu-item">
            <span class="item-name">
                <span>The Marigny</span>
                <span>Gamay</span>
            </span>
            <span class="item-detail">Willamette Valley, OR</span>
            <span class="item-price">16 / 58</span>
        </div>
        <div class="menu-item">
            <span class="item-name">
                <span>The Marigny</span>
                <span>Chardonnay</span>
            </span>
            <span class="item-detail">Willamette Valley, OR</span>
            <span class="item-price">15 / 54</span>
        </div>
        <div class="menu-item">
            <span class="item-name">
                <span>Hervé Villemade</span>
                <span>Les Acacias</span>
            </span>
            <span class="item-detail">Cour-Cheverny, France</span>
            <span class="item-price">17 / 60</span>
        </div>
        <div class="menu-item">
            <span class="item-name">
                <span>La Famille Mosse</span>
                <span>Les Bonnes</span>
            </span>
            <span class="item-detail">Anjou, France</span>
            <span class="item-price">18 / 64</span>
        </div>
        <div class="menu-item">
            <span class="item-name">
                <span>Matassa</span>
                <span>Cuvée Alexandria</span>
            </span>
            <span class="item-detail">Côtes Catalanes, France</span>
            <span class="item-price">16 / 56</span>
        </div>
        <div class="menu-item">
            <span class="item-name">
                <span>Puzelat</span>
                <span>Le Clos du Tue-Bœuf</span>
            </span>
            <span class="item-detail">Loire Valley, France</span>
            <span class="item-price">15 / 52</span>
        </div>
        <div class="menu-item">
            <span class="item-name">
                <span>Yvon Métras</span>
                <span>Beaujolais</span>
            </span>
            <span class="item-detail">Beaujolais, France</span>
            <span class="item-price">17 / 60</span>
        </div>
        <div class="menu-item">
            <span class="item-name">
                <span>Vinea Domini</span>
                <span>Malvasia</span>
            </span>
            <span class="item-detail">Lazio, Italy</span>
            <span class="item-price">13 / 46</span>
        </div>
        <div class="menu-item">
            <span class="item-name">
                <span>Filarole</span>
                <span>Fatto Coi Piedi</span>
            </span>
            <span class="item-detail">Emilia-Romagna, Italy</span>
            <span class="item-price">15 / 52</span>
        </div>
        <div class="menu-item">
            <span class="item-name">
                <span>Orbelus</span>
                <span>Melnik 2014</span>
            </span>
            <span class="item-detail">Bulgaria</span>
            <span class="item-price">14 / 48</span>
        </div>
        <div class="menu-item">
            <span class="item-name">
                <span>Diez Siglos</span>
                <span>Verdejo</span>
            </span>
            <span class="item-detail">Rueda, Spain</span>
            <span class="item-price">11 / 38</span>
        </div>
        <div class="menu-item">
            <span class="item-name">
                <span>Subject to Change</span>
                <span>(orange)</span>
            </span>
            <span class="item-detail">California</span>
            <span class="item-price">16 / 56</span>
        </div>
        <div class="menu-item">
            <span class="item-name">
                <span>Lemelson</span>
                <span>Pinot Noir</span>
            </span>
            <span class="item-detail">Willamette Valley, OR</span>
            <span class="item-price">17 / 62</span>
        </div>
        
        <p class="section-head">COCKTAILS</p>
        <div class="menu-item">
            <span class="item-name">Negroni</span>
            <span class="item-price">14</span>
        </div>
        <div class="menu-item">
            <span class="item-name">Old Fashioned</span>
            <span class="item-price">15</span>
        </div>
        <div class="menu-item">
            <span class="item-name">Gin & Tonic (ask about the gin)</span>
            <span class="item-price">13</span>
        </div>
        <div class="menu-item">
            <span class="item-name">Something seasonal</span>
            <span class="item-price">14</span>
        </div>
        
        <p class="section-head">BEER</p>
        <div class="menu-item">
            <span class="item-name">Rainier</span>
            <span class="item-price">6</span>
        </div>
        <div class="menu-item">
            <span class="item-name">Rainier Pale Mountain Ale</span>
            <span class="item-price">7</span>
        </div>
        <div class="menu-item">
            <span class="item-name">Local IPA (rotating)</span>
            <span class="item-price">8</span>
        </div>
        
        <p class="note">No specials for the moment</p>
    `;
    
    content.appendChild(barDiv);
}