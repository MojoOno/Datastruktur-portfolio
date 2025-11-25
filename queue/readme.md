# Krav

Køen skal laves som én klasse `Queue`.

Klassen indeholder nodes - hver node er et objekt der linker til en anden node, og til et data-objekt. Du bestemmer selv om du også vil lave en klasse for den Node. 


⛔

Du må ikke bruge et JavaScript array med push, pop, shift, unshift til at implementere køen - det **skal** være en linked list!



Klassen skal indeholde mindst to properties

- `head` - som henviser til det forreste element i køen, eller null hvis den er tom
- `tail` - som henviser til det bageste element i køen, eller null hvis den er tom.

Derudover skal den som minimum indeholde disse metoder

- `enqueue( data )` - tilføjer en ny node, med reference til data-objektet, bagest i køen
- `dequeue()` - fjerner den node der ligger forrest i køen, og returnerer det referede data-objekt
- `peek()` - returnerer data-objektet der ligger forrest i køen, uden at fjerne det
- `size()` - fortæller hvor mange elementer der er i køen
- `get( index )` - finder og returnerer elementet på plads ‘index’, hvor 0 er det forreste, uden at fjerne noget