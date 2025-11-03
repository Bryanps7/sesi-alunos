let alunos = [
    // "Agatha Iasmin Koschel do Nascimento",
    // "Ana Clara Furtado Goudinho",
    // "Arthur Alexandre Abbruzzini",
    // "Arthur Luiz Beccari",
    // "Arthur Marcos Serpa Martins",
    // "Arthur Soglia Veronica",
    // "Artur Ximendes Del Guerso",
    // "Augusto Gonçalves Dias",
    // "Brenda Julya de Souza Freitas da Silva",
    "Bryan Prinz da Silva",
    // "Daniel Domingos Pereira",
    // "Davi Schoenardie de Almeida",
    // "Eduardo Corrêa da Cruz",
    // "Eric Debarba Scapini",
    // "Érick Miguel Schuck",
    // "Francisco Lisboa da Silva Lima",
    // "Giovanni Felipe Burgo",
    // "Guilherme Tomaz Silva",
    // "Helena Neis da Silva",
    // "João Francisco Luchtenberg Ventura",
    // "João Paulo Fagundes",
    // "João Victor de Abreu Cunha",
    // "João Vitor Galiotto de Souza",
    // "João Vitor Santos",
    // "Jonas Luiz Marin",
    // "Lucas Pereira",
    // "Manuela Cristina Torres Guimarães",
    // "Mateus Queiroz Logrado",
    // "Mateus Zandona Krieger",
    "Nicollas José Prim",
    // "Nícollas Lopes do Nascimento",
    // "Pedro Rafael Santiago",
    // "Ruan Geraldo",
    // "Vinícius de Bona Ruas",
    // "Yan Bueno Goulart"
];

let dadosAlunos = {
    // "Agatha Iasmin Koschel do Nascimento": [
    //     "Feminino",
    //     "Dezembro de 2008",
    //     '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14208.002320945485!2d-48.62996773107285!3d-27.093277621506456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8b10cf4da0413%3A0x231d20d09ad9775c!2sItapema%2C%20SC%2C%2088220-000!5e0!3m2!1spt-BR!2sbr!4v1761046011586!5m2!1spt-BR!2sbr" width="80%" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    //     'purple',
    //     'Natureza',
    //     '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/7JWUQPmqTqujxJs82BWCpA?utm_source=generator" width="80%" height="100" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    //     0
    // ],
    // "Ana Clara Furtado Goudinho": [
    //     "Feminino",
    //     "Janeiro de 2008",
    //     '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28399.932419006625!2d-48.589466408831505!3d-27.156556011214292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8a59192f83479%3A0xb408dc5f7ad35162!2sPorto%20Belo%2C%20SC%2C%2088210-000!5e0!3m2!1spt-BR!2sbr!4v1761010581034!5m2!1spt-BR!2sbr" width="80%" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    //     '#c92093',
    //     'Desenvolvimento de Sistemas',
    //     '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/1yUm0iWD3rDf8dViBRpSkt?utm_source=generator" width="80%" height="100" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    //     1
    // ],
    // "Arthur Alexandre Abbruzzini": [
    //     "Masculino",
    //     "Agosto de 2007",
    //     '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113424.56218982358!2d-48.94637311374205!3d-27.32828312562523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94df50c40346a35b%3A0xa6d7717d5000efdf!2sS%C3%A3o%20Jo%C3%A3o%20Batista%20-%20SC!5e0!3m2!1spt-BR!2sbr!4v1761046481082!5m2!1spt-BR!2sbr" width="80%" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    //     '#FF0000',
    //     'Intervalo',
    //     '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/0upFohXrGxIIAjyaJmCkMU?utm_source=generator" width="80%" height="100" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    //     2
    // ],
    // "Arthur Luiz Beccari": [
    //     "Masculino",
    //     "Junho de 2007",
    //     '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28379.870351043755!2d-48.654605008634235!3d-27.23535228522384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8a96722683abb%3A0xd95794b9cc95d33f!2sTijucas%2C%20SC%2C%2088200-000!5e0!3m2!1spt-BR!2sbr!4v1761008478065!5m2!1spt-BR!2sbr" width="80%" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    //     'black',
    //     'Desenvolvimento de Sistemas',
    //     '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/7i1EsBBDoR8NDQqL8Smvh9?utm_source=generator" width="80%" height="100" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    //     3
    // ],
    // "Arthur Marcos Serpa Martins": [
    //     "Masculino",
    //     "Agosto de 2008",
    //     '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28399.932419006625!2d-48.589466408831505!3d-27.156556011214292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8a59192f83479%3A0xb408dc5f7ad35162!2sPorto%20Belo%2C%20SC%2C%2088210-000!5e0!3m2!1spt-BR!2sbr!4v1761010581034!5m2!1spt-BR!2sbr" width="80%" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    //     'yellow',
    //     'Desenvolvimento de Sistemas',
    //     '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/0vFOzaXqZHahrZp6enQwQb?utm_source=generator" width="80%" height="100" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    //     4
    // ],
    // "Arthur Soglia Veronica": [
    //     "Masculino",
    //     "Outubro de 2007",
    //     '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14208.002320945485!2d-48.62996773107285!3d-27.093277621506456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8b10cf4da0413%3A0x231d20d09ad9775c!2sItapema%2C%20SC%2C%2088220-000!5e0!3m2!1spt-BR!2sbr!4v1761046011586!5m2!1spt-BR!2sbr" width="80%" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    //     'purple',
    //     'Matemática',
    //     '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/4qVR3CF8FuFvHN4L6vXlB1?utm_source=generator" width="80%" height="100" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    //     5
    // ],
    // "Artur Ximendes Del Guerso": [
    //     "Masculino",
    //     "Maio de 2008",
    //     '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14208.002320945485!2d-48.62996773107285!3d-27.093277621506456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8b10cf4da0413%3A0x231d20d09ad9775c!2sItapema%2C%20SC%2C%2088220-000!5e0!3m2!1spt-BR!2sbr!4v1761046011586!5m2!1spt-BR!2sbr" width="80%" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    //     'black',
    //     'Humanas',
    //     '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/1zTGRPGqfZP0cfyTmoQP0V?utm_source=generator" width="80%" height="100" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    //     6
    // ],
    // "Augusto Gonçalves Dias": [
    //     "Masculino",
    //     "Fevereiro de 2008",
    //     '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14208.002320945485!2d-48.62996773107285!3d-27.093277621506456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8b10cf4da0413%3A0x231d20d09ad9775c!2sItapema%2C%20SC%2C%2088220-000!5e0!3m2!1spt-BR!2sbr!4v1761046011586!5m2!1spt-BR!2sbr" width="80%" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    //     'blue',
    //     'Desenvolvimento de Sistemas',
    //     '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/74Es0YAvJFbFCZ6ULMcydb?utm_source=generator" width="80%" height="100" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    //     7
    // ],
    // "Brenda Julya de Souza Freitas da Silva": [
    //     "Feminino",
    //     "Março de 2008",
    //     '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14208.002320945485!2d-48.62996773107285!3d-27.093277621506456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8b10cf4da0413%3A0x231d20d09ad9775c!2sItapema%2C%20SC%2C%2088220-000!5e0!3m2!1spt-BR!2sbr!4v1761046011586!5m2!1spt-BR!2sbr" width="80%" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    //     'black',
    //     'N/A',
    //     '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/0upFohXrGxIIAjyaJmCkMU?utm_source=generator" width="80%" height="100" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    //     8
    // ],
    "Bryan Prinz da Silva": [
        'Patotinha do Mal',
        'Masculino',
        3, 2008,
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28379.870351043755!2d-48.654605008634235!3d-27.23535228522384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8a96722683abb%3A0xd95794b9cc95d33f!2sTijucas%2C%20SC%2C%2088200-000!5e0!3m2!1spt-BR!2sbr!4v1761008478065!5m2!1spt-BR!2sbr" width="100" height="100" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        'Desenvolvimento de Sistemas',
        62.4, 162,
        9
    ],
    // "Daniel Domingos Pereira": [
    //     "Masculino",
    //     "Março de 2008",
    //     '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28379.870351043755!2d-48.654605008634235!3d-27.23535228522384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8a96722683abb%3A0xd95794b9cc95d33f!2sTijucas%2C%20SC%2C%2088200-000!5e0!3m2!1spt-BR!2sbr!4v1761008478065!5m2!1spt-BR!2sbr" width="80%" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    //     'violet',
    //     'Humanas',
    //     '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/4mCsFkDzm6z8j0glKdE164?utm_source=generator" width="80%" height="100" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    //     10
    // ],
    // "Davi Schoenardie de Almeida": [
    //     'Masculino',
    //     'Fevereiro de 2008',
    //     '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14208.002320945485!2d-48.62996773107285!3d-27.093277621506456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8b10cf4da0413%3A0x231d20d09ad9775c!2sItapema%2C%20SC%2C%2088220-000!5e0!3m2!1spt-BR!2sbr!4v1761046011586!5m2!1spt-BR!2sbr" width="80%" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    //     '#458ff7',
    //     'Humanas',
    //     '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/389QX9Q1eUOEZ19vtzzI9O?utm_source=generator" width="80%" height="100" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    //     11
    // ],
    // "Eduardo Corrêa da Cruz": [
    //     "Masculino",
    //     "Setembro de 2007",
    //     '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28379.870351043755!2d-48.654605008634235!3d-27.23535228522384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8a96722683abb%3A0xd95794b9cc95d33f!2sTijucas%2C%20SC%2C%2088200-000!5e0!3m2!1spt-BR!2sbr!4v1761008478065!5m2!1spt-BR!2sbr" width="80%" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    //     'blue',
    //     'Humanas',
    //     '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/1xEzF35lwCRRFEXWG08j8x?utm_source=generator" width="80%" height="100" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    //     12
    // ],
    // "Eric Debarba Scapini": [
    //     "Masculino",
    //     "Janeiro de 2008",
    //     '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14208.002320945485!2d-48.62996773107285!3d-27.093277621506456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8b10cf4da0413%3A0x231d20d09ad9775c!2sItapema%2C%20SC%2C%2088220-000!5e0!3m2!1spt-BR!2sbr!4v1761046011586!5m2!1spt-BR!2sbr" width="80%" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    //     'blue',
    //     'Desenvolvimento de Sistemas',
    //     '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/0Bo5fjMtTfCD8vHGebivqc?utm_source=generator" width="80%" height="100" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    //     13
    // ],
    // "Érick Miguel Schuck": [
    //     "Masculino",
    //     "Abril de 2008",
    //     '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14208.002320945485!2d-48.62996773107285!3d-27.093277621506456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8b10cf4da0413%3A0x231d20d09ad9775c!2sItapema%2C%20SC%2C%2088220-000!5e0!3m2!1spt-BR!2sbr!4v1761046011586!5m2!1spt-BR!2sbr" width="80%" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    //     'purple',
    //     'N/A',
    //     '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/2P4OICZRVAQcYAV2JReRfj?utm_source=generator" width="80%" height="100" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    //     14
    // ],
    // "Francisco Lisboa da Silva Lima": [
    //     "Masculino",
    //     "Janeiro de 2008",
    //     '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28379.870351043755!2d-48.654605008634235!3d-27.23535228522384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8a96722683abb%3A0xd95794b9cc95d33f!2sTijucas%2C%20SC%2C%2088200-000!5e0!3m2!1spt-BR!2sbr!4v1761008478065!5m2!1spt-BR!2sbr" width="80%" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    //     'blue',
    //     'Humanas',
    //     '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/48OuKgageBln1KdmYjBFG5?utm_source=generator" width="80%" height="100" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    //     15
    // ],
    // "Giovanni Felipe Burgo": [
    //     "Masculino",
    //     "Setembro de 2008",
    //     '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28399.932419006625!2d-48.589466408831505!3d-27.156556011214292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8a59192f83479%3A0xb408dc5f7ad35162!2sPorto%20Belo%2C%20SC%2C%2088210-000!5e0!3m2!1spt-BR!2sbr!4v1761010581034!5m2!1spt-BR!2sbr" width="80%" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    //     'gray',
    //     'Dormir',
    //     '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/7snQQk1zcKl8gZ92AnueZW?utm_source=generator" width="80%" height="100" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    //     16
    // ],
    // "Guilherme Tomaz Silva": [
    //     "Masculino",
    //     "Abril de 2008",
    //     '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28379.870351043755!2d-48.654605008634235!3d-27.23535228522384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8a96722683abb%3A0xd95794b9cc95d33f!2sTijucas%2C%20SC%2C%2088200-000!5e0!3m2!1spt-BR!2sbr!4v1761008478065!5m2!1spt-BR!2sbr" width="80%" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    //     '#81007f',
    //     'Desenvolvimento de Sistemas',
    //     '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/2jQ1P0aGT4WkNyJCeoQnb9?utm_source=generator" width="80%" height="100" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    //     17
    // ],
    // "Helena Neis da Silva": [
    //     "Feminino",
    //     "Abril de 2007",
    //     '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28399.932419006625!2d-48.589466408831505!3d-27.156556011214292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8a59192f83479%3A0xb408dc5f7ad35162!2sPorto%20Belo%2C%20SC%2C%2088210-000!5e0!3m2!1spt-BR!2sbr!4v1761010581034!5m2!1spt-BR!2sbr" width="80%" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    //     'purple',
    //     'Matemática',
    //     '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/4vvsoE0obRvFalTtxHGnTn?utm_source=generator" width="80%" height="100" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    //     18
    // ],
    // "João Francisco Luchtenberg Ventura": [
    //     "Masculino",
    //     "Março de 2009",
    //     '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28379.870351043755!2d-48.654605008634235!3d-27.23535228522384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8a96722683abb%3A0xd95794b9cc95d33f!2sTijucas%2C%20SC%2C%2088200-000!5e0!3m2!1spt-BR!2sbr!4v1761008478065!5m2!1spt-BR!2sbr" width="80%" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    //     'green',
    //     'Desenvolvimento de Sistemas',
    //     '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/album/0wHl2FK2AEhwIiYISv7cJ4?utm_source=generator" width="80%" height="100" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    //     19
    // ],
    // "João Paulo Fagundes": [
    //     "Masculino",
    //     "Março de 2008",
    //     '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28379.870351043755!2d-48.654605008634235!3d-27.23535228522384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8a96722683abb%3A0xd95794b9cc95d33f!2sTijucas%2C%20SC%2C%2088200-000!5e0!3m2!1spt-BR!2sbr!4v1761008478065!5m2!1spt-BR!2sbr" width="80%" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    //     'red',
    //     'Saída',
    //     'Não Tem',
    //     20
    // ],
    // "João Victor de Abreu Cunha": [
    //     "Masculino",
    //     "Fevereiro de 2008",
    //     '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14208.002320945485!2d-48.62996773107285!3d-27.093277621506456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8b10cf4da0413%3A0x231d20d09ad9775c!2sItapema%2C%20SC%2C%2088220-000!5e0!3m2!1spt-BR!2sbr!4v1761046011586!5m2!1spt-BR!2sbr" width="80%" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    //     'blue',
    //     'N/A',
    //     '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/70dJEanFPdYuWZumkrnKeX?utm_source=generator" width="80%" height="100" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    //     21
    // ],
    // "João Vitor Galiotto de Souza": [
    //     "Masculino",
    //     "Setembro de 2007",
    //     '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28379.870351043755!2d-48.654605008634235!3d-27.23535228522384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8a96722683abb%3A0xd95794b9cc95d33f!2sTijucas%2C%20SC%2C%2088200-000!5e0!3m2!1spt-BR!2sbr!4v1761008478065!5m2!1spt-BR!2sbr" width="80%" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    //     'purple',
    //     'N/A',
    //     '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/3p58wJmZqIc9RjsdeZ5Jfq?utm_source=generator" width="80%" height="100" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    //     22
    // ],
    // "João Vitor Santos": [
    //     "Masculino",
    //     "Março de 2008",
    //     '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28379.870351043755!2d-48.654605008634235!3d-27.23535228522384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8a96722683abb%3A0xd95794b9cc95d33f!2sTijucas%2C%20SC%2C%2088200-000!5e0!3m2!1spt-BR!2sbr!4v1761008478065!5m2!1spt-BR!2sbr" width="80%" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    //     '#000080',
    //     'Qualquer uma da Juliana',
    //     '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/2XymTaHTrQWDEuSyhfZvqF?utm_source=generator" width="80%" height="100" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    //     23
    // ],
    // "Jonas Luiz Marin": [
    //     "Masculino",
    //     "Março de 2008",
    //     '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28379.870351043755!2d-48.654605008634235!3d-27.23535228522384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8a96722683abb%3A0xd95794b9cc95d33f!2sTijucas%2C%20SC%2C%2088200-000!5e0!3m2!1spt-BR!2sbr!4v1761008478065!5m2!1spt-BR!2sbr" width="80%" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    //     'green',
    //     'Natureza',
    //     '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/54MXF9I8s3DuiQo3g0gZ5k?utm_source=generator" width="80%" height="100" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    //     24
    // ],
    // "Lucas Pereira": [
    //     "Masculino",
    //     "Agosto de 2007",
    //     '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28379.870351043755!2d-48.654605008634235!3d-27.23535228522384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8a96722683abb%3A0xd95794b9cc95d33f!2sTijucas%2C%20SC%2C%2088200-000!5e0!3m2!1spt-BR!2sbr!4v1761008478065!5m2!1spt-BR!2sbr" width="80%" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    //     'green',
    //     'Intervalo',
    //     '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/48KcBYlgJ6L4nPCkGsdDut?utm_source=generator" width="80%" height="100" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    //     25
    // ],
    // "Manuela Cristina Torres Guimarães": [
    //     "Feminino",
    //     "Outubro de 2007",
    //     '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28379.870351043755!2d-48.654605008634235!3d-27.23535228522384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8a96722683abb%3A0xd95794b9cc95d33f!2sTijucas%2C%20SC%2C%2088200-000!5e0!3m2!1spt-BR!2sbr!4v1761008478065!5m2!1spt-BR!2sbr" width="80%" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    //     '#fee9ee',
    //     'Não gosto de nenhuma',
    //     '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/7evftBiobEwWOwfxiTnnKc?utm_source=generator" width="80%" height="100" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    //     26
    // ],
    // "Mateus Queiroz Logrado": [
    //     "Masculino",
    //     "Setembro de 2006",
    //     '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14179.73229598782!2d-48.56763433095912!3d-27.315283057428992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952759d8bab09ea1%3A0x661be0ca9dd5db00!2sGov.%20Celso%20Ramos%2C%20SC%2C%2088190-000!5e0!3m2!1spt-BR!2sbr!4v1761568898609!5m2!1spt-BR!2sbr" width="80%" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    //     '#861720',
    //     'Matemática',
    //     '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/40i81AcCCxiVEFUWElcjZC?utm_source=generator" width="80%" height="100" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    //     27
    // ],
    // "Mateus Zandona Krieger": [
    //     "Masculino",
    //     "Abril de 2008",
    //     '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14208.002320945485!2d-48.62996773107285!3d-27.093277621506456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8b10cf4da0413%3A0x231d20d09ad9775c!2sItapema%2C%20SC%2C%2088220-000!5e0!3m2!1spt-BR!2sbr!4v1761046011586!5m2!1spt-BR!2sbr" width="80%" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    //     'pink',
    //     'Humanas',
    //     '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/4QUHJVXhwt14EzC0zOGa2I?utm_source=generator" width="80%" height="100" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    //     28
    // ],
    "Nicollas José Prim": [
        'Patotinha do Mal',
        'Masculino',
        2, 2008,
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28399.932419006625!2d-48.589466408831505!3d-27.156556011214292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8a59192f83479%3A0xb408dc5f7ad35162!2sPorto%20Belo%2C%20SC%2C%2088210-000!5e0!3m2!1spt-BR!2sbr!4v1761010581034!5m2!1spt-BR!2sbr" width="100" height="100" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        'Humanas',
        64, 170,
        29
    ],
    // "Nícollas Lopes do Nascimento": [
    //     "Masculino",
    //     "Outubro de 2007",
    //     '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14208.002320945485!2d-48.62996773107285!3d-27.093277621506456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8b10cf4da0413%3A0x231d20d09ad9775c!2sItapema%2C%20SC%2C%2088220-000!5e0!3m2!1spt-BR!2sbr!4v1761046011586!5m2!1spt-BR!2sbr" width="80%" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    //     'purple',
    //     'Linguagens',
    //     '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/7snQQk1zcKl8gZ92AnueZW?utm_source=generator" width="80%" height="100" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    //     30
    // ],
    // "Pedro Rafael Santiago": [
    //     "Masculino",
    //     "Outubro de 2008",
    //     '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28379.870351043755!2d-48.654605008634235!3d-27.23535228522384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8a96722683abb%3A0xd95794b9cc95d33f!2sTijucas%2C%20SC%2C%2088200-000!5e0!3m2!1spt-BR!2sbr!4v1761008478065!5m2!1spt-BR!2sbr" width="80%" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    //     'black',
    //     'Matemática',
    //     '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/7i1EsBBDoR8NDQqL8Smvh9?utm_source=generator" width="80%" height="100" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    //     31
    // ],
    // "Ruan Geraldo": [
    //     "Masculino",
    //     "Julho de 2007",
    //     '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28379.870351043755!2d-48.654605008634235!3d-27.23535228522384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8a96722683abb%3A0xd95794b9cc95d33f!2sTijucas%2C%20SC%2C%2088200-000!5e0!3m2!1spt-BR!2sbr!4v1761008478065!5m2!1spt-BR!2sbr" width="80%" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    //     'black',
    //     'Almoçar',
    //     '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/0hPRWztAIbNkt6GcFcLiqF?utm_source=generator" width="80%" height="100" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    //     32
    // ],
    // "Vinícius de Bona Ruas": [
    //     "Masculino",
    //     "Maio de 2007",
    //     '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28379.870351043755!2d-48.654605008634235!3d-27.23535228522384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8a96722683abb%3A0xd95794b9cc95d33f!2sTijucas%2C%20SC%2C%2088200-000!5e0!3m2!1spt-BR!2sbr!4v1761008478065!5m2!1spt-BR!2sbr" width="80%" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    //     'arco-iris',
    //     'Desenvolvimento de Sistemas',
    //     '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/0aRDSJHPIyPBGfOqxkLyTE?utm_source=generator" width="80%" height="100" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    //     33
    // ],
    // "Yan Bueno Goulart": [
    //     "Masculino",
    //     "Abril de 2007",
    //     '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14208.002320945485!2d-48.62996773107285!3d-27.093277621506456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8b10cf4da0413%3A0x231d20d09ad9775c!2sItapema%2C%20SC%2C%2088220-000!5e0!3m2!1spt-BR!2sbr!4v1761046011586!5m2!1spt-BR!2sbr" width="80%" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    //     'red',
    //     'Humanas',
    //     '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/0Bo5fjMtTfCD8vHGebivqc?utm_source=generator" width="80%" height="100" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    //     34
    // ]
};

const meses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
]

let aluno = document.getElementById("aluno");

window.addEventListener('load', () => {
    // function que pega o a data atual e multiplica seus valores para gerar um numero aleatorio diário
    let data = new Date();
    let dia = data.getDate();
    let mes = data.getMonth() + 1;
    // let numeroDiario = ((dia * 5) * mes) % alunos.length;

    let numeroDiario = 0

    const resposta = alunos[numeroDiario];

    aluno.innerHTML += `
    <input id="inAluno" list="lista">
    <datalist id="lista">
        <option value="Bryan Prinz da Silva">

        <option value="Nicollas José Prim">
    </datalist>
        <br><br>
        <div id='button-section'>
            <button onclick="verificarResposta(${numeroDiario})">Verificar</button>
        </div> <br>
    `
})
// 0: FILIAÇÃO || 1: GÊNERO || 2: MÊS || 3: ANO || 4: CIDADE || 5: MATÉRIA FAVORITA || 6: PESO || 7: ALTURA || 8: ID FOTO

function verificarResposta(numeroDiario) {
    let res = alunos[numeroDiario]

    const inputAluno = document.getElementById("inAluno").value;

    if (res === inputAluno) {
        document.getElementById("titulo").innerHTML = 'VOCÊ ACERTOU!'

        document.getElementById('button-section').innerHTML = `
            <button onclick="resetar()">Voltar</button>    
        `

        document.getElementById('inAluno').style.display = 'none'

        confetti({
            particleCount: 200, // quantidade de confetes
            spread: 100,        // abertura do efeito
            origin: { y: 0.6 }  // altura inicial (0 = topo, 1 = base)
        });
    } else {
        document.getElementById('dados').style.display = 'flex'

        montar(res, dadosAlunos[res], dadosAlunos[inputAluno])

        // aluno = res
        // dados = dadosAlunos[res]
        // input = dadosAlunos[inputAluno]
        montar(res, dadosAlunos[res], dadosAlunos[inputAluno])

        // aluno = res
        // dados = dadosAlunos[res]
        // input = dadosAlunos[inputAluno]

        inputAluno.value = ''
    }
}

function resetar() {
    window.location.reload();
}

function montar(aluno, dados, input) {
    let divou = document.createElement('div')
    divou.id = aluno
    divou.className = 'section-dados'
    divou.style.display = 'flex'

    let foto = document.createElement('div')
    let filiacao = document.createElement('div')
    let genero = document.createElement('div')
    let aniversario = document.createElement('div')
    let cidade = document.createElement('div')
    let materia = document.createElement('div')
    let peso = document.createElement('div')
    let altura = document.createElement('div')

    foto.className = 'rebolo'
    foto.id = 'foto-' + aluno

    filiacao.className = 'rebolo'
    filiacao.id = 'filiacao-' + aluno

    genero.className = 'rebolo'
    genero.id = 'genero-' + aluno

    aniversario.id = 'aniversario-' + aluno
    aniversario.classList = 'fundo'

    cidade.className = 'rebolo'
    cidade.id = 'cidade-' + aluno

    materia.className = 'rebolo'
    materia.id = 'materia-' + aluno

    peso.className = 'rebolo'
    peso.id = 'peso-' + aluno

    altura.className = 'rebolo'
    altura.id = 'altura-' + aluno

    // 0: FILIAÇÃO || 1: GÊNERO || 2: MÊS || 3: ANO || 4: CIDADE || 5: MATÉRIA FAVORITA || 6: PESO || 7: ALTURA || 8: ID FOTO

    foto.innerHTML = `
            <img src='/assets/img/aluno${input[8]}.png' width='100' height='100'>
        `
    if (input[8] == dados[8]) {
        foto.style.backgroundColor = 'rgba(65, 230, 0, 1)';
        foto.style.border = '3px solid rgba(140, 255, 125, 1)'
    }

    filiacao.innerHTML = input[0]
    if (input[0] == dados[0]) {
        filiacao.style.backgroundColor = 'rgba(65, 230, 0, 1)';
        filiacao.style.border = '3px solid rgba(140, 255, 125, 1)'
    }

    genero.innerHTML = input[1]
    if (input[1] == dados[1]) {
        genero.style.backgroundColor = 'rgba(65, 230, 0, 1)';
        genero.style.border = '3px solid rgba(140, 255, 125, 1)'
    }
    // else if ((input[2] == dados[2]) || (input[3] == dados[3])) {
    //     aniversario.style.backgroundColor = 'yellow';
    //     aniversario.style.border = '3px solid rgb(204, 204, 0)'
    //     aniversario.style.color = 'black'
    // }

    // 3 : ano | 2: mes
    aniversario.innerHTML = meses[input[2] - 1] + ' de ' + input[3]
    
    // ANIVERSÁRIO CORRETO | VERDE | SEM SETA
    if ((input[3] == dados[3]) && (input[2] == dados[2])) {
        aniversario.style.backgroundColor = 'rgba(65, 230, 0, 1)';
        aniversario.style.border = '3px solid rgba(140, 255, 125, 1)'
    } 
    // ALUNO MAIS VELHO E MESES IGUAIS | AMARELO | SETA PARA CIMA
    else if ((input[3] < dados[3])&& (input[2] == dados[2])) {
        aniversario.style.background = `url('/assets/img/seta-cima.png')`
        aniversario.style.backgroundSize = '100px 100px'
        aniversario.style.backgroundColor = 'yellow';
        
        // o aluno inserido é mais novo, logo tem que descer v
    } else if (input[3] > dados[3]) {
        aniversario.style.background = `url('/assets/img/seta-cima.png')`
        aniversario.style.backgroundSize = '100px 100px'
        aniversario.style.backgroundColor = 'yellow';
        
        // o aluno tem ano igual mas é mais novo, v
    } else if ((input[3] == dados[3]) || (input[2] > input[2])) {
        aniversario.style.background = `url('/assets/img/seta-cima.png')`
        aniversario.style.backgroundSize = '100px 100px'
        aniversario.style.backgroundColor = 'yellow';
        
        // o aluno tem ano igual mas é mais novo, ^
    } else if ((input[3] == dados[3]) || (input[2] < input[2])) {
        aniversario.style.background = `url('/assets/img/seta-cima.png')`
        aniversario.style.backgroundSize = '100px 100px'
        aniversario.style.backgroundColor = 'yellow';

    }

    cidade.innerHTML = input[4]
    if (input[4] == dados[4]) {
        genero.style.backgroundColor = 'rgba(65, 230, 0, 1)';
        genero.style.border = '3px solid rgba(140, 255, 125, 1)'
    }

    materia.innerHTML = input[5]
    if (input[5] == dados[5]) {
        genero.style.backgroundColor = 'rgba(65, 230, 0, 1)';
        genero.style.border = '3px solid rgba(140, 255, 125, 1)'
    }

    divou.appendChild(foto)
    divou.appendChild(filiacao)
    divou.appendChild(genero)
    divou.appendChild(aniversario)
    divou.appendChild(cidade)
    divou.appendChild(materia)
    divou.appendChild(peso)
    divou.appendChild(altura)

    document.getElementById('dados').prepend(divou)
}