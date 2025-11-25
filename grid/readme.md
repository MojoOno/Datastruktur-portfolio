# Krav

Griddet skal laves som én klasse `Grid`.

Den klasse skal bruge et underliggende array til at gemme griddet - du bestemmer selv om du vil anvende et StaticArray eller et almindeligt JavaScript array. Men du må kun bruge ét array - og altså ikke anvende et array af arrays.

Klassen skal have en constructor:

- `consctructor( rows, cols )`  - der modtager antallet af rækker og antallet af kolonner, og initialiserer det underliggende array.

Den skal have en række metoder - og fælles for dem alle, er at de skal kunne modtage række og kolonne som ét objekt med to properties: `{ row, col }`

- `set( {row, col}, value )` - sætter `value` på den angivne plads.
- `get( {row, col} )` - returnerer `value` på den angivne plads
- `indexFor( {row, col} )` - returnerer index (nummeret) på cellen i denne række+kolonne
- `rowColFor( index )` - returnerer et `{row, col}` objekt for cellen med dette index (nummer)
- `neighbours( {row, col} )` - returnerer en liste over alle naboceller til denne (i form af `{row, col}` objekter
- `neighbourValues( {row, col} )` - returnerer en liste over alle nabocellers values.

Når der skal returneres en celle, er det i form at et objekt med `{row, col, value}`

- `nextInRow( {row, col} )` - returnerer cellen til højre efter denne, eller undefined hvis der ikke er flere i den **row**
- `nextInCol( {row, col} )` - returnerer cellen under denne, eller undefined hvis der ikke er flere i den **col**
- `north( {row, col} )` - returnerer cellen over denne, eller undefined, hvis der ikke er nogen
- `south( {row, col} )` - returnerer cellen under denne, eller undefined, hvis der ikke er nogen
- `west( {row, col} )` - returnerer cellen til venstre for denne, eller undefined, hvis der ikke er nogen
- `east( {row, col} )` - returnerer cellen til højre for denne, eller undefined, hvis der ikke er nogen

Der skal være et par metoder til at fortælle noget om strukturen

- `rows()` - returnerer antallet af rækker
- `cols()` - returnerer antallet af kolonner
- `size()` - returnerer det samlede antal celler

Og endelig en ækvivalent til clear.

- `fill( value )` - skriver den angivne value ind i alle celler

## Out of bounds

Ingen metoder må smide en exception hvis row eller col er uden for griddet - men du bestemmer selv hvilken strategi du vil anvende:

- ignorere værdierne, og returnere undefined
- gå ud fra at der mentes max (eller min) værdi, og returnerer hvad der ville passe i den situation
- gå ud fra at griddet er på en kugle, og “loope rundt” og tage en anden celle

I de fleste tilfælde vil enten den første eller den sidste strategi give mest mening - for eksempel i løsningen af [Game of Life](https://www.notion.so/Game-of-Life-2921d7fec097815582c2cdc5b52aa9cc?pvs=21) 

Brug samme strategi i alle metoder - både `set`, `get`, `neighbours`, `north`, `south`, etc.