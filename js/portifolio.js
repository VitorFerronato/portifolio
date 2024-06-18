    document.addEventListener('DOMContentLoaded', () => {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');

        // Array para manter os filtros ativos
        let activeFilters = [];

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.dataset.filter;

                // Toggle do filtro ativo no array de filtros
                if (activeFilters.includes(filter)) {
                    activeFilters = activeFilters.filter(f => f !== filter);
                    button.classList.remove('active-filter');
                } else {
                    activeFilters.push(filter);
                    button.classList.add('active-filter');
                }

                // Se não houver filtros ativos, mostrar todos os projetos
                if (activeFilters.length === 0) {
                    projectCards.forEach(card => card.style.display = 'block');
                } else {
                    // Mostrar projetos que correspondem a qualquer filtro ativo
                    projectCards.forEach(card => {
                        const categories = card.dataset.category.split(',');

                        // Verificar se alguma das categorias do projeto está nos filtros ativos
                        const shouldShow = activeFilters.some(filter => categories.includes(filter));

                        if (shouldShow) {
                            card.style.display = 'block';
                        } else {
                            card.style.display = 'none';
                        }
                    });
                }
            });
        });
    });

