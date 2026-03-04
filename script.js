// Efeito de entrada suave nos links
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.link-card');
    
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 150);
    });
});

// Exemplo de rastreio de clique (pode ser enviado para um banco de dados ou API)
function trackClick(linkName) {
    console.log(`Usuário clicou em: ${linkName}`);
}