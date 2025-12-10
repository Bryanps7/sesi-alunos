
document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.getElementById('gallery');
    
    // Configurações do Padrão
    const startNumber = 1;
    const endNumber = 210;
    const extension = 'jpg';
    
    // IMPORTANTE: Defina o caminho base onde as imagens estão hospedadas.
    // Se elas estiverem na raiz do seu site: '' ou '/'
    // Se estiverem em uma pasta 'imagens/': 'imagens/'
    const imageBasePath = '/assets/img/final/'; 

    /**
     * Gera e exibe a galeria de imagens baseada no padrão numérico.
     */
    function generateGallery() {
        const fragment = document.createDocumentFragment();

        for (let i = startNumber; i <= endNumber; i++) {
            // 1. Constrói o nome completo do arquivo com base no padrão:
            // Exemplo: 'img (1).jpg'
            const fileName = `img (${i}).${extension}`;
            
            // 2. Constrói o caminho completo (URL) do arquivo:
            const fullPath = imageBasePath + fileName;

            // 3. Cria os elementos HTML
            
            const container = document.createElement('div');
            container.className = 'image-container';

            const img = document.createElement('img');
            img.src = fullPath; // Define o caminho
            img.alt = fileName;
            img.loading = 'lazy'; // Otimiza o carregamento para tantas imagens

            const title = document.createElement('p');
            title.className = 'image-title';

            // 4. Monta o container
            container.appendChild(img);
            container.appendChild(title);
            
            fragment.appendChild(container);
        }
        
        // Insere todos os 280 elementos de uma vez, otimizando o desempenho
        galleryContainer.appendChild(fragment);
    }

    // Verifica se o container existe e inicia a geração
    if (galleryContainer) {
        generateGallery();
    }
});