// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const showPricingButton = document.getElementById('show-pricing');
    const pricingSection = document.getElementById('pricing-section');

    showPricingButton.addEventListener('click', () => {
        // Adiciona a classe 'show' para exibir a seção de preços com animação
        pricingSection.classList.toggle('show');
    });
});
