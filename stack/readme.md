# Krav

Køen skal laves som én klasse `Stack`.

Klassen indeholder nodes - hver node er et objekt der linker til en anden node, og til et data-objekt. Du bestemmer selv om du også vil lave en klasse for den Node. 

Fordi stacken implementeres med en linked liste, kan den i princippet vokse uendeligt


⛔

Du må ikke bruge hverken et JavaScript array med push, pop, shift, unshift eller et StaticArray med en stackpointer - det **skal** være en linked list!



Klassen skal indeholde mindst en property

- `head` - som henviser til det øverste element i stacken, eller null hvis den er tom

Derudover skal den som minimum indeholde disse metoder

- `push( data )` - tilføjer en ny node, med reference til data-objektet, på toppen af stacken
- `pop()` - fjerner den node der ligger øverst på stacken, og returnerer det referede data-objekt
- `peek()` - returnerer data-objektet der ligger øverst på stacken, uden at fjerne det
- `size()` - fortæller hvor mange elementer der er i stacken
- `get( index )` - finder og returnerer elementet på plads ‘index’, hvor 0 er det øverste, uden at fjerne noget