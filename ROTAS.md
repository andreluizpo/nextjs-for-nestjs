```
SSR -> Sever Side Rendering
CSR -> Client Side Rendering


Route Static / SSG (Static Site Generation) <- Tenho o HTML pronto
Route Dynamic <- Não tem nada pronto
ISR <- Incremental Static Regeneration, Combinação do Static com Dynamic

/ <- ISR -> Depois de 60s quero atualizar o conteúdo dela
/ <- ISR -> Depois que atualizar algum conteúdo ela atualiza

/ (Pública)
/post/[slug] (Pública)

/admin/post (Privado - Dynamic) - Ler (R) Lista de posts / (D) Delete
/admin/post/[id] (Privado - Dynamic) - Atualizar um post (U)
/admin/post/new (Privado - Dynamic) - Criar um post (C)

/admin/login (Dynamic) - Fazer o login do usuário
```
