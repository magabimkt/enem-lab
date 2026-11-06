/* ENEM Lab — dicas. Categorias vazias aparecem como "em breve".
   Cada dica: { titulo, texto, fonte } — a fonte deve ser verificável. */
(function () {
  'use strict';
  window.DICAS = [
    {
      id: 'estudo', emoji: '🧠', nome: 'Como estudar (neurociência da aprendizagem)',
      itens: [
        {
          titulo: 'Teste-se em vez de reler',
          texto: 'Tentar lembrar a informação sem olhar (flashcards, quiz, resumo de memória) fixa mais do que reler o texto. O esforço de recuperar é o que fortalece a memória.',
          fonte: 'Roediger & Karpicke (2006), Psychological Science — "Test-enhanced learning"'
        },
        {
          titulo: 'Espace as revisões',
          texto: 'Revisar em dias diferentes (hoje, amanhã, em alguns dias) retém mais que concentrar tudo em uma única sessão. Os flashcards do ENEM Lab já seguem esse calendário.',
          fonte: 'Dunlosky et al. (2013), Psychological Science in the Public Interest — prática distribuída e prática de testes têm alta utilidade'
        },
        {
          titulo: 'Misture os assuntos (intercalação)',
          texto: 'Alternar tipos de problema na mesma sessão parece mais difícil, mas melhora a capacidade de escolher a estratégia certa — exatamente o que a prova exige. Use o quiz misto.',
          fonte: 'Rohrer & Taylor (2007), Instructional Science — "The shuffling of mathematics problems improves learning"'
        },
        {
          titulo: 'Durma: o sono consolida o que você estudou',
          texto: 'Parte da consolidação da memória acontece durante o sono. Trocar a noite de sono por mais horas de estudo costuma render menos.',
          fonte: 'Diekelmann & Born (2010), Nature Reviews Neuroscience — "The memory function of sleep"'
        },
        {
          titulo: 'Pergunte "por quê?" ao estudar',
          texto: 'Explicar para si mesmo por que um fato é verdadeiro cria conexões entre ideias. Depois de ler um conceito, tente explicá-lo com suas palavras.',
          fonte: 'Dunlosky et al. (2013) — interrogação elaborativa e autoexplicação'
        }
      ]
    },
    { id: 'prova', emoji: '🎯', nome: 'Estratégia na prova', itens: [] },
    { id: 'redacao', emoji: '✍️', nome: 'Redação', itens: [] },
    { id: 'rotina', emoji: '🌙', nome: 'Rotina e bem-estar', itens: [] }
  ];
})();
