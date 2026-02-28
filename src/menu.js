export default function loadMenu() {
    const content = document.getElementById('content');
    content.innerHTML = '';
    
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('tab-content');
    menuDiv.id = 'menu';
    
    menuDiv.innerHTML = `
        <h2>KITCHEN</h2>
        
        <!-- SNACKS & RAW BAR -->
        <div class="menu-item-simple">Mixed nuts al pastor</div>
        
        <div class="menu-item-with-desc">
            <div class="item-name">Raw oysters</div>
            <div class="item-desc">Hama Hama (Hood Canal), Shigoku (Willapa Bay), Kumamoto (Oakland Bay) • cucumber mignonette, horseradish cream, lemon</div>
        </div>
        
        <div class="menu-item-with-desc">
            <div class="item-name">Marinated olives</div>
            <div class="item-desc">garlic, lemon, oregano, red pepper</div>
        </div>
        
        <!-- PÂTÉ & TARTARES -->
        <div class="menu-item-with-desc">
            <div class="item-name">Pork pâté</div>
            <div class="item-desc">pickled carrot & daikon, jalapeño, cilantro, toasted baguette</div>
        </div>
        
        <div class="menu-item-with-desc">
            <div class="item-name">Steak tartare</div>
            <div class="item-desc">fish sauce, lime, chile, shallot, mint, cilantro</div>
        </div>
        
        <!-- TOASTS & SMALL PLATES -->
        <div class="menu-item-with-desc">
            <div class="item-name">Anchovies</div>
            <div class="item-desc">furikake butter, toasted sourdough</div>
        </div>
        
        <div class="menu-item-with-desc">
            <div class="item-name">Sungold tomato confit</div>
            <div class="item-desc">pecorino, toasted sourdough</div>
        </div>
        
        <!-- SALADS & VEG -->
        <div class="menu-item-with-desc">
            <div class="item-name">White bean & tuna salad</div>
            <div class="item-desc">lemon zest, olive oil</div>
        </div>
        
        <div class="menu-item-with-desc">
            <div class="item-name">Green salad</div>
            <div class="item-desc">pumpkin seed dressing, cotija, roasted pumpkin seeds</div>
        </div>
        
        <div class="menu-item-with-desc">
            <div class="item-name">Wild mushroom larb</div>
            <div class="item-desc">chanterelles, oyster, lion's mane • fish sauce, lime, mint, cilantro, toasted rice, lettuce cups</div>
        </div>
        
        <!-- SANDWICHES & ENTRÉES -->
        <div class="menu-item-with-desc">
            <div class="item-name">Pimiento cheese sandwich</div>
            <div class="item-desc">cheddar, pepper jack, kewpie, Tim's dill pickle chips, milk bread</div>
        </div>
        
        <div class="menu-item-with-desc">
            <div class="item-name">Hanger steak</div>
            <div class="item-desc">grilled, salsa verde, crispy potatoes, watercress</div>
        </div>
        
        <div class="menu-item-with-desc">
            <div class="item-name">Local salmon</div>
            <div class="item-desc">roasted, fennel, citrus, brown butter, herbs</div>
        </div>
        
        <div class="menu-item-with-desc">
            <div class="item-name">Chicken</div>
            <div class="item-desc">red wine braised, bacon lardon, mushrooms, pearl onion</div>
        </div>
        
        <!-- CHEESE -->
        <div class="menu-item-with-desc">
            <div class="item-name">Little Island Creamery brie</div>
            <div class="item-desc">Tim's BBQ chips</div>
        </div>
        
        <div class="menu-item-with-desc">
            <div class="item-name">Samish Bay cheddar</div>
            <div class="item-desc">dill pickles</div>
        </div>
        
        <p class="note">No specials for the moment</p>
    `;
    
    content.appendChild(menuDiv);
}